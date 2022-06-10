import store from "@/state/store";

export default [
  {
    path: "/",
    name: "home",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/dashboards/sales/index"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/pages/account/login"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "home" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/pages/account/register"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "home" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("../views/pages/account/forgot-password"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "home" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },

  {
    path: "/dashboards/analytics",
    name: "analytics-dashboard",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/dashboards/analytics/index"),
  },
  {
    path: "/calendar",
    name: "calendar",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/calendar/index"),
  },
  {
    path: "/file-manager",
    name: "file-manager",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/file-manager"),
  },
  {
    path: "/email/inbox",
    name: "email-inbox",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/email/inbox"),
  },
  {
    path: "/email/read/:id",
    name: "email-read",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/email/read-email"),
  },
  {
    path: "/contacts/grid",
    name: "contact-grid",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/contacts/grid"),
  },
  {
    path: "/contacts/list",
    name: "contact-list",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/contacts/list"),
  },
  {
    path: "/user/settings",
    name: "user-settings",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/contacts/user-settings"),
  },
  {
    path: "/kanban-board",
    name: "kanban-board",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/kanban/index"),
  },
  {
    path: "/apps/chat",
    name: "chat",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/chat/index"),
  },
  {
    path: "/projects/grid",
    name: "project-grid",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/projects/grid"),
  },
  {
    path: "/projects/list",
    name: "list",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/projects/list"),
  },
  {
    path: "/projects/overview",
    name: "overview",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/projects/overview"),
  },
  {
    path: "/projects/create",
    name: "create",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/projects/create"),
  },
  {
    path: "/invoices/list",
    name: "invoices-list",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/invoices/list"),
  },
  {
    path: "/invoices/detail",
    name: "invoices-detail",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/invoices/detail"),
  },
  {
    path: "/timeline/center",
    name: "timeline-center",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/timeline/center"),
  },
  {
    path: "/timeline/horizontal",
    name: "timeline-horizontal",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/timeline/horizontal"),
  },
  {
    path: "/timeline/left",
    name: "timeline-left",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/timeline/left"),
  },
  {
    path: "/gallery",
    name: "gallery",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/gallery/index"),
  },
  {
    path: "/pricing/table",
    name: "pricing-table",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/pricing/table"),
  },
  {
    path: "/pricing/basic",
    name: "pricing-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/pricing/basic"),
  },
  {
    path: "/ui/alerts",
    name: "alerts",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/alerts"),
  },
  {
    path: "/ui/buttons",
    name: "buttons",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/buttons"),
  },
  {
    path: "/ui/cards",
    name: "cards",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/cards"),
  },
  {
    path: "/ui/carousel",
    name: "carousel",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/carousel"),
  },
  {
    path: "/ui/dropdowns",
    name: "dropdowns",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/dropdowns"),
  },
  {
    path: "/ui/grid",
    name: "ui-grid",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/grid"),
  },
  {
    path: "/ui/images",
    name: "images",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/images"),
  },
  {
    path: "/ui/modals",
    name: "modals",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/modals"),
  },
  {
    path: "/ui/progressbars",
    name: "progressbars",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/progressbar"),
  },
  {
    path: "/ui/tabs-accordions",
    name: "tabs-accordions",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/tabs"),
  },
  {
    path: "/ui/typography",
    name: "typography",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/typography"),
  },
  {
    path: "/ui/video",
    name: "video",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/video"),
  },
  {
    path: "/ui/colors",
    name: "colors",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/colors"),
  },
  {
    path: "/ui/general",
    name: "general",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/general"),
  },
  {
    path: "/ui/placeholder",
    name: "placeholder",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/placeholder"),
  },
  {
    path: "/ui/utilities",
    name: "utility",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/ui/utilities"),
  },
  {
    path: "/pages/maintenance",
    name: "maintenance",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/utility/maintenance"),
  },
  {
    path: "/pages/comingsoon",
    name: "comingsoon",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/utility/comingsoon"),
  },
  {
    path: "/pages/faqs",
    name: "faqs",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/utility/faqs"),
  },
  {
    path: "/pages/profile",
    name: "profile",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/utility/profile"),
  },
  {
    path: "/pages/starter",
    name: "starter",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/utility/starter"),
  },
  {
    path: "/extended/lightbox",
    name: "lightbox",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/extended/lightbox"),
  },
  {
    path: "/extended/rangeslider",
    name: "rangeslider",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/extended/rangeslider"),
  },
  {
    path: "/extended/sweet-alert",
    name: "sweet-alert",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/extended/sweet-alert"),
  },
  {
    path: "/extended/notifications",
    name: "notifications",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/extended/notifications"),
  },
  {
    path: "/extended/rating",
    name: "rating",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/extended/rating"),
  },
  {
    path: "/widgets",
    name: "widgets",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/widgets/index"),
  },
  {
    path: "/form/elements",
    name: "elements",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/forms/elements"),
  },
  {
    path: "/form/validation",
    name: "validation",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/forms/validation"),
  },
  {
    path: "/form/advanced",
    name: "advanced",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/forms/advanced"),
  },
  {
    path: "/form/editors",
    name: "editors",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/forms/editors"),
  },
  {
    path: "/form/uploads",
    name: "uploads",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/forms/uploads"),
  },
  {
    path: "/form/wizard",
    name: "wizard",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/forms/wizard"),
  },
  {
    path: "/form/mask",
    name: "mask",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/forms/mask"),
  },
  {
    path: "/tables/basic",
    name: "table-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/tables/basic"),
  },
  {
    path: "/tables/advanced",
    name: "table-advanced",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/tables/advanced"),
  },
  {
    path: "/charts/line",
    name: "line",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/line/index"),
  },
  {
    path: "/charts/area",
    name: "area-chart",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/area/index"),
  },
  {
    path: "/charts/bar",
    name: "bar-chart",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/bar/index"),
  },
  {
    path: "/charts/column",
    name: "column-chart",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/column/index"),
  },
  {
    path: "/charts/timeline",
    name: "timeline-chart",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/timeline/index"),
  },
  {
    path: "/charts/mixed",
    name: "mixed-chart",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/mixed/index"),
  },
  {
    path: "/charts/candlestick",
    name: "candlestick",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/candlestick/index"),
  },
  {
    path: "/charts/boxplot",
    name: "boxplot",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/boxplot/index"),
  },
  {
    path: "/charts/bubble",
    name: "bubble",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/bubble/index"),
  },
  {
    path: "/charts/scatter",
    name: "scatter",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/scatter/index"),
  },
  {
    path: "/charts/heatmap",
    name: "heatmap",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/heatmap/index"),
  },
  {
    path: "/charts/treemap",
    name: "treemap",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/treemap/index"),
  },
  {
    path: "/charts/pie",
    name: "pie",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/pie/index"),
  },
  {
    path: "/charts/radialbar",
    name: "radialbar",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/radiabar/index"),
  },
  {
    path: "/charts/radar",
    name: "radar",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/radar/index"),
  },
  {
    path: "/charts/polararea",
    name: "polararea",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/charts/polararea/index"),
  },
  {
    path: "/icons/unicons",
    name: "unicons",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/icons/unicons"),
  },
  {
    path: "/icons/feather",
    name: "feather",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/icons/feather"),
  },
  {
    path: "/icons/boxicons",
    name: "boxicons",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/icons/boxicons"),
  },
  {
    path: "/icons/material",
    name: "material",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/icons/material"),
  },
  {
    path: "/icons/fontawesome",
    name: "fontawesome",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/icons/fontawesome"),
  },
  {
    path: "/auth/signin-basic",
    name: "signin-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/signin/basic"),
  },
  {
    path: "/auth/signin-cover",
    name: "signin-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/signin/cover"),
  },
  {
    path: "/auth/signup-cover",
    name: "signup-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/signup/cover"),
  },
  {
    path: "/auth/signup-basic",
    name: "signup-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/signup/basic"),
  },
  {
    path: "/auth/signout-basic",
    name: "signout-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/signout/basic"),
  },
  {
    path: "/auth/signout-cover",
    name: "signout-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/signout/cover"),
  },
  {
    path: "/auth/lockscreen-cover",
    name: "lockscreen-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/lockscreen/cover"),
  },
  {
    path: "/auth/lockscreen-basic",
    name: "lockscreen-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/lockscreen/basic"),
  },
  {
    path: "/auth/forgotpassword-basic",
    name: "forgotpassword-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/forgotpassword/basic"),
  },
  {
    path: "/auth/forgotpassword-cover",
    name: "forgotpassword-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/forgotpassword/cover"),
  },
  {
    path: "/auth/resetpassword-cover",
    name: "resetpassword-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/resetpassword/cover"),
  },
  {
    path: "/auth/resetpassword-basic",
    name: "resetpassword-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/resetpassword/basic"),
  },
  {
    path: "/auth/emailverification-basic",
    name: "emailverification-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/emailverification/basic"),
  },
  {
    path: "/auth/emailverification-cover",
    name: "emailverification-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/emailverification/cover"),
  },
  {
    path: "/auth/2stepverification-cover",
    name: "2stepverification-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/2stepverification/cover"),
  },
  {
    path: "/auth/2stepverification-basic",
    name: "2stepverification-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/2stepverification/basic"),
  },
  {
    path: "/auth/thankyou-basic",
    name: "thankyou-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/thankyou/basic"),
  },
  {
    path: "/auth/thankyou-cover",
    name: "thankyou-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/auth/thankyou/cover"),
  },
  {
    path: "/maps/google",
    name: "google-map",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/maps/google/index"),
  },
  {
    path: "/maps/vector",
    name: "vector-map",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/maps/vector/index"),
  },
  {
    path: "/maps/leaflet",
    name: "leaflet-map",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/maps/leaflet/index"),
  },
  {
    path: "/error/404-basic",
    name: "error-404-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/errors/404-basic"),
  },
  {
    path: "/error/404-cover",
    name: "error-404-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/errors/404-cover"),
  },
  {
    path: "/error/500-basic",
    name: "error-500-basic",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/errors/500-basic"),
  },
  {
    path: "/error/500-cover",
    name: "error-500-cover",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/errors/500-cover"),
  },
];
