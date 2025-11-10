// import React from 'react'
// import { Link } from 'react-router-dom';

// export default function Home() {
//     return (
//         <div className="mx-auto w-full max-w-7xl">
//             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//                     <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//                         <h2 className="text-4xl font-bold sm:text-5xl">
//                             Download Now
//                             <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
//                         </h2>

//                         <Link
//                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
//                             to="/"
//                         >
//                             <svg
//                                 fill="white"
//                                 width="24"
//                                 height="24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                             >
//                                 <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//                             </svg>
//                             &nbsp; Download now
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
//                     <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
//                 </div>
//             </aside>

//             <div className="grid  place-items-center sm:mt-20">
//                 <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
//             </div>

//             <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
//         </div>
//     );
// }
import React from 'react';
import './Home.css'; // We'll create this CSS file for styling
import profilePic from './profile.jpg'; // Assuming you'll add a professional profile picture here

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="profile-section">
          {/* Replace with your actual professional photo */}
          <img src={profilePic} alt="Raktim Adak" className="profile-photo" />
          <h1 className="name">Raktim Adak</h1>
          <p className="tagline">B.Sc. Computer Science Graduate | Aspiring Software Developer</p>
        </div>
      </header>

      <section className="summary-section">
        <p className="summary-text">
          Highly motivated B.Sc. Computer Science student with a strong foundation in software development, database management, and object-oriented programming[cite: 2].
          Proficient in Java, Kotlin, Android development, Spring Boot, Python, and DBMS[cite: 3].
          Eager to contribute to innovative projects and build robust, scalable applications[cite: 4].
        </p>
      </section>

      <section className="skills-preview-section">
        <h2>My Core Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <i className="fas fa-code"></i> {/* Example icon for coding */}
            <span>Java & Kotlin</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-android"></i> {/* Example icon for Android */}
            <span>Android Development</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-server"></i> {/* Example icon for backend */}
            <span>Spring Boot</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-database"></i> {/* Example icon for database */}
            <span>MySQL & SQLite</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-database"></i> {/* Example icon for database */}
            <span>React</span>
          </div>
          
        </div>
      </section>

      <section className="call-to-action-section">
        <p>Want to know more about my projects and expertise?</p>
        <a href="/about" className="cta-button">Learn More About Me</a>
        <a href="/contact" className="cta-button secondary">Connect with Me</a>
      </section>
    </div>
  );
}

export default Home;