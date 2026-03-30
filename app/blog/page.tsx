import { getAllPosts, getAllTags } from "@/lib/posts";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | Keith Sacenti",
  description: "Thoughts on cloud security, product management, data, and life in general.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-royal-50 via-white to-slate-50 pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-royal-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Writing
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Blog</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Thoughts on cloud security, product management, data storytelling, and whatever else
            I'm iterating on.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <BlogClient posts={posts} tags={tags} />
      </div>
    </div>
  );
}
