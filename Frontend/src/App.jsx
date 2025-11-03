import Navbar from "./components/Navbar";
import AllPolls from "./components/AllPolls";
import CreatePoll from "./components/CreatePoll";

function App() {
  return (
    <>
      <div className="min-h-screen w-full relative bg-white">
        {/* Purple Glow Top */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(173, 109, 244, 0.5),
          transparent 70%
        )
      `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Navbar />
        <div className="relative z-10">
          {/* <AllPolls /> */}
          <CreatePoll />
        </div>
      </div>
    </>
  );
}

export default App;
