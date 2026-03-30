import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-royal-700 font-bold text-lg">Keith Sacenti</p>
          <p className="text-slate-500 text-sm mt-1">Product leader. Cloud security. Iterating always.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/" className="text-sm text-slate-500 hover:text-royal-500 transition-colors">Home</Link>
          <Link href="/blog" className="text-sm text-slate-500 hover:text-royal-500 transition-colors">Blog</Link>
          <a
            href="https://www.linkedin.com/in/keithsacenti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-royal-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ksacenti22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-royal-500 transition-colors"
          >
            GitHub
          </a>
          <Link
            href="/pineapple"
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-amber-500 transition-colors"
          >
            Why the{" "}
            <span className="relative inline-block w-4 h-4">
              <Image src="/pineapple.PNG" alt="pineapple" fill className="object-contain" />
            </span>
            {" "}favicon?
          </Link>
        </div>

        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Keith Sacenti
        </p>
      </div>
    </footer>
  );
}
