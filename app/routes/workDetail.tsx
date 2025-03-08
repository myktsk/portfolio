import type { Route } from "./+types/home";
import { WorkDetail as WorkDetailPage } from "../pages/workDetail/WorkDetail";
import { WORKS } from "~/models/works/works.const";
import type { Work } from "~/models/works/works.types";

export async function loader({ params }: Route.LoaderArgs) {
  const work = WORKS.find((work) => work.id === params.workId);
  if (!work) throw new Error("Work not found");
  return { work };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Works | Miyuki Tuisku Portfolio" },
    { name: "description", content: "Explore my projects and creations." },
  ];
}

export default function Component({
  loaderData,
}: {
  loaderData: { work: Work };
}) {
  if (!loaderData || !loaderData.work) return null;
  return <WorkDetailPage work={loaderData.work} />;
}
