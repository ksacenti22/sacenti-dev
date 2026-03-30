import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Why the Pineapple Favicon? | Keith Sacenti",
  description: "The significance of the pineapple — a symbol of hospitality.",
};

export default function PineapplePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-14 h-14">
              <Image
                src="/pineapple.PNG"
                alt="Pineapple favicon"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Why the pineapple favicon?
            </h1>
          </div>
          <p className="text-slate-400 text-sm italic">
            You found the easter egg. Not many do.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-14 space-y-8">

        {/* H1 */}
        <h2 className="text-2xl font-bold text-amber-700">
          The Significance of the Pineapple — A Symbol of Hospitality
        </h2>

        {/* Paragraphs */}
        <p className="text-slate-700 leading-relaxed text-lg">
          As the tale goes, colonial merchants would leave the fruit of their trade, the exotic
          pineapple, outside their homes as a symbol of safe return and an invitation to come say hello.
        </p>

        <p className="text-slate-700 leading-relaxed text-lg">
          Earlier still, North American and European merchants used pineapples to welcome their most
          honored guests. If you wanted to impress your dinner party, you'd unveil the most exotic and
          expensive treat, the "King of Fruit". While pineapples remained rare in non-tropical climates
          until the 1800s, the symbol took root. The crowned fruit became common in architecture as a
          sign of good cheer, warmth and celebration.
        </p>

        <p className="text-slate-700 leading-relaxed text-lg">
          Today, hospitality organizations retain the pineapple as a token of guest-first mindset,
          selfless service and leading with integrity. These traits guide my personal and professional
          action each day.
        </p>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-8 pt-4">

          {/* Image 1 */}
          <a
            href="https://buildingsofnewengland.com/2025/06/26/richard-trevett-house-1730/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
              <Image
                src="/richard-trevett-house.jpeg"
                alt="Richard Trevett House"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-3">
              <p className="font-semibold text-slate-800 group-hover:text-amber-700 transition-colors">
                Richard Trevett House
              </p>
              <p className="text-sm text-slate-400">Marblehead, MA // c.1730</p>
            </div>
          </a>

          {/* Image 2 */}
          <a
            href="https://londonist.com/london/history/why-is-london-so-obsessed-with-pineapples"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
              <Image
                src="/pineapple-spire.jpg"
                alt="St. Paul's Cathedral pineapple spire"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-3">
              <p className="font-semibold text-slate-800 group-hover:text-amber-700 transition-colors">
                St. Paul's Cathedral
              </p>
              <p className="text-sm text-slate-400">London, England // c.1710</p>
            </div>
          </a>

        </div>
      </article>

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-slate-100 pt-8">
          <Link
            href="/"
            className="text-sm text-amber-600 hover:text-amber-800 font-medium transition-colors flex items-center gap-1.5"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
