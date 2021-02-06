import store from "../store";
import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/s",
    name: "Student",
    component: () =>
      import(
        /* webpackChunkName: "stlayout" */ "../components/layouts/StudentLayout.vue"
      ),
    beforeEnter: (to, from, next) => {
      if (store.modules.user.state.authenticated == false) {
        //next(false);
        next("/login");
      } else {
        next();
      }
    },
    children: [
      {
        path: "home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/student/Home.vue"),
      },
      {
        path: "notification",
        name: "Notification",
        component: () =>
          import(
            /* webpackChunkName: "notif" */ "../views/student/Notification.vue"
          ),
      },
      {
        path: "assignments",
        name: "Assignments",
        component: () =>
          import(
            /* webpackChunkName: "assignments" */ "../views/student/Assignments.vue"
          ),
      },
      {
        path: "resources",
        name: "Resources",
        component: () =>
          import(
            /* webpackChunkName: "resources" */ "../views/student/Resources.vue"
          ),
      },
      {
        path: "people",
        name: "People",
        component: () =>
          import(
            /* webpackChunkName: "people" */ "../views/student/People.vue"
          ),
      },
      {
        path: "courses",
        name: "Courses",
        component: () =>
          import(
            /* webpackChunkName: "courses" */ "../views/student/Courses.vue"
          ),
      },
    ],
  },
  {
    path: "/workspace",
    name: "Workspace",
    component: () =>
      import(
        /* webpackChunkName: "workspace" */ "../views/student/Workspace.vue"
      ),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];
