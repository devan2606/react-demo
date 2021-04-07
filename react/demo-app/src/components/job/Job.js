import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./job.css";

export default function Job() {
  return (
    <div className='company_profile'>
      <div id='innerQFormDepartment' className='card-wrap'>
        <div className='section-div'>
          <h3 className='title-font'>JOB TITLES</h3>
          <div className='row'>
            <div className='col-12'>
              <div className='table-responsive with-action'>
                <table className='table table-hover table-striped '>
                  <thead>
                    <tr>
                      <th> Name</th>
                      <th> Department</th>
                      <th> ACTION </th>
                    </tr>
                  </thead>
                  <tbody id='tblDepartments'></tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <button
                type='submit'
                className='btn btn-pink mb-4 mt-2'
                id='addDepartment'
              >
                Add Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
