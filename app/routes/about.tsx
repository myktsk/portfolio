import type { Route } from "./+types/home";
import { About as AboutPage } from "../pages/about/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Miyuki Tuisku Portfolio" },
    { name: "description", content: "" },
  ];
}

export default function About() {
  return <AboutPage />;
}
