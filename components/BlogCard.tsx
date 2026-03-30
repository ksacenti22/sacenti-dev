import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-royal-200 transition-all duration-300 group-hover:-translate-y-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-royal-50 text-royal-600 border border-royal-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-royal-600 transition-colors leading-snug">
          {post.title}
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-50">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>{post.readTime}</span>
        </div>
      </article>
    </Link>
  );
}
