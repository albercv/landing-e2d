import { useParams, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation("global");

  // Sample blog post data - replace with your actual blog post content
  const post = {
    title: "Evolve2Digital Transformation",
    content: `
      <div class="mb-6">
        <p>Digital transformation is revolutionizing how businesses operate in today's fast-paced world. 
        At Evolve2Digital, we help organizations adapt to remain competitive and meet evolving customer expectations.</p>
      </div>
      
      <div class="mb-6">
        <h2 class="text-2xl font-bold mb-4">Key Components of Digital Transformation</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Technology Infrastructure Modernization</li>
          <li>Process Automation and Optimization</li>
          <li>Data-Driven Decision Making</li>
          <li>Customer Experience Enhancement</li>
        </ul>
      </div>
    `,
    date: "2024-02-26",
    author: "E2D Team"
  };

  return (
    <div className="landing-introduction">
      <div className="container mx-auto px-4 py-16">
        <Link 
          to="/blog" 
          className="inline-block mb-8 text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Blog
        </Link>
        
        <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="text-gray-600 dark:text-gray-400 mb-8">
            {new Date(post.date).toLocaleDateString()} • {post.author}
          </div>
          <div 
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;