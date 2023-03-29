import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from './love/eLayout/aAuthLayout';
import ContentLayout from './love/eLayout/bContentLayout';
import Login from './love/fPage/aAuth/aLoginRegister/aLogin';
import Register from './love/fPage/aAuth/aLoginRegister/bRegister';
import Dashboard from './love/fPage/bContent/aSidebar/aHome/aDashboard';
import HomeList from './love/fPage/bContent/aSidebar/bModel/aHome/aList';
import HomeCreate from './love/fPage/bContent/aSidebar/bModel/aHome/bCreate';
import HomeRetrieve from './love/fPage/bContent/aSidebar/bModel/aHome/cRetrieve';
import HomeUpdate from './love/fPage/bContent/aSidebar/bModel/aHome/dUpdate';
import HomeDelete from './love/fPage/bContent/aSidebar/bModel/aHome/eDelete';
import AboutList from './love/fPage/bContent/aSidebar/bModel/bAbout/aList';
import AboutCreate from './love/fPage/bContent/aSidebar/bModel/bAbout/bCreate';
import AboutRetrieve from './love/fPage/bContent/aSidebar/bModel/bAbout/cRetrieve';
import AboutUpdate from './love/fPage/bContent/aSidebar/bModel/bAbout/dUpdate';
import AboutDelete from './love/fPage/bContent/aSidebar/bModel/bAbout/eDelete';
import ExperienceList from './love/fPage/bContent/aSidebar/bModel/cExperience/aList';
import ExperienceCreate from './love/fPage/bContent/aSidebar/bModel/cExperience/bCreate';
import ExperienceRetrieve from './love/fPage/bContent/aSidebar/bModel/cExperience/cRetrieve';
import ExperienceUpdate from './love/fPage/bContent/aSidebar/bModel/cExperience/dUpdate';
import ExperienceDelete from './love/fPage/bContent/aSidebar/bModel/cExperience/eDelete';
import ServiceList from './love/fPage/bContent/aSidebar/bModel/eService/aList';
import ServiceCreate from './love/fPage/bContent/aSidebar/bModel/eService/bCreate';
import ServiceRetrieve from './love/fPage/bContent/aSidebar/bModel/eService/cRetrieve';
import ServiceUpdate from './love/fPage/bContent/aSidebar/bModel/eService/dUpdate';
import ServiceDelete from './love/fPage/bContent/aSidebar/bModel/eService/eDelete';
import PortfolioList from './love/fPage/bContent/aSidebar/bModel/gPortfolio/aList';
import PortfolioCreate from './love/fPage/bContent/aSidebar/bModel/gPortfolio/bCreate';
import PortfolioRetrieve from './love/fPage/bContent/aSidebar/bModel/gPortfolio/cRetrieve';
import PortfolioUpdate from './love/fPage/bContent/aSidebar/bModel/gPortfolio/dUpdate';
import PortfolioDelete from './love/fPage/bContent/aSidebar/bModel/gPortfolio/eDelete';
import PortfolioCardList from './love/fPage/bContent/aSidebar/bModel/hPortfolioCard/aList';
import PortfolioCardCreate from './love/fPage/bContent/aSidebar/bModel/hPortfolioCard/bCreate';
import PortfolioCardRetrieve from './love/fPage/bContent/aSidebar/bModel/hPortfolioCard/cRetrieve';
import PortfolioCardUpdate from './love/fPage/bContent/aSidebar/bModel/hPortfolioCard/dUpdate';
import PortfolioCardDelete from './love/fPage/bContent/aSidebar/bModel/hPortfolioCard/eDelete';
import EventList from './love/fPage/bContent/aSidebar/bModel/iEvent/aList';
import EventCreate from './love/fPage/bContent/aSidebar/bModel/iEvent/bCreate';
import EventRetrieve from './love/fPage/bContent/aSidebar/bModel/iEvent/cRetrieve';
import EventUpdate from './love/fPage/bContent/aSidebar/bModel/iEvent/dUpdate';
import EventDelete from './love/fPage/bContent/aSidebar/bModel/iEvent/eDelete';
import EventCardList from './love/fPage/bContent/aSidebar/bModel/jEventCard/aList';
import EventCardCreate from './love/fPage/bContent/aSidebar/bModel/jEventCard/bCreate';
import EventCardRetrieve from './love/fPage/bContent/aSidebar/bModel/jEventCard/cRetrieve';
import EventCardUpdate from './love/fPage/bContent/aSidebar/bModel/jEventCard/dUpdate';
import EventCardDelete from './love/fPage/bContent/aSidebar/bModel/jEventCard/eDelete';
import BlogList from './love/fPage/bContent/aSidebar/bModel/kBlog/aList';
import BlogCreate from './love/fPage/bContent/aSidebar/bModel/kBlog/bCreate';
import BlogRetrieve from './love/fPage/bContent/aSidebar/bModel/kBlog/cRetrieve';
import BlogUpdate from './love/fPage/bContent/aSidebar/bModel/kBlog/dUpdate';
import BlogDelete from './love/fPage/bContent/aSidebar/bModel/kBlog/eDelete';
import BlogCardList from './love/fPage/bContent/aSidebar/bModel/lBlogCard/aList';
import BlogCardCreate from './love/fPage/bContent/aSidebar/bModel/lBlogCard/bCreate';
import BlogCardRetrieve from './love/fPage/bContent/aSidebar/bModel/lBlogCard/cRetrieve';
import BlogCardUpdate from './love/fPage/bContent/aSidebar/bModel/lBlogCard/dUpdate';
import BlogCardDelete from './love/fPage/bContent/aSidebar/bModel/lBlogCard/eDelete';
import BaseList from './love/fPage/bContent/aSidebar/dSetting/aBase/aList';
import BaseCreate from './love/fPage/bContent/aSidebar/dSetting/aBase/bCreate';
import BaseRetrieve from './love/fPage/bContent/aSidebar/dSetting/aBase/cRetrieve';
import BaseUpdate from './love/fPage/bContent/aSidebar/dSetting/aBase/dUpdate';
import BaseDelete from './love/fPage/bContent/aSidebar/dSetting/aBase/eDelete';
import PageNotFound from './love/fPage/cExtra/aPageNotFound/PageNotFound';
import RouteName from './love/gRoute/RouteName';

function App() {
  return (    
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<AuthLayout />} >
          <Route path={RouteName.Auth.LoginRegister.LoginRoute} element={<Login />} />
          <Route path={RouteName.Auth.LoginRegister.RegisterRoute} element={<Register />} />
        </Route>

        <Route element={<ContentLayout />} >
          <Route path={`${RouteName.Content.Sidebar.Home.Dashboard.DashboardRoute}`} element={<Dashboard />} />

          <Route path='model' >
            {/* Home */}
            <Route path={`${RouteName.Content.Sidebar.Model.Home.ListRoute}`} >
              <Route element={<HomeList />} index />
              <Route element={<HomeCreate />} path={`${RouteName.Content.Sidebar.Model.Home.CreateRoute}`} />
              <Route element={<HomeRetrieve />} path={`${RouteName.Content.Sidebar.Model.Home.RetrieveRoute}/:id`} />
              <Route element={<HomeUpdate />} path={`${RouteName.Content.Sidebar.Model.Home.UpdateRoute}/:id`} />
              <Route element={<HomeDelete />} path={`${RouteName.Content.Sidebar.Model.Home.DeleteRoute}/:id`} />
            </Route>

            {/* About */}
            <Route path={`${RouteName.Content.Sidebar.Model.About.ListRoute}`} >
              <Route element={<AboutList />} index />
              <Route element={<AboutCreate />} path={`${RouteName.Content.Sidebar.Model.About.CreateRoute}`} />
              <Route element={<AboutRetrieve />} path={`${RouteName.Content.Sidebar.Model.About.RetrieveRoute}/:id`} />
              <Route element={<AboutUpdate />} path={`${RouteName.Content.Sidebar.Model.About.UpdateRoute}/:id`} />
              <Route element={<AboutDelete />} path={`${RouteName.Content.Sidebar.Model.About.DeleteRoute}/:id`} />
            </Route>

            {/* Experience */}
            <Route path={`${RouteName.Content.Sidebar.Model.Experience.ListRoute}`} >
              <Route element={<ExperienceList />} index />
              <Route element={<ExperienceCreate />} path={`${RouteName.Content.Sidebar.Model.Experience.CreateRoute}`} />
              <Route element={<ExperienceRetrieve />} path={`${RouteName.Content.Sidebar.Model.Experience.RetrieveRoute}/:id`} />
              <Route element={<ExperienceUpdate />} path={`${RouteName.Content.Sidebar.Model.Experience.UpdateRoute}/:id`} />
              <Route element={<ExperienceDelete />} path={`${RouteName.Content.Sidebar.Model.Experience.DeleteRoute}/:id`} />
            </Route>

            {/* Service */}
            <Route path={`${RouteName.Content.Sidebar.Model.Service.ListRoute}`} >
              <Route element={<ServiceList />} index />
              <Route element={<ServiceCreate />} path={`${RouteName.Content.Sidebar.Model.Service.CreateRoute}`} />
              <Route element={<ServiceRetrieve />} path={`${RouteName.Content.Sidebar.Model.Service.RetrieveRoute}/:id`} />
              <Route element={<ServiceUpdate />} path={`${RouteName.Content.Sidebar.Model.Service.UpdateRoute}/:id`} />
              <Route element={<ServiceDelete />} path={`${RouteName.Content.Sidebar.Model.Service.DeleteRoute}/:id`} />
            </Route>

            {/* Portfolio */}
            <Route path={`${RouteName.Content.Sidebar.Model.Portfolio.ListRoute}`} >
              <Route element={<PortfolioList />} index />
              <Route element={<PortfolioCreate />} path={`${RouteName.Content.Sidebar.Model.Portfolio.CreateRoute}`} />
              <Route element={<PortfolioRetrieve />} path={`${RouteName.Content.Sidebar.Model.Portfolio.RetrieveRoute}/:id`} />
              <Route element={<PortfolioUpdate />} path={`${RouteName.Content.Sidebar.Model.Portfolio.UpdateRoute}/:id`} />
              <Route element={<PortfolioDelete />} path={`${RouteName.Content.Sidebar.Model.Portfolio.DeleteRoute}/:id`} />
            </Route>

            {/* Portfolio Card */}
            <Route path={`${RouteName.Content.Sidebar.Model.PortfolioCard.ListRoute}`} >
              <Route element={<PortfolioCardList />} index />
              <Route element={<PortfolioCardCreate />} path={`${RouteName.Content.Sidebar.Model.PortfolioCard.CreateRoute}`} />
              <Route element={<PortfolioCardRetrieve />} path={`${RouteName.Content.Sidebar.Model.PortfolioCard.RetrieveRoute}/:id`} />
              <Route element={<PortfolioCardUpdate />} path={`${RouteName.Content.Sidebar.Model.PortfolioCard.UpdateRoute}/:id`} />
              <Route element={<PortfolioCardDelete />} path={`${RouteName.Content.Sidebar.Model.PortfolioCard.DeleteRoute}/:id`} />
            </Route>

            {/* Event */}
            <Route path={`${RouteName.Content.Sidebar.Model.Event.ListRoute}`} >
              <Route element={<EventList />} index />
              <Route element={<EventCreate />} path={`${RouteName.Content.Sidebar.Model.Event.CreateRoute}`} />
              <Route element={<EventRetrieve />} path={`${RouteName.Content.Sidebar.Model.Event.RetrieveRoute}/:id`} />
              <Route element={<EventUpdate />} path={`${RouteName.Content.Sidebar.Model.Event.UpdateRoute}/:id`} />
              <Route element={<EventDelete />} path={`${RouteName.Content.Sidebar.Model.Event.DeleteRoute}/:id`} />
            </Route>

            {/* Event Card */}
            <Route path={`${RouteName.Content.Sidebar.Model.EventCard.ListRoute}`} >
              <Route element={<EventCardList />} index />
              <Route element={<EventCardCreate />} path={`${RouteName.Content.Sidebar.Model.EventCard.CreateRoute}`} />
              <Route element={<EventCardRetrieve />} path={`${RouteName.Content.Sidebar.Model.EventCard.RetrieveRoute}/:id`} />
              <Route element={<EventCardUpdate />} path={`${RouteName.Content.Sidebar.Model.EventCard.UpdateRoute}/:id`} />
              <Route element={<EventCardDelete />} path={`${RouteName.Content.Sidebar.Model.EventCard.DeleteRoute}/:id`} />
            </Route>

            {/* Blog */}
            <Route path={`${RouteName.Content.Sidebar.Model.Blog.ListRoute}`} >
              <Route element={<BlogList />} index />
              <Route element={<BlogCreate />} path={`${RouteName.Content.Sidebar.Model.Blog.CreateRoute}`} />
              <Route element={<BlogRetrieve />} path={`${RouteName.Content.Sidebar.Model.Blog.RetrieveRoute}/:id`} />
              <Route element={<BlogUpdate />} path={`${RouteName.Content.Sidebar.Model.Blog.UpdateRoute}/:id`} />
              <Route element={<BlogDelete />} path={`${RouteName.Content.Sidebar.Model.Blog.DeleteRoute}/:id`} />
            </Route>

            {/* Blog Card */}
            <Route path={`${RouteName.Content.Sidebar.Model.BlogCard.ListRoute}`} >
              <Route element={<BlogCardList />} index />
              <Route element={<BlogCardCreate />} path={`${RouteName.Content.Sidebar.Model.BlogCard.CreateRoute}`} />
              <Route element={<BlogCardRetrieve />} path={`${RouteName.Content.Sidebar.Model.BlogCard.RetrieveRoute}/:id`} />
              <Route element={<BlogCardUpdate />} path={`${RouteName.Content.Sidebar.Model.BlogCard.UpdateRoute}/:id`} />
              <Route element={<BlogCardDelete />} path={`${RouteName.Content.Sidebar.Model.BlogCard.DeleteRoute}/:id`} />
            </Route>

          </Route>

          <Route path='setting' >
            <Route path={`${RouteName.Content.Sidebar.Setting.Base.ListRoute}`} >
              <Route element={<BaseList />} index />
              <Route element={<BaseCreate />} path={`${RouteName.Content.Sidebar.Setting.Base.CreateRoute}`} />
              <Route element={<BaseRetrieve />} path={`${RouteName.Content.Sidebar.Setting.Base.RetrieveRoute}/:id`} />
              <Route element={<BaseUpdate />} path={`${RouteName.Content.Sidebar.Setting.Base.UpdateRoute}/:id`} />
              <Route element={<BaseDelete />} path={`${RouteName.Content.Sidebar.Setting.Base.DeleteRoute}/:id`} />
            </Route>
          </Route>
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
