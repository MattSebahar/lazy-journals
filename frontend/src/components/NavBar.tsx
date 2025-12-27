import { Link } from "react-router";
import GlassSurface from "./GlassSurface";

interface NavRoute {
  path: string;
  label: string;
}

const landingRoutes: NavRoute[] = [
  { path: "/journal", label: "Journal" },
  { path: "/work", label: "Work" },
  { path: "/calendar", label: "Calendar" },
  { path: "/todos", label: "To-Dos" },
];

export default function NavBar({
  routes = landingRoutes,
}: {
  routes?: NavRoute[];
}) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <GlassSurface width={"100%"} height={60} borderRadius={40}>
        <div className="flex gap-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="px-4 py-2 bg-[#5227FF] bg-opacity-50 text-white font-semibold rounded-full hover:bg-opacity-80 transition"
            >
              {route.label}
            </Link>
          ))}
        </div>
      </GlassSurface>
    </div>
  );
}
