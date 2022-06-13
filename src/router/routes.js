import testRoute from "./testRoute";
export default [
  {
    path: "/",
    name: "landing",
    meta: {
      authRequired: true,
    },
    component: () => import("../page/LandingPage"),
  },
  ...testRoute,
];
