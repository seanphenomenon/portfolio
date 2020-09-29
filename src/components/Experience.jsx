import React from 'react';

export default class Experience extends React.Component {

    render() {
        return (
            <div>
                <section className='p-5 align-items-center' id="experience">
                <div className='w-100'>
                    <h2 className='p-2 mb-3 mt-4'>Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-center mb-5">
                        <div className="p-2">
                            <h4 className="mb-0">Public Information Clerk</h4>
                            <div className="mb-3 subheading">City of San Diego - Development Services</div>
                            <p id='experience-info'>
                                • Provided excellent customer service in a fast-paced environment <br />
                                • Assisted in the Over-The-Counter Issuance of city permits for repairs to mechanical, electrical, plumbing, and fire systems<br />
                                • Helped project managers and customers with the intake of project re-submittals<br />
                                • Utilized the Project Tracking Software to set-up new projects, analyze situations, and provided a variety of project status updates to agents<br />
                                • Processed and distributed plans to respective development discipline departments<br />
                            </p>
                        </div>
                        <div className=" date text-md-right ml-3" id='date'>
                            <span className="date">August 2018 - July 2020</span>
                        </div>
                    </div>

                     
                    <div className="d-flex flex-column flex-md-row justify-content-center mb-5">
                    <div className='p-2'>
                        <h4 className="mb-0">Senior Secretary</h4>
                        <div className="mb-3 subheading">San Diego Community College District</div>
                        <p id='experience-info'>
                        • Handled urgent administrative needs and scheduled conference meetings for District faculty, staff, and administrators - including Deans, Senior Secretaries, and Vice Chancellor<br/>
                        • Prepared documents and all other meeting materials for inclusion into Cabinet Meeting, Board Meeting, and Committee Meetings on behalf of the Vice Chancellor and Interim Dean of Instructional Services.<br/>
                        • Conducted grant analysis research and developed grant tracking spreadsheets in support of quarterly districtwide grant reporting and annual presentation of grants and contracts to the Board of Trustees.<br/>
                        • Monitored budgets, purchases, and expenditures for department through PeopleSoft and Excel<br/>
                        </p>
                    </div>
                    <div className=" date text-md-right ml-5" id='date'>
                        <span className="date">August 2017 - August 2018</span>
                    </div>
                </div>
                    <hr className='m-0' id='education'/>
                    </div>
                </section>
            </div>

        );
    }







}