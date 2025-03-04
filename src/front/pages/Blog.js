import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
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
    return <div className="pt-[200px]">{t("common.loading") || "Loading..."}...</div>;
  }

  const postContent = post[currentLanguage] || post["EN"] || post["en"] || {};

  return (
    <div className="landing-introduction pt-[200px]">
      <div className="container mx-auto px-4 py-16">
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

          <img
            src={post.image}
            alt={postContent.title}
            className="w-full h-auto max-h-96 object-cover my-6 rounded-lg"
            onError={(e) => {
              console.error(`Failed to load image for post: ${post.id}`);
              e.target.src = '/assets/images/placeholder.jpg';
            }}
          />

          <div className="text-gray-600 dark:text-gray-400 mb-8">
            {new Date(post.date).toLocaleDateString(i18n.language)} • {post.author || t("blog.unknownAuthor") || "Unknown"}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown>{postContent.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;