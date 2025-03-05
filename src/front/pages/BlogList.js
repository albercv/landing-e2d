import posts from "../../posts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import MediaContent from "../components/MediaContent";

const BlogList = () => {
  const { t, i18n } = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");

  useEffect(() => {
    setCurrentLanguage(i18n.language || "en");
  }, [i18n.language]);

  return (
    <div className="container pt-[200px] mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">{t("blog.latestPosts")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const postContent = post[currentLanguage] || post.en;

          return (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                <MediaContent 
                  media={post.media || { type: "image", url: post.image }} 
                  title={postContent.title} 
                  id={post.id}
                  isPreview={true}
                />
                <div className="p-4 flex-grow">
                  <h2 className="text-xl font-bold">{postContent.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                  <p className="text-gray-700">
                    {postContent.summary || postContent.content.substring(0, 100) + "..."}
                  </p>
                  <span className="text-blue-500 font-semibold mt-2 inline-block">
                    {t("blog.readMore")} →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
