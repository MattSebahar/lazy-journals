import LiquidEther from "../components/LiquidEther";
import GlassSurface from "../components/GlassSurface";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* The nav bar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <GlassSurface width={"100%"} height={60} borderRadius={40}>
          <div className="flex h-full w-full items-center justify-between px-8">
            <span className="font-bold text-[#5227FF] tracking-tight">
              Lazy Journals
            </span>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white bg-opacity-20 text-[#5227FF] font-semibold rounded-full hover:bg-opacity-60 transition">
              Personal
            </button>
            <button className="px-4 py-2 bg-white bg-opacity-20 text-[#5227FF] font-semibold rounded-full hover:bg-opacity-60 transition">
              Work
            </button>
          </div>
        </GlassSurface>
      </div>

      {/* The Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      {/* The Content (for now) */}
      <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
        <div className="text-center">
          <h1 className="text-6xl font-black text-white mix-blend-difference mb-4">
            Lazy Journals
          </h1>
          <p className="text-xl text-white mix-blend-difference font-light">
            For keeping track when your day is wack.
          </p>
        </div>
      </div>
    </div>
  );
}
