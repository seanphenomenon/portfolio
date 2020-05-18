import React from 'react';

export default class Education extends React.Component {
    render() {
        return (
            <div>
                <section className='p-5 align-items-center' id="education">
                    <div className='w-100'>
                        <h2 className='p-2 mb-5'>Education</h2>
                        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="p-2">
                                <h4 className="mb-0">San Diego Code School</h4>
                                <div className="mb-3 subheading">Full-Stack Web Development Program</div>
                                <p>• Learned full-stack JavaScript development best practices with React.js, HTML/CSS, Node.js,
                                    MongoDB, and MySQL<br/>
                                    • Participated in group projects where mob programming and/or pair programming were utilized<br/>
                                    • Implemented Git for version control in both group and individual projects<br/>
                                    • Followed Agile Development principles and practices <br/>
                                </p>
                            </div>
                            <div className="text-sm-right mb-5" id='date'>
                                <span className="date">November 2019 - May 2020</span>
                            </div>
                        </div>
                    </div>
                        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="p-2">
                                <h4 className="mb-0">San Diego State University</h4>
                                <div className="mb-3 subheading">Bachelor of Science - Business (Marketing) </div>
                                <p>• Obtained skills and knowledge centered on general business practices and logistics, and integrated
                                     marketing communications<br/>
                                   • Developed an understanding that adheres to user experience, promotions, and digital marketing for
                                     products and services<br/>
                                   • Proficient in Google Analytics and Hootsuite <br/>
                                </p>
                            </div>
                            <div className="text-sm-right mb-5" id='date'>
                                <span className="date">November 2019 - May 2020</span>
                            </div>
                        </div>
                </section>
            </div>

        );
    }
}