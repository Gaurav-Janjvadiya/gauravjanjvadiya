import React from "react";
import "./Projects.css"; // Ensure you have this CSS file for custom styles

const Projects = () => {
  const projects = [
    {
      title: "Wanderlust",
      description:
        "Discover and explore amazing travel destinations around the world.",
      url: "https://wanderlust-0vqa.onrender.com/listings",
    },
    {
      title: "QuickTodo",
      description:
        "Organize your tasks effortlessly with this user-friendly to-do app.",
      url: "https://quicktodobygaurav.onrender.com/",
    },
    {
      title: "Image Gallery",
      description:
        "A stunning collection of images displayed in an elegant gallery.",
      url: "https://main--image-gallary-by-gaurav.netlify.app/",
    },
  ];

  return (
    <>
      <div className="container my-5 py-4">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-12 mb-5" key={index}>
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <div className="iframe-container mb-3">
                <iframe
                  src={project.url}
                  title={project.title}
                  className="project-iframe"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Full Demo
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Section at the end for overall description and icons */}
      {/* Section at the end for overall description and icons */}
      <div className="row mt-5 mb-3">
        <div className="col-md-12 text-center">
          <h5>Technologies Used</h5>
          <p>
            These applications are powered by the MERN stack, combining MongoDB
            for robust data management, Express and Node.js for efficient
            backend functionality, and React for creating responsive and dynamic
            front-end experiences. Secure authentication is implemented with
            Passport.js.
          </p>
          <div className="d-flex justify-content-center flex-wrap">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="mx-3 my-2 tech-icon hover-effect"
              style={{ width: "50px" }}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="Express"
              className="mx-3 my-2 tech-icon hover-effect"
              style={{ width: "50px" }}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="mx-3 my-2 tech-icon hover-effect"
              style={{ width: "50px" }}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              className="mx-3 my-2 tech-icon hover-effect"
              style={{ width: "50px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
