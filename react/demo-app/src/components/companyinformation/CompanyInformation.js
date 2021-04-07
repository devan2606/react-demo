import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CompanyInformation.css";

const CompanyInformation = () => {
  return (
    <div className='company_profile'>
      <div className='row rone'>
        <div className='col cone'>
          <div className='according'>
            <div className='card-header ch'>
              <h1 className='card-title ct'>Company information</h1>
            </div>
            <div className='clearfix clrf'>
              <div className='card-wrap cwrap'>
                <div className='section-company-div'>
                  <div className='row rtwo'>
                    <div className='col-12 col-sm-6 col-lg-5 colDiv'>
                      <div className='form-group fgrp'>
                        <input
                          className='form-control inputdiv'
                          placeholder='First Name'
                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-5 colDiv'>
                      <div className='form-group fgrp'>
                        <input
                          className='form-control inputdiv'
                          placeholder='Last Name'
                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-5 colDiv'>
                      <div className='form-group fgrp'>
                        <input
                          className='form-control inputdiv'
                          placeholder='Company Name'
                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-5 colDiv'>
                      <div className='form-group fgrp'>
                        <input
                          className='form-control inputdiv'
                          placeholder='Company Email'
                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-5 colDiv'>
                      <div className='form-group fgrp'>
                        <select className=' form-control inputdiv'>
                          <option>Select Country</option>
                          <option>India</option>
                          <option>Canada</option>
                          <option>India</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-5 colDiv'>
                      <div className='form-group fgrp'>
                        <select className=' form-control inputdiv'>
                          <option selected> -- Select State -- </option>
                          <option value='AP'>Andhra Pradesh</option>
                          <option value='AP'>Arunachal Pradesh</option>
                          <option value='AS'>Assam</option>
                          <option value='BH'>Bihar</option>
                          <option value='CG'>Chhattisgarh</option>
                          <option value='GO'>Goa</option>
                          <option value='GJ'>Gujarat</option>
                          <option value='HR'>Haryana</option>
                          <option value='HP'>Himachal Pradesh </option>
                          <option value='JK'>Jammu and Kashmir</option>
                          <option value='JH'>Jharkhand</option>
                          <option value='KT'>Karnataka</option>
                          <option value='KR'>Kerala</option>
                          <option value='MP'>Madya Pradesh</option>
                          <option value='MH'>Maharashtra</option>
                          <option value='MN'>Manipur</option>
                          <option value='MG'>Meghalaya</option>
                          <option value='MZ'>Mizoram</option>
                          <option value='NL'>Nagaland</option>
                          <option value='OR'>Orissa</option>
                          <option value='PJ'>Punjab</option>
                          <option value='RJ'>Rajasthan</option>
                          <option value='SI'>Sikkim</option>
                          <option value='TN'>Tamil Nadu</option>
                          <option value='TG'>Telagana</option>
                          <option value='MO'>Missouri</option>
                          <option value='TP'>Tripura</option>
                          <option value='UT'>Uttaranchal</option>
                          <option value='UP'>Uttar Pradesh</option>
                          <option value='WB'>West Bengal</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-5 colDiv'>
                      <div className='form-group fgrp'>
                        <input
                          className='form-control inputdiv'
                          placeholder='Company Address 1'
                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-5 colDiv'>
                      <div className='form-group fgrp'>
                        <input
                          className='form-control inputdiv'
                          placeholder='Company Address 2'
                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-5 colDiv'>
                      <div className='form-group fgrp'>
                        <input
                          className='form-control inputdiv'
                          placeholder='Company City'
                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-5 colDiv'>
                      <div className='form-group fgrp'>
                        <input
                          className='form-control inputdiv'
                          placeholder='Company Zip'
                        />
                      </div>
                    </div>
                    <div className='row rbtn'>
                      <div className='col-12 btntext-center '>
                        <button type='submit' className='btn-color'>
                          Update Company
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
