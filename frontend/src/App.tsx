import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

/**
 * src/App.tsx
 * The main application component that handles routing.
 */
function App() {
  return (
    <Routes>
      {/* Root -> Home Page */}
      <Route path="/" element={<Home />} />

      {/* FUTURE ROUTES WILL GO HERE, like: */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default App;
