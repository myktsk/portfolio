import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome/Welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Miyuki Tuisku Portfolio" },
    {
      name: "description",
      content:
        "I build fast, user-friendly web experiences with clean code. Explore my work in frontend and backend development, UX design, AI solutions, and more.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
