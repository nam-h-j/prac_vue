export default [
  {
    path: "/stateTestPage",
    name: "StateTestPage",
    meta: {
      authRequired: true,
    },
    component: () => import("../page/StateTestPage"),
  },
  {
    path: "/stateWithVuexPage",
    name: "StateWithVuexPage",
    meta: {
      authRequired: true,
    },
    component: () => import("../page/StateWithVuexPage"),
  },
];
