import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Work from "./pages/Work";
import Calendar from "./pages/Calendar";
import Todos from "./pages/Todos";

/**
 * src/App.tsx
 * The main application component that handles routing.
 */
export default function App() {
  return (
    <Routes>
      {/* Root -> Home Page */}
      <Route path="/" element={<Home />} />

      {/* Nav Bar -> Working Sections */}
      <Route path="/journal" element={<Journal />} />
      <Route path="/work" element={<Work />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/todos" element={<Todos />} />

      {/* Other Routes */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}
