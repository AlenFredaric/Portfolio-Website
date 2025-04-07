// // Portfolio.jsx
// import React from 'react';
// import './Home.css';
// import profileImage from './assets/img new.png';
// import resumeFile from './assets/Alen_Fredaric_Resume.pdf';
// import collegeManagementImage from './assets/college_management.png'; // Import project images
// import project2Image from './assets/project2_image.png'; // Import project 2 image
// import project3Image from './assets/project3_image.png';
// import project4Image from './assets/project4_image.png';

// const Home = () => {
//     return (
//         <div className="container-fluid portfolio">
//             <header>
//                 <h1 className='head'>Alen Fredaric Francis</h1>
//                 <nav className='headnav'>
//                     <a href="#home">Home</a>
//                     <a href="#about">About</a>
//                     <a href="#projects">Projects</a>
//                     <a href="#contact">Contact</a>
//                 </nav>
//             </header>

//             <section id="home" className="hero">
//                 <img src={profileImage} alt="Your Profile" className="profile-image" />
//                 <h2>Hi, I'm Alen </h2>
//                 <p>Frontend Developer | Backend Developer | Mern Stack Developer | React Developer</p>
//                 <a href="#projects" className="cta">View My Work</a>
//             </section>

//             <section id="about" className="about">
//                 <h2>About Me</h2>
//                 <p>
//                     Highly motivated and enthusiastic aspiring Full Stack Developer with practical experience
//                     building responsive web applications using React.js, Node.js, and related technologies.
//                     Completed a MERN stack development course, further enhancing expertise in Next.js,
//                     Express.js, and MongoDB. Passionate about creating user-friendly, efficient, and scalable
//                     solutions. Proven ability to learn quickly and collaborate effectively. Eager to contribute to a
//                     dynamic team and work on cutting-edge projects.
//                 </p>
//                 <a href={resumeFile} download="Alen_Fredaric_Resume.pdf" className="resume-download">Download Resume</a>
//             </section>

//             <section id="projects" className="projects">
//                 <h2>My Projects</h2>
//                 <div className="project">
//                     <h3>College Management System (MERN STACK)</h3>
//                     <img src={collegeManagementImage} alt="College Management System" className="project-image" />
//                     <p>I created a dynamic full-stack web application designed for three distinct user roles: students, faculty, and admins, each tailored with specific functionalities to meet their needs. For security, I integrated user authentication and authorization using JWT, ensuring that everyone’s data is protected. The admin interface is user-friendly, allowing for seamless management of users, creation of branches and subjects, scheduling notices, and handling profile updates. Faculty members enjoy a streamlined experience too, with easy access to student information, the ability to upload marks, manage timetables, handle notices, and share study materials. Students can effortlessly view and update their profiles, check their timetables, see their marks, access study materials, and receive meeting notifications—all designed to enhance their learning experience and keep everything organized.</p>
//                     {/* Add project images/links */}
//                 </div>
//                 <div className="project">
//                     <h3>Texas E-commerce restaurant website</h3>
//                     <img src={project2Image} alt="Project 2" className="project-image" />
//                     <p>Texas is a responsive and user-friendly e-commerce web application built using React.js and Vite, designed for fast performance and a smooth development workflow. The platform features core e-commerce functionalities such as product listing, detailed views, and a shopping cart, with efficient state management implemented using both Redux and Context API. The project emphasizes scalability through reusable components and clean architecture, while offering a modern, mobile-friendly user interface.</p>
//                     {/* Add project images/links */}
//                 </div>
//                 <div className="project">
//                     <h3>Weather App</h3>
//                     <img src={project3Image} alt="Project 2" className="project-image" />
//                     <p>Weather App is a real-time weather forecasting application that retrieves and displays current weather data using external APIs, such as OpenWeatherMap. The app features a clean, intuitive, and responsive user interface, allowing users to search for any city and instantly view details like temperature, humidity, wind speed, and weather conditions. It is designed for a smooth user experience across both desktop and mobile devices.</p>
//                     {/* Add project images/links */}
//                 </div>
//                 <div className="project">
//                     <h3>ToyCart E-commerce Website</h3>
//                     <img src={project4Image} alt="Project 2" className="project-image" />
//                     <p>Toycart is a full-featured e-commerce web application built with Python and Django, designed to offer a seamless toy shopping experience. It includes core functionalities such as user authentication, product catalog browsing, shopping cart management, order processing, and simulated payment gateway integration. The platform allows users to register, log in, manage their carts, and place orders, while administrators can manage products, users, and orders through Django’s admin dashboard. The frontend is built using responsive HTML, CSS, and Bootstrap for a clean and user-friendly interface.</p>

//                     {/* Add project images/links */}
//                 </div>
//                 {/* Add more projects */}
//             </section>

//             <section id="contact" className="contact">
//                 <h2>Contact Me</h2>
//                 <p>Email: alenfredaricfrancis@gmail.com</p>
//                 {/* Add social media links or a contact form */}
//             </section>

//             <footer>
//                 <p>&copy; {new Date().getFullYear()} Alen Fredaric Francis. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default Home;

// Portfolio.jsx
import React from 'react';
import './Home.css'; // External modern style will be added here
import profileImage from './assets/img new.png';
import resumeFile from './assets/Alen_Fredaric_Resume.pdf';
import collegeManagementImage from './assets/college_management.png';
import project2Image from './assets/project2_image.png';
import project3Image from './assets/project3_image.png';
import project4Image from './assets/project4_image.png';

const Home = () => {
    return (
        <div className="portfolio-container">
            <header className="portfolio-header">
                <h1 className='portfolio-title'>Alen Fredaric Francis</h1>
                <nav className='portfolio-nav'>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
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
            </section>

            <footer className="portfolio-footer">
                <p>&copy; {new Date().getFullYear()} Alen Fredaric Francis. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
