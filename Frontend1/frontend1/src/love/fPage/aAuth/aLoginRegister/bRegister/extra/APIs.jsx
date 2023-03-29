import { toast } from "react-toastify";
import API from "../../../../../aAPI/API";
import clearFormObject from "../../../../../dFunction/clearFormObject";
import FinalRouteName from "../../../../../gRoute/FinalRouteName";

const APIs = {
  // Register API
  RegisterAPI: (Redux, navigate) => {
    API.Auth.LoginRegister.RegisterAPI({
      data: {
        first_name: Redux.state.FormObject.FormValue.firstName,
        last_name: Redux.state.FormObject.FormValue.lastName,
        email: Redux.state.FormObject.FormValue.email,
        password: Redux.state.FormObject.FormValue.password,
        relation_info: {
            role: "63e66a40a4bd8b22df33b8d9"
        }
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        navigate(FinalRouteName.Content.Sidebar.Home.Dashboard.DashboardRoute)
        toast.success(serverResponse.message, { position: "top-center" });
        clearFormObject(Redux)
      }
    })
    .catch(error => {
      // console.log(error.response.data);
      const serverResponse = error.response.data
      toast.error(serverResponse.message, { position: "top-center" });
    });
  },


}

export default APIs