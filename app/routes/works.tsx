import type { Route } from "./+types/home";
import { Works as WorksPage } from "../pages/works/Works";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Works | Miyuki Tuisku Portfolio" },
    { name: "description", content: "Explore my projects and creations." },
  ];
}

export default function Works() {
  return <WorksPage />;
}
