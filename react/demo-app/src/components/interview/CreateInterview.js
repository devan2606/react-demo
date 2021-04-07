import React from "react";
import "./CreateInterview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";
import Footer from "../footer/Footer";


export default function CreateInterview() {

  const [show, toggleShow] = React.useState(false);

  return (
    <div id='marginbottom'>
      <Header />
      {/* <CreateInterviewButton/> */}|
      <section className='dbContent'>
        <div className='container divPosition company_profile'>
          <div className='row'>
            <div className='col-12'>
              <div className='accordion'>
                <div className='scrollable-btns-wrapper'>
                  <div className='scrollable-btns'>
                    <div>
                      <button
                        type='button'
                        class='btn btn-pink create_int_btn'
                        id='Information_click'
                        onClick={() => toggleShow(!show)}
                      >
                        {show ? "" : ""}Create Interview
                      </button>
                    </div>
                    {/* <div>
                      <button
                        type='button'
                        class='btn btn-cancel'
                        id='archiveCandidate'
                      >
                        Archive Candidate
                      </button>
                    </div>
                    <div>
                      <button
                        type='button'
                        class='btn btn-cancel'
                        id='deleteCandidate'
                      >
                        Delete Candidates
                      </button>
                    </div>
                    <div>
                      <button
                        type='button'
                        class='btn btn-cancel'
                        id='showArchiveCandidate'
                      >
                        Show All
                      </button>
                    </div>
                    <div>
                      
                      <button
                        type='button'
                        class='btn btn-cancel'
                        id='printnew'
                        style={{ display: "none" }}
                      >
                        Print new
                      </button>
                    </div>
                    <div id='printbtn'></div> */}
                  </div>
                </div>

                <div className='clearfix'> </div>
                {show && (
                  <div className='card card-body mb-5 hide card-mystyle'>
                    <div className='mk-stepper mk-stepper--vertical mdc-typography--body1 mdc-elevation--z3'>
                      <a className='card-title'>
                        <h1 className='float-left title-font' id='title-Name'>
                          New Interview
                        </h1>
                      </a>
                      {/* FOR CANDIDATE */}
                      <details className='mk-stepper-step' open>
                        <summary className='mk-stepper-step__header'>
                          <span className='mk-stepper-step__icon' id='icon_1'>
                            1
                          </span>
                          <span className='mk-stepper-step__lable'>
                            <a className='card-title'>
                              <h3 className='float-left  title-font'>
                                Candidate
                              </h3>
                            </a>
                          </span>
                        </summary>
                        <div
                          id='CreatInteview'
                          className='mk-stepper-step__body'
                        >
                          <div>
                            <div className='form-inline customForm row'>
                              <div className='form-group mb-2 col-md-3'>
                                <i className='iconC'>
                                  <FontAwesomeIcon
                                    className='icon'
                                    icon={faUser}
                                  />
                                </i>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='FirstName'
                                ></input>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <i className='iconC'>
                                  {" "}
                                  <FontAwesomeIcon
                                    className='icon'
                                    icon={faUser}
                                  />
                                </i>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='LastName'
                                ></input>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <i className='iconC'>
                                  {" "}
                                  <FontAwesomeIcon
                                    className='icon'
                                    icon={faEnvelope}
                                  />
                                </i>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='Email'
                                ></input>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <i className='iconC'>
                                  <FontAwesomeIcon
                                    className='icon'
                                    icon={faUser}
                                  />
                                </i>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='ID'
                                ></input>
                              </div>
                              <div className='col-md-12 footer-buttons'>
                                <button className='btn btn-pink mb-2m mt-3 mb-3'>
                                  Add
                                </button>
                                <button className='btn btn-pink mb-2m mt-3 mb-3'>
                                  Next
                                </button>
                              </div>
                              <ul className='list-unstyled list-inline'></ul>
                            </div>
                            <div className='clearfix'></div>
                          </div>
                        </div>
                      </details>
                      {/* FOR ORGANIZATION INFO  */}
                      <details className='mk-stepper-step'>
                        <summary className='mk-stepper-step__header'>
                          <span className='mk-stepper-step__icon' id='icon_2'>
                            2
                          </span>
                          <span className='mk-stepper-step__lable'>
                            <a className='card-title'>
                              <h3 className='float-left  title-font'>
                                Organization Info
                              </h3>
                            </a>
                          </span>
                        </summary>
                        <div className='mk-stepper-step__body'>
                          <div>
                            <div className='form-inline customForm row'>
                              <div className='col-12 pl-0 pb-2'>
                                <h3 className='title-font'>MANAGER</h3>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <i className='iconC'>
                                  <FontAwesomeIcon
                                    className='icon'
                                    icon={faUser}
                                  />
                                </i>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='FirstName'
                                ></input>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <i className='iconC'>
                                  <FontAwesomeIcon
                                    className='icon'
                                    icon={faUser}
                                  />
                                </i>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='LastName'
                                ></input>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <i className='iconC'>
                                  <FontAwesomeIcon
                                    className='icon'
                                    icon={faEnvelope}
                                  />
                                </i>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='Email'
                                ></input>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <select className='form-contol pl-0'></select>
                              </div>
                              <div className='col-12 mt-4 pl-0 pb-2'>
                                <h3 className='title-font'>Department</h3>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <select
                                  id='depart_name'
                                  className='form-contol pl-0'
                                ></select>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <select
                                  id='job_title'
                                  className='form-contol pl-0'
                                ></select>
                              </div>
                              <div className='col-md-12 footer-buttons'>
                                <button className='btn btn-pink mb-2m mt-3 mb-3'>
                                  Add
                                </button>
                                <button className='btn btn-pink mb-2m mt-3 mb-3'>
                                  Next
                                </button>
                              </div>
                              <ul className='list-unstyled list-inline'></ul>
                            </div>
                            <div className='clearfix'></div>
                          </div>
                        </div>
                      </details>
                      {/* FOR PANEL PARTICIPATE */}
                      <details className='mk-stepper-step' open>
                        <summary className='mk-stepper-step__header'>
                          <span className='mk-stepper-step__icon' id='icon_3'>
                            3
                          </span>
                          <span className='mk-stepper-step__lable'>
                            <a className='card-title'>
                              <h3 className='float-left  title-font'>
                                Panel Participate
                              </h3>
                            </a>
                          </span>
                        </summary>
                        <div
                          id='CreatInteview'
                          className='mk-stepper-step__body'
                        >
                          <div>
                            <div className='form-inline customForm row'>
                              <div className='form-group mb-2 col-md-3'>
                                <i className='iconC'>
                                  <FontAwesomeIcon
                                    className='icon'
                                    icon={faUser}
                                  />
                                </i>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='FirstName'
                                ></input>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <i className='iconC'>
                                  <FontAwesomeIcon
                                    className='icon'
                                    icon={faUser}
                                  />
                                </i>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='LastName'
                                ></input>
                              </div>
                              <div className='form-group mb-2 col-md-3'>
                                <i className='iconC'>
                                  <FontAwesomeIcon
                                    className='icon'
                                    icon={faEnvelope}
                                  />
                                </i>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='Email'
                                ></input>
                              </div>
                              <div className='col-md-12 footer-buttons'>
                                <button className='btn btn-pink mb-2m mt-3 mb-3'>
                                  Add
                                </button>
                                <button className='btn btn-pink mb-2m mt-3 mb-3'>
                                  Next
                                </button>
                              </div>
                              <ul className='list-unstyled list-inline'></ul>
                            </div>
                            <div className='clearfix'></div>
                          </div>
                        </div>
                      </details>
                      {/* INTERVIEW QUESTIONS */}
                      <details className='mk-stepper-step' open>
                        <summary className='mk-stepper-step__header'>
                          <span className='mk-stepper-step__icon' id='icon_4'>
                            4
                          </span>
                          <span className='mk-stepper-step__lable'>
                            <a className='card-title'>
                              <h3 className='float-left  title-font'>
                                Interview Questions{" "}
                              </h3>
                            </a>
                          </span>
                        </summary>
                        <div
                          id='CreatInteview'
                          className='mk-stepper-step__body'
                        >
                          <div>
                            <div className='form-inline customForm row'>
                              <div className='form-group mb-2 col-md-8'>
                                <input
                                  className='form-control  question-panel'
                                  type='text'
                                  placeholder='New Question'
                                ></input>
                              </div>
                              <div className='form-group mb-2 col-md-4'>
                                <input
                                  className='form-control question-panel'
                                  type='text'
                                  id='time'
                                  placeholder='Time'
                                ></input>
                                <span className='combodate'>
                                  <div className='dropdown bootstrap-select minute  dropup'>
                                    <select
                                      className='minute'
                                      tabIndex='-98'
                                      data-size='8'
                                    >
                                      <option>minute</option>
                                      <option value='00'>00</option>
                                      <option value='01'>01</option>
                                      <option value='02'>02</option>
                                      <option value='03'>03</option>
                                      <option value='04'>04</option>
                                      <option value='05'>05</option>
                                      <option value='06'>06</option>
                                      <option value='07'>07</option>
                                      <option value='08'>08</option>
                                      <option value='09'>09</option>
                                      <option value='10'>10</option>
                                      <option value='11'>11</option>
                                      <option value='12'>12</option>
                                      <option value='13'>13</option>
                                      <option value='14'>14</option>
                                      <option value='15'>15</option>
                                      <option value='16'>16</option>
                                      <option value='17'>17</option>
                                      <option value='18'>18</option>
                                      <option value='19'>19</option>
                                      <option value='20'>20</option>
                                      <option value='21'>21</option>
                                      <option value='22'>22</option>
                                      <option value='23'>23</option>
                                      <option value='24'>24</option>
                                      <option value='25'>25</option>
                                      <option value='26'>26</option>
                                      <option value='27'>27</option>
                                      <option value='28'>28</option>
                                      <option value='29'>29</option>
                                      <option value='30'>30</option>
                                      <option value='31'>31</option>
                                      <option value='32'>32</option>
                                      <option value='33'>33</option>
                                      <option value='34'>34</option>
                                      <option value='35'>35</option>
                                      <option value='36'>36</option>
                                      <option value='37'>37</option>
                                      <option value='38'>38</option>
                                      <option value='39'>39</option>
                                      <option value='40'>40</option>
                                      <option value='41'>41</option>
                                      <option value='42'>42</option>
                                      <option value='43'>43</option>
                                      <option value='44'>44</option>
                                      <option value='45'>45</option>
                                      <option value='46'>46</option>
                                      <option value='47'>47</option>
                                      <option value='48'>48</option>
                                      <option value='49'>49</option>
                                      <option value='50'>50</option>
                                      <option value='51'>51</option>
                                      <option value='52'>52</option>
                                      <option value='53'>53</option>
                                      <option value='54'>54</option>
                                      <option value='55'>55</option>
                                      <option value='56'>56</option>
                                      <option value='57'>57</option>
                                      <option value='58'>58</option>
                                      <option value='59'>59</option>
                                    </select>
                                    <button
                                      className='btn btn-light fa dropdownfont position-relative'
                                      data-toggle='dropdown'
                                      role='button'
                                      aria-expanded='false'
                                    >
                                      <div className='filter-option'>
                                        <div className='filter-option-inner'>
                                          <div className='filter-option-inner-inner'>
                                            03
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                    <div
                                      className='dropdown-menu show'
                                      role='combobox'
                                      x-placement='top-start'
                                    >
                                      {" "}
                                    </div>
                                    <div
                                      className='inner show'
                                      role='listbox'
                                      aria-expanded='true'
                                      tabIndex='-1'
                                    >
                                      <ul className='dropdown-menu inner show'>
                                        <li>
                                          <a
                                            className='dropdown-item'
                                            role='option'
                                            area-aria-disabled='true'
                                            yabindex='-1'
                                          >
                                            <span className='text'>minute</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className='dropdown-item'
                                            role='option'
                                            area-aria-disabled='true'
                                            yabindex='-1'
                                          >
                                            <span className='text'>00</span>
                                          </a>
                                        </li>

                                        <li>
                                          <a
                                            className='dropdown-item'
                                            role='option'
                                            area-aria-disabled='true'
                                            yabindex='-1'
                                          >
                                            <span className='text'>01</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className='dropdown-item'
                                            role='option'
                                            area-aria-disabled='true'
                                            yabindex='-1'
                                          >
                                            <span className='text'>02</span>
                                          </a>
                                        </li>
                                        <li className='selected-active'>
                                          <a
                                            className='dropdown-item'
                                            role='option'
                                            area-aria-disabled='true'
                                            yabindex='-1'
                                          >
                                            <span className='text'>03</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className='dropdown-item'
                                            role='option'
                                            area-aria-disabled='true'
                                            yabindex='-1'
                                          >
                                            <span className='text'>04</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className='dropdown bootstrap-select second'>
                                    <select
                                      className='second'
                                      tabIndex='-98'
                                      data-size='8'
                                    >
                                      <option>second</option>
                                      <option value='00'>00</option>
                                      <option value='01'>01</option>
                                      <option value='02'>02</option>
                                      <option value='03'>03</option>
                                      <option value='04'>04</option>
                                      <option value='05'>05</option>
                                      <option value='06'>06</option>
                                      <option value='07'>07</option>
                                      <option value='08'>08</option>
                                      <option value='09'>09</option>
                                      <option value='10'>10</option>
                                      <option value='11'>11</option>
                                      <option value='12'>12</option>
                                      <option value='13'>13</option>
                                      <option value='14'>14</option>
                                      <option value='15'>15</option>
                                      <option value='16'>16</option>
                                      <option value='17'>17</option>
                                      <option value='18'>18</option>
                                      <option value='19'>19</option>
                                      <option value='20'>20</option>
                                      <option value='21'>21</option>
                                      <option value='22'>22</option>
                                      <option value='23'>23</option>
                                      <option value='24'>24</option>
                                      <option value='25'>25</option>
                                      <option value='26'>26</option>
                                      <option value='27'>27</option>
                                      <option value='28'>28</option>
                                      <option value='29'>29</option>
                                      <option value='30'>30</option>
                                      <option value='31'>31</option>
                                      <option value='32'>32</option>
                                      <option value='33'>33</option>
                                      <option value='34'>34</option>
                                      <option value='35'>35</option>
                                      <option value='36'>36</option>
                                      <option value='37'>37</option>
                                      <option value='38'>38</option>
                                      <option value='39'>39</option>
                                      <option value='40'>40</option>
                                      <option value='41'>41</option>
                                      <option value='42'>42</option>
                                      <option value='43'>43</option>
                                      <option value='44'>44</option>
                                      <option value='45'>45</option>
                                      <option value='46'>46</option>
                                      <option value='47'>47</option>
                                      <option value='48'>48</option>
                                      <option value='49'>49</option>
                                      <option value='50'>50</option>
                                      <option value='51'>51</option>
                                      <option value='52'>52</option>
                                      <option value='53'>53</option>
                                      <option value='54'>54</option>
                                      <option value='55'>55</option>
                                      <option value='56'>56</option>
                                      <option value='57'>57</option>
                                      <option value='58'>58</option>
                                      <option value='59'>59</option>
                                    </select>
                                    <button
                                      className='btn btn-light fa dropdownfont position-relative'
                                      type='button'
                                      role='button'
                                      title='00'
                                      data-toggle='dropdown'
                                    >
                                      <div className='filter-option'>
                                        <div className='filter-option-inner'>
                                          00
                                        </div>
                                      </div>
                                    </button>
                                    <div
                                      className='dropdown-menu'
                                      role='comboobx'
                                    >
                                      <div
                                        className='inner show'
                                        role='listbox'
                                        aria-expanded='true'
                                        tabIndex='-1'
                                      >
                                        <ul className='dropdown-menu inner show'>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>second</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>00</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>01</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>02</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>03</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>04</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>05</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>06</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>07</span>
                                            </a>
                                          </li>

                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>08</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>09</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>10</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>11</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>12</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>13</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>14</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>15</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>16</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>17</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>18</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>19</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>20</span>
                                            </a>
                                          </li>

                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>21</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>22</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>23</span>
                                            </a>
                                          </li>

                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>24</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>25</span>
                                            </a>
                                          </li>

                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>26</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>27</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>28</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>29</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>30</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>31</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>32</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>33</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>34</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>35</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>36</span>
                                            </a>
                                          </li>

                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>37</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>38</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>39</span>
                                            </a>
                                          </li>

                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>40</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>41</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>42</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>43</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>44</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>45</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>46</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>47</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>48</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            > 
                                              <span clas='text'>49</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>50</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>51</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>52</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>53</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>54</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>55</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>56</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>57</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>58</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className='dropdown-item'
                                              role='option'
                                              aria-expanded='false'
                                              tabIndex='0'
                                              aria-selected='false'
                                            >
                                              <span clas='text'>59</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                              </div>
                              <div className='form-group col-md-12'>
                                <button
                                  className='btn btn-pink mb-2m mt-3'
                                  id='add-quation'
                                  type='button'
                                  data-langkey='AddButton'
                                >
                                  Add
                                </button>
                                <button
                                  className='btn btn-pink mb-2m mt-3'
                                  id='save-quation'
                                  type='button'
                                >
                                  Save
                                </button>
                              </div>
                              <div className='form-group col-md-12 mt-3'>
                                <div className='table-responsive'>
                                  <table
                                    className='table table-hover table-striped'
                                    id='table'
                                  >
                                    <thead>
                                      <tr>
                                        <th data-langkey='Quation'>Quation</th>
                                        <th data-langkey='Time'>Time</th>
                                        <th data-langkey='Action'>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody id='quation-preview'></tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className='btn btn-pink u-margin-center mb-2m  mt-3'
                          id='manager-dashbord-submit'
                          data-langkey='submit'
                        >
                          Submit
                        </button>
                      </details>
                      {/*<ul className="list-unstyled list-inline"></ul> */}
                    </div>
                  </div>
                )}

                <div className='clearfix'></div>
                <div class="mb-4 manager-view">
							<div class="card-header" >
								<div className="interviw_div1">
									<a class="card-title">
										<h1 class="float-left title-font" id="title-Name">All Candidates
										</h1>
									</a>
								</div>
								<div className="interviw_div2" >
									<label class="title-font" id="title-Name">Search </label>
									<input type="text" id="searchCandidate" class="form-control companyName"/>
								</div>
							</div>
							<div class="clearfix"></div>
							<div id="collapseOne" class="card-body show cardB">
								<div id="company-information" class="card-wrap cardR" >
									<div class="table-responsive">
										<table id="interview-table" class="table table-hover table-striped paymentTable"	>
								
											<thead>
												<tr>
													<th> </th>
													<th> Name</th>
													<th> Job Title</th>
													<th> Status</th>
													<th> Date</th>
													<th class="text-center notprint"> Picture</th>
													<th > Score</th>
												</tr>
											</thead>
											<tbody id='candidate-table'>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
