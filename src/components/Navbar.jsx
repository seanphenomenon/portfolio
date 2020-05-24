import React from 'react';



export default class Navbar extends React.Component {
    
    render() {
        return (
            <div className='container-fluid p-5'>
            <div className='row'>
            <div className='col-sm-3'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow" id='sideNav'>
                    <a className="navbar-brand" href="#page-top">SH</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item" activeClassName='selected' data-toggle="collapse" data-target=".navbar-collapse">
                                <a className="nav-link js-scroll-trigger" href="#page-top">About Me</a>
                            </li>
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                                <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                                <a className="nav-link  js-scroll-trigger" href="#education">Education</a>
                            </li>

                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                                <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                            </li>

                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                                <a className="nav-link js-scroll-trigger" href="#contact-info">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            </div>
            </div>
        );
    }

} 