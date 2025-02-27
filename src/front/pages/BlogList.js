import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const BlogList = () => {
  const { t } = useTranslation("global");

  // Sample blog posts data - you can replace this with your actual blog posts
  const posts = [
    {
      id: 1,
      title: "Evolve2Digital Transformation",
      excerpt: "Discover how E2D is helping businesses transform digitally.",
      date: "2024-02-26",
      slug: "e2d-transformation",
      imageUrl: "/path-to-your-image.jpg" // Add your image path
    },
    {
      id: 2,
      title: "AI Solutions for Business",
      excerpt: "Learn about our cutting-edge AI solutions for modern businesses.",
      date: "2024-02-24",
      slug: "ai-solutions",
      imageUrl: "/path-to-your-image.jpg" // Add your image path
    },
    {
      id: 3,
      title: "Digital Evolution Strategy",
      excerpt: "Strategic approaches to digital evolution in 2024.",
      date: "2024-02-22",
      slug: "digital-evolution",
      imageUrl: "/path-to-your-image.jpg" // Add your image path
    }
  ];

  return (
    <div className="landing-introduction">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="landing-introduction-text-title">
            E2D Blog
          </h1>
          <p className="landing-introduction-text-description">
            Insights and updates from Evolve2Digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;