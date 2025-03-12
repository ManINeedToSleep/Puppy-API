import Puppy from "@/components/fetchPuppy";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-100 to-amber-50 p-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-5 left-5 w-16 h-16 bg-amber-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-10 w-12 h-12 bg-amber-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-40 right-5 w-16 h-16 bg-amber-300 rounded-full opacity-30 animate-bounce"></div>
      
      {/* Paw prints */}
      <div className="absolute top-[15%] left-[10%] text-5xl opacity-10 rotate-12">🐾</div>
      <div className="absolute top-[30%] right-[15%] text-6xl opacity-10 -rotate-12">🐾</div>
      <div className="absolute bottom-[20%] left-[20%] text-5xl opacity-10 rotate-45">🐾</div>
      <div className="absolute bottom-[35%] right-[10%] text-4xl opacity-10 -rotate-12">🐾</div>
      
      <div className="relative flex flex-col items-center justify-center z-10">
        <header className="w-full max-w-4xl text-center mb-8 relative">
          <div className="absolute inset-0 bg-amber-400 opacity-5 rounded-lg transform -rotate-1"></div>
          <div className="relative p-6">
            <h1 className="text-5xl font-bold text-amber-600 mb-2 drop-shadow-md">
              The Doge House 🐕
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto my-4 rounded-full"></div>
            <p className="text-gray-600 text-xl">Find your next favorite doggo!</p>
          </div>
        </header>
        
        <main className="w-full max-w-4xl relative">
          <Puppy />
        </main>
        
        <footer className="mt-12 text-center text-gray-500 text-sm p-4">
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto my-4 rounded-full opacity-50"></div>
          <p>Powered by the Dog CEO API • Made with ❤️ for puppy lovers</p>
        </footer>
      </div>
    </div>
  );
}
