import Login from "../components/authentication/Login";
import SignUp from "../components/authentication/SignUp";
import ForgotPassword from "../components/authentication/ForgotPassword";
import ResetPassword from "../components/authentication/ResetPassword";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompanyInformation from "../components/companyinformation/CompanyInformation";
import CompanyProfile from "../components/companyprofile/CompanyProfile";
import Router from "./Router";
import CreateInterview from "../components/interview/CreateInterview";
import Header from "../components/header/Header";
import AcceptedTC from '../components/interview/AcceptedTC'
import InterviewSetup from '../components/interview/InterviewSetup'

import Home from '../Home'
// import Interviews from '../screen/Interviews'

const MainRouting = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/header' component={Header} />
        <Switch>
          <Router.PublicRouter exact path='/' component={Login} />
          <Router.PublicRouter exact path='/Home' component={Home} />
          <Router.PublicRouter exact path='/signup' component={SignUp} />
          <Router.PublicRouter exact path='/AcceptedTC' component={AcceptedTC} />
          <Router.PublicRouter exact path='/InterviewSetup' component={InterviewSetup} />
          <Router.PublicRouter
            exact
            path='/forgot-password'
            component={ForgotPassword}
          />
          <Router.PublicRouter
            exact
            path='/reset-password'
            component={ResetPassword}
          />
          <Router.PrivetRouter
            exact
            path='/CompanyInformation'
            component={CompanyInformation}
          />
          <Router.PrivetRouter
            exact
            path='/companyprofile'
            component={CompanyProfile}
          />
          <Router.PrivetRouter
            exact
            path='/CreateInterview'
            component={CreateInterview}
          />
        
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default MainRouting;

// const MainRouting = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Route exact path='/header' component={Header} />
//         <Switch>
//           <Route exact path='/' component={Login} />
//           <Route exact path='/signup' component={SignUp} />
//           <Route exact path='/forgot-password' component={ForgotPassword} />
//           <Route exact path='/reset-password' component={ResetPassword} />
//           <Route
//             exact
//             path='/CompanyInformation'
//             component={CompanyInformation}
//           />
//           <Route exact path='/companyprofile' component={CompanyProfile} />
//           <Route exact path='/CreateInterview' component={CreateInterview} />
//           <Route
//             exact
//             path='/CreateInterviewButton'
//             component={CreateInterviewButton}
//           />

//         </Switch>
//       </BrowserRouter>
//     </>
//   );
// };
// export default  MainRouting;
