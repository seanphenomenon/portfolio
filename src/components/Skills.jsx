import React from 'react';

export default class Skills extends React.Component {
    render() {
        return (
            <div>
                <section className='p-5 align-items-center' id="skills">
                    <div className='w-100'>
                        <h2 className='p-2 mb-5 mt-3'>Skills</h2>
                        <div className=" d-flex flex-column flex-md-row justify-content-center">
                            <div className="p-2">
                                <div className="mb-3 subheading">Programming Languages & Tools</div>
                                <div className="dev-icons mb-5">
                                    <i className="fab fa-html5" id='html-icon'></i>
                                    <i className="fab fa-css3-alt" id='css-icon'></i>
                                    <i className="fab fa-js" id='js-icon'></i>
                                    <i className="fab fa-react" id='react-icon'></i>
                                    <i className="fab fa-node" id='node-icon'></i>
                                    <i className="fab fa-git" id='git-icon'></i>
                                    <i className="fab fa-npm" id='npm-icon'></i>
                                    <i className="fab fa-slack" id='slack-icon'></i>

                                </div>
                                <div className='row mb-2'>

                                    <div className='col-md-6 mb-2'>
                                        <h4>Soft Skills</h4>
                                        <p className='text-align-right' id='skill-list'>
                                            <i className="fas fa-check" id='checkmark'></i>
                                            Creative Thinker<br />
                                            <i className="fas fa-check" id='checkmark'></i>
                                            Independent, but collaborative<br />
                                            <i className="fas fa-check" id='checkmark'></i>
                                            Quick Learner<br />
                                            <i className="fas fa-check" id='checkmark'></i>
                                            Excellent Time management<br />
                                        </p>
                                    </div>
                                    <div className='col-md-6'>
                                        <h4>Additional Tools</h4>
                                        <p id='skill-list'>• MongoDB<br />
                                            • MySQL<br />
                                            • Agile/Scrum Methodology<br />
                                            • CircleCI - Continuous Integration<br />
                                            • Loopback<br />
                                            • Jira<br />
                                            • Google Analytics<br />
                                            • Hootsuite - Social Media Management Platform<br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
            </div>
        );
    }
}