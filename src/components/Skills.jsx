import React from 'react';

export default class Skills extends React.Component{
    render(){
        return(
            <div>
                <section className='p-5 align-items-center' id="skills">
                    <div className='w-100'>
                        <h2 className='p-2 mb-5'>Skills</h2>
                        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="p-2">
                                <div className="mb-3 subheading">Programming Languages & Tools</div>
                                <div className="dev-icons mb-2">
                                <i className="fab fa-html5" id='html-icon'></i>
                                <i className="fab fa-css3-alt" id='css-icon'></i>
                                <i className="fab fa-js" id='js-icon'></i>
                                <i className="fab fa-react" id='react-icon'></i>
                                <i className="fab fa-node" id='node-icon'></i>
                                <i className="fab fa-git" id='git-icon'></i>
                                <i className="fab fa-npm" id='npm-icon'></i>
                                <i className="fab fa-slack" id='slack-icon'></i>
                            
                        </div>
                                <p>• MongoDB<br/>
                                    • MySQL<br/>
                                    • CircleCI<br/>
                                    • Bootstrap<br/>
                                    • Google Analytics<br/>
                                    • Hootsuite - Social Media Management Platform<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                 </section>
                    <hr/>
                </div>
        );
    }
}