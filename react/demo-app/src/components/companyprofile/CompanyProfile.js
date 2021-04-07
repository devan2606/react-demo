import React from "react";
import CompanyInformation from "../companyinformation/CompanyInformation";
import DepartmentShow from "../department/DepartmentShow";
import Job from "../job/Job";
import Manager from "../manager/Manager";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function CompanyProfile() {
  return (
    <div>
      <Header />
      <CompanyInformation />
      <DepartmentShow />
      <Manager />
      <Job />
      <Footer />
    </div>
  );
}

export default CompanyProfile;
