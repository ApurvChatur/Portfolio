import RouteName from "./RouteName";

const FinalRouteName = {
    Home: {
        ListRoute: `/${RouteName.Home.HomeRoute}`,
    },
    Portfolio: {
        ListRoute: `/portfolio/${RouteName.Portfolio.ListRoute}`,
        RetrieveRoute: `/portfolio/${RouteName.Portfolio.ListRoute}/${RouteName.Portfolio.RetrieveRoute}`,
    },
    Event: {
        ListRoute: `/event/${RouteName.Event.ListRoute}`,
        RetrieveRoute: `/event/${RouteName.Event.ListRoute}/${RouteName.Event.RetrieveRoute}`,
    },
    Blog: {
        ListRoute: `/blog/${RouteName.Blog.ListRoute}`,
        RetrieveRoute: `/blog/${RouteName.Blog.ListRoute}/${RouteName.Blog.RetrieveRoute}`,
    },
};

export default FinalRouteName;
