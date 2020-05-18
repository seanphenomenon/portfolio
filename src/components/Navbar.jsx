import React from 'react';

export default class Navbar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="#">SH</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item" id='links'>
                                <a className="nav-link" href="#about">About</a>
                            </li>
                             <li className="nav-item" id='links'>
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experience">Experience</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link" href="#education">Education</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
</div>

        );
    }
} 