import LiquidEther from "../components/LiquidEther";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
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
