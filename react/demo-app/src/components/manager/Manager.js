import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./manager.css";

export default function Manager() {
  return (
    <div className='company_profile'>
      <div id='innerQFormDepartment' className='card-wrap'>
        <div className='section-div'>
          <h3 className='title-font'>MANAGER</h3>
          <div className='row'>
            <div className='col-12'>
              <div className='table-responsive with-action'>
                <table className='table table-hover table-striped'>
                  <thead>
                    <tr>
                      <th> Name</th>
                      <th> Email</th>
                      <th> Status</th>
                      <th> Date</th>
                      <th> Deleted </th>
                      <th> Action</th>
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
                Add Manager
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
