import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Smartphones in 2025",
    excerpt: "Explore the latest trends in smartphone technology, from foldable displays to AI-powered cameras.",
    author: "Store Team",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    category: "Phones",
  },
  {
    id: 2,
    title: "Gaming Laptops: What to Look For",
    excerpt: "A comprehensive guide to choosing the perfect gaming laptop for your needs and budget.",
    author: "Store Team",
    date: "Feb 10, 2025",
    readTime: "8 min read",
    category: "Laptops",
  },
  {
    id: 3,
    title: "Smartwatches: Fitness Tracking Revolution",
    excerpt: "How modern smartwatches are changing the way we monitor our health and stay connected.",
    author: "Store Team",
    date: "Feb 5, 2025",
    readTime: "6 min read",
    category: "Watches",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Latest news, reviews, and insights from the world of technology.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 hover:text-accent transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-secondary/50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest tech news and exclusive deals delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-xl hover:bg-accent/90 transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
