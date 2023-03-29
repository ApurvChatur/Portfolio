const RouteName = {
    Auth: {
        LoginRegister: {
            LoginRoute: "login",
            RegisterRoute: "register",
        },
        ForgotResetPassword: {
            ForgotPasswordRoute: "forgot-password",
            ResetPasswordRoute: "reset-password"
        }
    },
	Content: {
        Sidebar: {
            Home: {
                Dashboard: {
                    DashboardRoute: ""
                },
            },
            Model: {
                Home: {
                    ListRoute: "home-list",
                    CreateRoute: "home-create",
                    RetrieveRoute: "home-retrieve",
                    UpdateRoute: "home-update",
                    DeleteRoute: "home-delete"
                },
                About: {
                    ListRoute: "about-list",
                    CreateRoute: "about-create",
                    RetrieveRoute: "about-retrieve",
                    UpdateRoute: "about-update",
                    DeleteRoute: "about-delete"
                },
                Experience: {
                    ListRoute: "experience-list",
                    CreateRoute: "experience-create",
                    RetrieveRoute: "experience-retrieve",
                    UpdateRoute: "experience-update",
                    DeleteRoute: "experience-delete"
                },
                Service: {
                    ListRoute: "service-list",
                    CreateRoute: "service-create",
                    RetrieveRoute: "service-retrieve",
                    UpdateRoute: "service-update",
                    DeleteRoute: "service-delete"
                },
                Portfolio: {
                    ListRoute: "portfolio-list",
                    CreateRoute: "portfolio-create",
                    RetrieveRoute: "portfolio-retrieve",
                    UpdateRoute: "portfolio-update",
                    DeleteRoute: "portfolio-delete"
                },
                PortfolioCard: {
                    ListRoute: "portfolio-card-list",
                    CreateRoute: "portfolio-card-create",
                    RetrieveRoute: "portfolio-card-retrieve",
                    UpdateRoute: "portfolio-card-update",
                    DeleteRoute: "portfolio-card-delete"
                },
                Event: {
                    ListRoute: "event-list",
                    CreateRoute: "event-create",
                    RetrieveRoute: "event-retrieve",
                    UpdateRoute: "event-update",
                    DeleteRoute: "event-delete"
                },
                EventCard: {
                    ListRoute: "event-card-list",
                    CreateRoute: "event-card-create",
                    RetrieveRoute: "event-card-retrieve",
                    UpdateRoute: "event-card-update",
                    DeleteRoute: "event-card-delete"
                },
                Blog: {
                    ListRoute: "blog-list",
                    CreateRoute: "blog-create",
                    RetrieveRoute: "blog-retrieve",
                    UpdateRoute: "blog-update",
                    DeleteRoute: "blog-delete"
                },
                BlogCard: {
                    ListRoute: "blog-card-list",
                    CreateRoute: "blog-card-create",
                    RetrieveRoute: "blog-card-retrieve",
                    UpdateRoute: "blog-card-update",
                    DeleteRoute: "blog-card-delete"
                },
                
            },
            Administration: {
                Role: {
                    RoleListRoute: "role-list",
                    RoleCreateRoute: "role-create",
                    RoleRetrieveRoute: "role-retrieve",
                    RoleUpdateRoute: "role-update",
                    RoleDeleteRoute: "role-delete"
                },
                User: {
                    UserListRoute: "user-list",
                    UserCreateRoute: "user-create",
                    UserRetrieveRoute: "user-retrieve",
                    UserUpdateRoute: "user-update",
                    UserDeleteRoute: "user-delete"
                },
            },
            Setting: {
                Base: {
                    ListRoute: "base-list",
                    CreateRoute: "base-create",
                    RetrieveRoute: "base-retrieve",
                    UpdateRoute: "base-update",
                    DeleteRoute: "base-delete"
                },

            }
        },
        Topbar: {

        },
	},
};

export default RouteName;

