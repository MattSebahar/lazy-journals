import React from "react";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-[#5227FF] bg-opacity-20 flex items-center justify-center z-[100]">
      <div className="bg-white w-[400px] backdrop-blur-sm rounded-lg p-8 flex flex-col items-center gap-4 pointer-events-auto">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <form className="flex flex-col gap-4 w-64">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5227FF]"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5227FF]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#5227FF] text-white font-semibold rounded-md hover:bg-opacity-80 transition"
          >
            Submit (To be set up)
          </button>
        </form>

        <button
          className="px-4 py-2 bg-[#5227FF] bg-opacity-60 text-white font-semibold rounded-full
        pointer-events-auto hover:bg-opacity-80 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
