import { toast } from "react-toastify";
import API from "../../../aAPI/API";
import FinalRouteName from "../../../gRoute/FinalRouteName";

const APIs = {
  // User Profile Retrieve API
  UserProfileRetrieveAPI: (Redux, navigate) => {
    API.Content.Topbar.UserProfileRetrieveAPI()
    .then(response => {
    //   console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
          ...Redux.state.ReceivedObject,
          UserProfileRetrieve: serverResponse.user_profile_retrieve
        }})
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
        navigate(FinalRouteName.Auth.LoginRegister.LoginRoute)      
    });
  },


}

export default APIs