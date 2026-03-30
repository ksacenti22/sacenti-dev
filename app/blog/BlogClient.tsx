"use client";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import type { PostMeta } from "@/lib/posts";

export default function BlogClient({
  posts,
  tags,
}: {
  posts: PostMeta[];
  tags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <>
      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            activeTag === null
              ? "bg-royal-600 text-white shadow"
              : "bg-royal-50 text-royal-600 hover:bg-royal-100 border border-royal-100"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeTag === tag
                ? "bg-royal-600 text-white shadow"
                : "bg-royal-50 text-royal-600 hover:bg-royal-100 border border-royal-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {filtered.length === 0 ? (
        <p className="text-slate-400 text-center py-16">No posts yet in this category.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <div key={post.slug} className="reveal">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
