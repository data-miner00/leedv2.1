import store from "../store";

export default [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Login.vue"),
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
    path: "/s",
    name: "Student",
    component: () =>
      import(
        /* webpackChunkName: "stlayout" */ "../components/layouts/StudentLayout.vue"
      ),
    beforeEnter: (to, from, next) => {
      if (store.modules.user.state.authenticated == false) {
        //next(false);
        next("/");
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
          import(/* webpackChunkName: "home" */ "../views/shared/Home.vue"),
      },
      {
        path: "notification",
        name: "Notification",
        component: () =>
          import(
            /* webpackChunkName: "notif" */ "../views/shared/Notification.vue"
          ),
      },
      {
        path: "assignments",
        name: "Assignments",
        component: () =>
          import(
            /* webpackChunkName: "assignments" */ "../views/student/Assignments/index.vue"
          ),
        children: [
          {
            path: "",
            name: "assignments1",
            component: () =>
              import(
                /* webpackChunkName: "assignments1" */ "../views/student/Assignments/Assignments.vue"
              ),
          },
          {
            path: ":groupId/details",
            name: "Details",
            component: () =>
              import(
                /* webpackChunkName: "assignments1" */ "../views/shared/AssignGroupInfo.vue"
              ),
          },
        ],
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
            /* webpackChunkName: "courses" */ "../views/shared/Courses.vue"
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
        next("/");
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
        next("/");
      }
    },
    children: [
      {
        path: "home",
        name: "lecturerHome",
        component: () =>
          import(
            /* webpackChunkName: "lecturerHome" */ "../views/shared/Home.vue"
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
          {
            path: ":assignmentId/groups/:groupId",
            name: "assignGroupInfo",
            component: () =>
              import(
                /* webpackChunkName: "assignGroupInfo" */ "../views/shared/AssignGroupInfo.vue"
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
