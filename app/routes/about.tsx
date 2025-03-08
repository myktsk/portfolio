import type { Route } from "./+types/home";
import { About as AboutPage } from "../pages/about/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Miyuki Tuisku Portfolio" },
    { name: "description", content: "Learn my bio, skills, and inspirations." },
  ];
}

export default function About() {
  return <AboutPage />;
}
