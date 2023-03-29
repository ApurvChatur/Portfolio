import RouteName from "./RouteName";

const FinalRouteName = {
    Auth: {
        LoginRegister: {
            LoginRoute: `/${RouteName.Auth.LoginRegister.LoginRoute}`,
            RegisterRoute: `/${RouteName.Auth.LoginRegister.RegisterRoute}` 
        },
        ForgotResetPassword: {
            ForgotPasswordRoute: `/${RouteName.Auth.ForgotResetPassword.ForgotPasswordRoute}`,
            ResetPasswordRoute: `/${RouteName.Auth.ForgotResetPassword.ResetPasswordRoute}`
        }
    },
	Content: {
        Sidebar: {
            Home: {
                Dashboard: {
                    DashboardRoute: `/${RouteName.Content.Sidebar.Home.Dashboard.DashboardRoute}`
                },
            },
            Model: {
                Home: {
                    ListRoute: `/model/${RouteName.Content.Sidebar.Model.Home.ListRoute}`,
                    CreateRoute: `/model/${RouteName.Content.Sidebar.Model.Home.ListRoute}/${RouteName.Content.Sidebar.Model.Home.CreateRoute}`,
                    RetrieveRoute: `/model/${RouteName.Content.Sidebar.Model.Home.ListRoute}/${RouteName.Content.Sidebar.Model.Home.RetrieveRoute}`,
                    UpdateRoute: `/model/${RouteName.Content.Sidebar.Model.Home.ListRoute}/${RouteName.Content.Sidebar.Model.Home.UpdateRoute}`,
                    DeleteRoute: `/model/${RouteName.Content.Sidebar.Model.Home.ListRoute}/${RouteName.Content.Sidebar.Model.Home.DeleteRoute}`
                },
                About: {
                    ListRoute: `/model/${RouteName.Content.Sidebar.Model.About.ListRoute}`,
                    CreateRoute: `/model/${RouteName.Content.Sidebar.Model.About.ListRoute}/${RouteName.Content.Sidebar.Model.About.CreateRoute}`,
                    RetrieveRoute: `/model/${RouteName.Content.Sidebar.Model.About.ListRoute}/${RouteName.Content.Sidebar.Model.About.RetrieveRoute}`,
                    UpdateRoute: `/model/${RouteName.Content.Sidebar.Model.About.ListRoute}/${RouteName.Content.Sidebar.Model.About.UpdateRoute}`,
                    DeleteRoute: `/model/${RouteName.Content.Sidebar.Model.About.ListRoute}/${RouteName.Content.Sidebar.Model.About.DeleteRoute}`
                },
                Experience: {
                    ListRoute: `/model/${RouteName.Content.Sidebar.Model.Experience.ListRoute}`,
                    CreateRoute: `/model/${RouteName.Content.Sidebar.Model.Experience.ListRoute}/${RouteName.Content.Sidebar.Model.Experience.CreateRoute}`,
                    RetrieveRoute: `/model/${RouteName.Content.Sidebar.Model.Experience.ListRoute}/${RouteName.Content.Sidebar.Model.Experience.RetrieveRoute}`,
                    UpdateRoute: `/model/${RouteName.Content.Sidebar.Model.Experience.ListRoute}/${RouteName.Content.Sidebar.Model.Experience.UpdateRoute}`,
                    DeleteRoute: `/model/${RouteName.Content.Sidebar.Model.Experience.ListRoute}/${RouteName.Content.Sidebar.Model.Experience.DeleteRoute}`
                },
                Service: {
                    ListRoute: `/model/${RouteName.Content.Sidebar.Model.Service.ListRoute}`,
                    CreateRoute: `/model/${RouteName.Content.Sidebar.Model.Service.ListRoute}/${RouteName.Content.Sidebar.Model.Service.CreateRoute}`,
                    RetrieveRoute: `/model/${RouteName.Content.Sidebar.Model.Service.ListRoute}/${RouteName.Content.Sidebar.Model.Service.RetrieveRoute}`,
                    UpdateRoute: `/model/${RouteName.Content.Sidebar.Model.Service.ListRoute}/${RouteName.Content.Sidebar.Model.Service.UpdateRoute}`,
                    DeleteRoute: `/model/${RouteName.Content.Sidebar.Model.Service.ListRoute}/${RouteName.Content.Sidebar.Model.Service.DeleteRoute}`
                },
                Portfolio: {
                    ListRoute: `/model/${RouteName.Content.Sidebar.Model.Portfolio.ListRoute}`,
                    CreateRoute: `/model/${RouteName.Content.Sidebar.Model.Portfolio.ListRoute}/${RouteName.Content.Sidebar.Model.Portfolio.CreateRoute}`,
                    RetrieveRoute: `/model/${RouteName.Content.Sidebar.Model.Portfolio.ListRoute}/${RouteName.Content.Sidebar.Model.Portfolio.RetrieveRoute}`,
                    UpdateRoute: `/model/${RouteName.Content.Sidebar.Model.Portfolio.ListRoute}/${RouteName.Content.Sidebar.Model.Portfolio.UpdateRoute}`,
                    DeleteRoute: `/model/${RouteName.Content.Sidebar.Model.Portfolio.ListRoute}/${RouteName.Content.Sidebar.Model.Portfolio.DeleteRoute}`
                },
                PortfolioCard: {
                    ListRoute: `/model/${RouteName.Content.Sidebar.Model.PortfolioCard.ListRoute}`,
                    CreateRoute: `/model/${RouteName.Content.Sidebar.Model.PortfolioCard.ListRoute}/${RouteName.Content.Sidebar.Model.PortfolioCard.CreateRoute}`,
                    RetrieveRoute: `/model/${RouteName.Content.Sidebar.Model.PortfolioCard.ListRoute}/${RouteName.Content.Sidebar.Model.PortfolioCard.RetrieveRoute}`,
                    UpdateRoute: `/model/${RouteName.Content.Sidebar.Model.PortfolioCard.ListRoute}/${RouteName.Content.Sidebar.Model.PortfolioCard.UpdateRoute}`,
                    DeleteRoute: `/model/${RouteName.Content.Sidebar.Model.PortfolioCard.ListRoute}/${RouteName.Content.Sidebar.Model.PortfolioCard.DeleteRoute}`
                },
                Event: {
                    ListRoute: `/model/${RouteName.Content.Sidebar.Model.Event.ListRoute}`,
                    CreateRoute: `/model/${RouteName.Content.Sidebar.Model.Event.ListRoute}/${RouteName.Content.Sidebar.Model.Event.CreateRoute}`,
                    RetrieveRoute: `/model/${RouteName.Content.Sidebar.Model.Event.ListRoute}/${RouteName.Content.Sidebar.Model.Event.RetrieveRoute}`,
                    UpdateRoute: `/model/${RouteName.Content.Sidebar.Model.Event.ListRoute}/${RouteName.Content.Sidebar.Model.Event.UpdateRoute}`,
                    DeleteRoute: `/model/${RouteName.Content.Sidebar.Model.Event.ListRoute}/${RouteName.Content.Sidebar.Model.Event.DeleteRoute}`
                },
                EventCard: {
                    ListRoute: `/model/${RouteName.Content.Sidebar.Model.EventCard.ListRoute}`,
                    CreateRoute: `/model/${RouteName.Content.Sidebar.Model.EventCard.ListRoute}/${RouteName.Content.Sidebar.Model.EventCard.CreateRoute}`,
                    RetrieveRoute: `/model/${RouteName.Content.Sidebar.Model.EventCard.ListRoute}/${RouteName.Content.Sidebar.Model.EventCard.RetrieveRoute}`,
                    UpdateRoute: `/model/${RouteName.Content.Sidebar.Model.EventCard.ListRoute}/${RouteName.Content.Sidebar.Model.EventCard.UpdateRoute}`,
                    DeleteRoute: `/model/${RouteName.Content.Sidebar.Model.EventCard.ListRoute}/${RouteName.Content.Sidebar.Model.EventCard.DeleteRoute}`
                },
                Blog: {
                    ListRoute: `/model/${RouteName.Content.Sidebar.Model.Blog.ListRoute}`,
                    CreateRoute: `/model/${RouteName.Content.Sidebar.Model.Blog.ListRoute}/${RouteName.Content.Sidebar.Model.Blog.CreateRoute}`,
                    RetrieveRoute: `/model/${RouteName.Content.Sidebar.Model.Blog.ListRoute}/${RouteName.Content.Sidebar.Model.Blog.RetrieveRoute}`,
                    UpdateRoute: `/model/${RouteName.Content.Sidebar.Model.Blog.ListRoute}/${RouteName.Content.Sidebar.Model.Blog.UpdateRoute}`,
                    DeleteRoute: `/model/${RouteName.Content.Sidebar.Model.Blog.ListRoute}/${RouteName.Content.Sidebar.Model.Blog.DeleteRoute}`
                },
                BlogCard: {
                    ListRoute: `/model/${RouteName.Content.Sidebar.Model.BlogCard.ListRoute}`,
                    CreateRoute: `/model/${RouteName.Content.Sidebar.Model.BlogCard.ListRoute}/${RouteName.Content.Sidebar.Model.BlogCard.CreateRoute}`,
                    RetrieveRoute: `/model/${RouteName.Content.Sidebar.Model.BlogCard.ListRoute}/${RouteName.Content.Sidebar.Model.BlogCard.RetrieveRoute}`,
                    UpdateRoute: `/model/${RouteName.Content.Sidebar.Model.BlogCard.ListRoute}/${RouteName.Content.Sidebar.Model.BlogCard.UpdateRoute}`,
                    DeleteRoute: `/model/${RouteName.Content.Sidebar.Model.BlogCard.ListRoute}/${RouteName.Content.Sidebar.Model.BlogCard.DeleteRoute}`
                },
                
            },
            Administration: {
                Role: {
                    RoleListRoute: `/administration/${RouteName.Content.Sidebar.Administration.Role.RoleListRoute}`,
                    RoleCreateRoute: `/administration/${RouteName.Content.Sidebar.Administration.Role.RoleListRoute}/${RouteName.Content.Sidebar.Administration.Role.RoleCreateRoute}`,
                    RoleRetrieveRoute: `/administration/${RouteName.Content.Sidebar.Administration.Role.RoleListRoute}/${RouteName.Content.Sidebar.Administration.Role.RoleRetrieveRoute}`,
                    RoleUpdateRoute: `/administration/${RouteName.Content.Sidebar.Administration.Role.RoleListRoute}/${RouteName.Content.Sidebar.Administration.Role.RoleUpdateRoute}`,
                    RoleDeleteRoute: `/administration/${RouteName.Content.Sidebar.Administration.Role.RoleListRoute}/${RouteName.Content.Sidebar.Administration.Role.RoleDeleteRoute}`
                },
                User: {
                    UserListRoute: `/administration/${RouteName.Content.Sidebar.Administration.User.UserListRoute}`,
                    UserCreateRoute: `/administration/${RouteName.Content.Sidebar.Administration.User.UserListRoute}/${RouteName.Content.Sidebar.Administration.User.UserCreateRoute}`,
                    UserRetrieveRoute: `/administration/${RouteName.Content.Sidebar.Administration.User.UserListRoute}/${RouteName.Content.Sidebar.Administration.User.UserRetrieveRoute}`,
                    UserUpdateRoute: `/administration/${RouteName.Content.Sidebar.Administration.User.UserListRoute}/${RouteName.Content.Sidebar.Administration.User.UserUpdateRoute}`,
                    UserDeleteRoute: `/administration/${RouteName.Content.Sidebar.Administration.User.UserListRoute}/${RouteName.Content.Sidebar.Administration.User.UserDeleteRoute}`
                },
            },
            Setting: {
                Base: {
                    ListRoute: `/setting/${RouteName.Content.Sidebar.Setting.Base.ListRoute}`,
                    CreateRoute: `/setting/${RouteName.Content.Sidebar.Setting.Base.ListRoute}/${RouteName.Content.Sidebar.Setting.Base.CreateRoute}`,
                    RetrieveRoute: `/setting/${RouteName.Content.Sidebar.Setting.Base.ListRoute}/${RouteName.Content.Sidebar.Setting.Base.RetrieveRoute}`,
                    UpdateRoute: `/setting/${RouteName.Content.Sidebar.Setting.Base.ListRoute}/${RouteName.Content.Sidebar.Setting.Base.UpdateRoute}`,
                    DeleteRoute: `/setting/${RouteName.Content.Sidebar.Setting.Base.ListRoute}/${RouteName.Content.Sidebar.Setting.Base.DeleteRoute}`
                },
            }
        },
       
	},
};

export default FinalRouteName;
