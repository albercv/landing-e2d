import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import MediaContent from "../components/MediaContent.js";
import posts from "../../posts";

const BlogPost = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation("global");
  const [post, setPost] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState((i18n.language || "en").toUpperCase());

  useEffect(() => {
    setCurrentLanguage((i18n.language || "en").toUpperCase());
  }, [i18n.language]);

  useEffect(() => {
    const foundPost = posts.find(post => post.id === slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) {
    return <div className="pt-20 md:pt-32">{t("common.loading") || "Loading..."}...</div>;
  }

  const postContent = post[currentLanguage] || post["EN"] || post["en"] || {};

  const formatMarkdownContent = (content) => {
    if (!content) return '';
    if (typeof content === 'string') {
      return content.trim().replace(/^\s+/gm, '');
    }
    return String(content).trim().replace(/^\s+/gm, '');
  };

  return (
    <div className="landing-introduction">
      <div className="container mx-auto px-4 pt-16 md:pt-24">
        <Link
          to="/blog"
          className="inline-block mb-8 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← {t("blog.backToBlog")}
        </Link>

        <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {postContent.title}
          </h1>

          <MediaContent media={post.media} title={postContent.title} id={post.id} />

          <div className="text-gray-600 dark:text-gray-400 mb-8">
            {new Date(post.date).toLocaleDateString(i18n.language)} • {post.author || t("blog.unknownAuthor") || "Unknown"}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none overflow-x-hidden">
            <ReactMarkdown
              components={{
                h1: ({children}) => <h1 className="text-4xl font-bold mb-4 mt-6 text-gray-900 dark:text-white">{children}</h1>,
                h2: ({children}) => <h2 className="text-3xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">{children}</h2>,
                h3: ({children}) => <h3 className="text-2xl font-bold mb-2 mt-4 text-gray-900 dark:text-white">{children}</h3>,
                p: ({children}) => <p className="mb-4 text-gray-600 dark:text-gray-300">{children}</p>,
                ul: ({children}) => <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal pl-6 mb-4 text-gray-600 dark:text-gray-300">{children}</ol>,
                li: ({children}) => <li className="mb-2">{children}</li>,
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600 dark:text-gray-300">{children}</blockquote>
                ),
                hr: () => <hr className="my-8 border-t-2 border-gray-200 dark:border-gray-700" />,
                strong: ({children}) => <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>,
                em: ({children}) => <em className="italic">{children}</em>,
                a: ({href, children}) => (
                  <a href={href} className="text-blue-600 hover:underline dark:text-blue-400">{children}</a>
                ),
              }}
            >
              {formatMarkdownContent(postContent.content)}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;