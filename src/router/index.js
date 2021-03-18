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
        if (store.modules.user.state.userType == "student") next();
        else next("/forbidden");
      }
    },
    children: [
      {
        path: "home",
        name: "StudentHome",
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
    path: "/s/assignment/:groupId/workspace",
    name: "Workspace",
    component: () =>
      import(
        /* webpackChunkName: "workspace" */ "../views/student/Workspace.vue"
      ),
    beforeEnter: (to, from, next) => {
      if (store.modules.user.state.authenticated == false) {
        //next(false);
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      if (store.modules.user.state.authenticated) {
        if (store.modules.user.state.userType == "student") {
          next("/s/home");
        } else {
          next("/l/home");
        }
      } else {
        next();
      }
    },
  },
  {
    path: "/l",
    name: "lecturer",
    component: () =>
      import(
        /* webpackChunkName: "lecturerLayout" */ "../components/layouts/LecturerLayout.vue"
      ),
    beforeEnter: (to, from, next) => {
      if (store.modules.user.state.authenticated) {
        if (store.modules.user.state.userType == "lecturer") next();
        else next("/forbidden");
      } else {
        next("/login");
      }
    },
    children: [
      {
        path: "home",
        name: "lecturerHome",
        component: () =>
          import(
            /* webpackChunkName: "lecturerHome" */ "../views/lecturer/Home.vue"
          ),
      },
      {
        path: "notification",
        name: "lecturerNotification",
        component: () =>
          import(
            /* webpackChunkName: "lecturerHome" */ "../views/shared/Notification.vue"
          ),
      },
      {
        path: "assignments",
        name: "lecturerAssignRoutes",
        component: () =>
          import(
            /* webpackChunkName: "lecturerAssignmentsRoutes" */ "../views/lecturer/Assignments/index.vue"
          ),
        children: [
          {
            path: "",
            name: "lecturerAssignments",
            component: () =>
              import(
                /* webpackChunkName: "lecturerAssignments" */ "../views/lecturer/Assignments/Contents/Assignments.vue"
              ),
          },
          {
            path: ":assignmentId/groups",
            name: "assignGroupsList",
            component: () =>
              import(
                /* webpackChunkName: "assignGroupsList" */ "../views/lecturer/Assignments/Contents/AssignGroupList.vue"
              ),
          },
          {
            path: ":assignmentId/info",
            name: "assignmentInfo",
            component: () =>
              import(
                /* webpackChunkName: "assignmentInfo" */ "../views/lecturer/Assignments/Contents/AssignInfo.vue"
              ),
          },
        ],
      },
      {
        path: "courses",
        name: "lecturerCourses",
        component: () =>
          import(
            /* webpackChunkName: "lecturerCourses" */ "../views/shared/Courses.vue"
          ),
      },
      {
        path: "analytics",
        name: "lecturerAnalytics",
        component: () =>
          import(
            /* webpackChunkName: "lecturerAnalytics" */ "../views/lecturer/Analytics.vue"
          ),
      },
    ],
  },
  {
    path: "/s/assignment/:groupId/plans",
    name: "Plans",
    component: () => import(/* */ "../views/student/Management.vue"),
    // need to add checks for these individual routes
  },
  {
    path: "/s/assignment/:groupId/booking",
    name: "Booking",
    component: () => import(/* */ "../views/student/Booking.vue"),
  },
  {
    path: "/s/assignment/:groupId/uploads",
    name: "Uploads",
    component: () => import(/* */ "../views/student/Upload.vue"),
  },
  {
    path: "/s/assignment/:groupId/details",
    name: "Details",
    component: () => import(/* */ "../views/student/Group.vue"),
  },
  {
    path: "/forbidden",
    name: "forbidden",
    component: () => import(/* */ "../views/Forbidden.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "page-404" */ "../views/NotFound.vue"),
    meta: {
      title: "Alien Detected *BEEP BOP BEEP BOP*",
      singleTitle: true,
    },
  },
];
