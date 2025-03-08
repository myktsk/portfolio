import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("works", "routes/works.tsx"),
  route("work/:workId", "routes/workDetail.tsx"),
] satisfies RouteConfig;
