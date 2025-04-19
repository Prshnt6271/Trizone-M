export default function Service1() {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-start p-20">
        <div>
          <h1 className="text-8xl font-semibold">
            Unlock Your <br />
            Potential With <br />
            Us
          </h1>
          <p className="mt-6 text-gray-400 text-lg">✦ Our Services</p>
          <button className="mt-8 px-6 py-3 rounded-full text-white font-medium text-lg bg-black border border-lime-400 relative overflow-hidden glow-button">
            Work With Us
          </button>
        </div>
  
        <style jsx>{`
          .glow-button {
            box-shadow: 0 0 20px 0 rgba(163, 255, 82, 0.5);
            transition: box-shadow 0.3s ease-in-out;
          }
  
          .glow-button:hover {
            box-shadow: 0 0 40px 10px rgba(163, 255, 82, 0.8);
          }
        `}</style>
      </div>
    );
  }
  