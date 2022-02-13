import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://api.whatsapp.com/send/?phone=+6281515204215&text&app_absent=0'>
                            <i className='fa fa-whatsapp'></i>
                        </a>
                        <a href='https://web.facebook.com/yogiadamf'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/yogiadamfirdaus/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="https://github.com/yogiadamf?tab=repositories">
                            <i className='fa fa-github'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/yogi-adam-firdaus-9bb34415b/">
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href="https://twitter.com/yogiadamf19">
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            Hello, I'M <span className='highlighted-text'>Yogi</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            <h1>
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Ethusiatic Dev 😎",
                                    1000,
                                    "Front End Developer 💻",
                                    1000,
                                    "UI & UX Design 📱",
                                    1000,
                                    "React/Flutter Dev 🌐",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Building application with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <a href='https://api.whatsapp.com/send/?phone=+6281515204215&text&app_absent=0'>
                        <button className='btn primary-btn'>
                            Hire Me
                        </button>
                        </a>
                        <a href='cv.pdf' download='Yogi cv.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
