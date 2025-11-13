import { BrowserRouter, Route, Routes } from "react-router";

import AllPolls from "./components/AllPolls";
import CreatePoll from "./components/CreatePoll";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AppLayout from "./pages/AppLayout";

import { AuthProvider } from "./features/authentication/AuthContext";

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

        <div className="relative z-10">
          {/* Change below to create browser router */}
          <BrowserRouter>
            {/* For Authentication */}
            <AuthProvider>
              <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<AllPolls />} />
                  <Route path="createPoll" element={<CreatePoll />} />
                </Route>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
