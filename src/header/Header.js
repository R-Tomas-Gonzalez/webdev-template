import React from 'react';
import './Header.scss';
import { HashLink } from 'react-router-hash-link';
import { HashRouter } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav className='main__nav'>
                <div className='logo__container'>
                    <div className='logo'>R. Tomas Gonzalez | 210-639-8262 </div>
                </div>
                <div className="nav__links">
                    <HashRouter>
                        <ul>
                            <li>
                                <HashLink smooth to="#about-section">
                                    About
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="#project-section">
                                    Projects
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="#contact-section">
                                    Contact
                                </HashLink>
                            </li>
                        </ul>
                    </HashRouter>
                    <a className='cta' href="https://docs.google.com/document/d/1pGcgmsuHV80UWSypiFAs7M_FVMZuCsJQXB6FvIHMa_0" target='_blank' rel='noreferrer'><button>Resume</button></a>
                </div>
            </nav>
        </header>
    )
}
