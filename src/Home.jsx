
// Portfolio.jsx
import React from 'react';
import './Home.css'; // External modern style will be added here
import profileImage from './assets/img new.png';
import resumeFile from './assets/Alen_Fredaric_Resume.pdf';
import collegeManagementImage from './assets/college_management.png';
import project2Image from './assets/project2_image.png';
import project3Image from './assets/project3_image.png';
import project4Image from './assets/project4_image.png';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiBootstrap, SiVite } from 'react-icons/si';


const Home = () => {
    return (
        <div className="portfolio-container">
            <header className="portfolio-header">
                <h1 className='portfolio-title'>Alen Fredaric Francis</h1>
                <nav className='portfolio-nav'>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section id="home" className="hero-section">
                <img src={profileImage} alt="Your Profile" className="hero-image" />
                <h2 className='hero-heading'>Hi, I'm Alen</h2>
                <p className='hero-subheading'>Frontend Developer | React Developer | Backend Developer | Mern Stack Developer</p>
                <a href="#projects" className="hero-button">View My Work</a>
            </section>

            <section id="about" className="about-section">
                <h2>About Me</h2>
                <p>
                    I'm a passionate and dedicated Full Stack Developer with hands-on experience building responsive and dynamic web applications using React.js, Node.js, and the MERN stack. Through comprehensive training and project-based learning, I’ve gained strong proficiency in technologies like Next.js, Express.js, and MongoDB. I thrive on creating intuitive, scalable, and efficient solutions that enhance user experiences. With a strong work ethic, a fast learning curve, and a collaborative mindset, I’m eager to contribute to innovative teams and work on impactful, cutting-edge projects.
                </p>
                <a href={resumeFile} download="Alen_Fredaric_Resume.pdf" className="resume-button">Download Resume</a>
            </section>

            <section id="skills" className="skills-section">
                <h2>Skills</h2>
                <div className="skills-grid">
                    <div className="skill-item"><FaReact className="icon react" /><p>React.js</p></div>
                    <div className="skill-item"><FaJs className="icon js" /><p>JavaScript</p></div>
                    <div className="skill-item"><FaHtml5 className="icon html" /><p>HTML5</p></div>
                    <div className="skill-item"><FaCss3Alt className="icon css" /><p>CSS3</p></div>
                    <div className="skill-item"><SiBootstrap className="icon bootstrap" /><p>Bootstrap</p></div>
                    <div className="skill-item"><SiVite className="icon vite" /><p>Vite</p></div>
                    <div className="skill-item"><FaNodeJs className="icon node" /><p>Node.js</p></div>
                    <div className="skill-item"><SiExpress className="icon express" /><p>Express.js</p></div>
                    <div className="skill-item"><SiMongodb className="icon mongo" /><p>MongoDB</p></div>
                    <div className="skill-item"><FaPython className="icon python" /><p>Python</p></div>
                    
                </div>
            </section>


            <section id="projects" className="projects-section">
                <h2>My Projects</h2>

                <div className="project-card">
                    <h3>College Management System (MERN STACK)</h3>
                    <img src={collegeManagementImage} alt="College Management System" className="project-image" />
                    <p>I created a dynamic full-stack web application designed for three distinct user roles: students, faculty, and admins, each tailored with specific functionalities. Authentication and authorization are handled securely using JWT. Admins can manage users, branches, subjects, notices, and profiles; faculty can view students, upload marks, manage timetables and materials; and students can view profiles, timetables, marks, and study materials in a streamlined interface.</p>
                </div>

                <div className="project-card">
                    <h3>Texas E-commerce restaurant website</h3>
                    <img src={project2Image} alt="Texas E-commerce" className="project-image" />
                    <p>Texas is a responsive and user-friendly e-commerce web application built using React.js and Vite. It offers core e-commerce functionalities including product listings, detailed views, and a shopping cart, with efficient state management via Redux and Context API. The UI is mobile-friendly and scalable with clean component architecture.</p>
                </div>

                <div className="project-card">
                    <h3>Weather App</h3>
                    <img src={project3Image} alt="Weather App" className="project-image" />
                    <p>Weather App is a real-time weather forecasting app that displays current weather data using external APIs like OpenWeatherMap. The interface is intuitive and responsive, allowing users to search any city and view weather metrics like temperature, humidity, wind speed, and conditions.</p>
                </div>

                <div className="project-card">
                    <h3>ToyCart E-commerce Website</h3>
                    <img src={project4Image} alt="ToyCart" className="project-image" />
                    <p>Toycart is a feature-rich e-commerce platform built with Python and Django. It supports user registration, login, cart management, product browsing, order placement, and simulated payment gateway. Admins can manage content via Django admin. The frontend is built using responsive HTML, CSS, and Bootstrap for a clean UX.</p>
                </div>
            </section>

            <section id="contact" className="contact-section">
                <h2>Contact Me</h2>
                <p>Email: <a href="mailto:alenfredaricfrancis@gmail.com">alenfredaricfrancis@gmail.com</a></p>
                <p>Ph.No: 9074796853</p>
            </section>

            <footer className="portfolio-footer">
                <p>&copy; {new Date().getFullYear()} Alen Fredaric Francis</p>
            </footer>
        </div>
    );
};

export default Home;
