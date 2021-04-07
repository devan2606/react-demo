import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function InterviewTable() {
  return (
    <div>
      <div className='mb-4 manager-view candidate-card'>
        <div className='card-header' id='cardHeaderManagerView'>
          <h1 className='float-left title-left' id='title-name'>
            All Candidate
          </h1>
          <div className='candidate-search'>
            <label className='title-font' id='title-name'>
              Search
            </label>
            <input
              className='form-ontrol companyName'
              readOnly
              id='myDatepicker'
              type='text'
              autoComplete='false'
              placeholder='By Date'
            ></input>
            <button className='btn bg-transparent' id='clearDataFilter'>
              <i className='i'>
              
                <FontAwesomeIcon className='icon' icon={faTimes} />
              </i>
            </button>
            <input
              className='form-ontrol companyName'
              id='searchCandidate'
              type='text'
              autoComplete='false'
              placeholder='By Name or ID'
            ></input>
          </div>
        </div>
        <div className='card-body mb-4' id='collapseOne'>
          <div
            className='card-wrap'
            id='company-information'
            style={{ width: 1210 }}
          >
            <div className='table-responsive'>
              <div
                className='dataTables_wrapper no-footer'
                id='interview-table-wrapper'
              >
                <div className='dataTable_length' id='interview-table_length'>
                  <label>
                    "Show"
                    <select
                      name='interview-table_length'
                      aria-controls='interview-table'
                      className
                    >
                      <option value='10'>10</option>
                      <option value='25'>25</option>
                      <option value='50'>50</option>
                      <option value='100'>100</option>
                    </select>
                    "entries"
                  </label>
                </div>
                <div className='dataTables_filter' id='interview-table_filters'>
                  <label>
                    "search"
                    <input
                      type='search'
                      className
                      placeholder
                      aria-controls='interview-table'
                    ></input>
                  </label>
                </div>
                <table
                  className='table table-hover table-striped dataTable no-footer'
                  role='grid'
                  aria-describedby='interview-table_info'
                >
                  <thead>
                    <tr role='row'>
                      <th
                        className='sorting_asc'
                        tabIndex='0'
                        rowSpan='1'
                        colSpan='1'
                        aria-label=':activate to sort column descending'
                        aria-sort='ascending'
                      ></th>
                      <th
                        className='textCenter sorting '
                        data-langKey='Date'
                        tabIndex='0'
                        aria-controls='interview-table'
                        rowSpan='1'
                        colSpan='1'
                        aria-label='Date:activate to sort column ascending'
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody id='candidate-table'>
                    <tr className='odd'>
                      {/* <td valign="top" colSpan="8" className="dataTables_empty">No data Available in Table</td> */}
                    </tr>
                  </tbody>
                </table>
                <div
                  className='dataTables_info'
                  id='interview-tables_info'
                  role='status'
                  aria-live='polite'
                >
                  showing 0 to 0 of 0 entries
                </div>
              </div>
            </div>
            <p className='nocandidate'>No candidate Found</p>
          </div>
        </div>
      </div>
    </div>
  );
}
