import Typewriter from "typewriter-effect";
import myImage from "../public/man-8106958_640-removebg-preview.png";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="container-fluid vh-100 d-flex align-items-center justify-content-center border-bottom border-dark-subtle"
        style={{
          background: "linear-gradient(135deg, #e6e6fa, #ffffff)",
        }}
      >
        <div className="row w-100">
          <div className="p-5 d-flex align-items-center justify-content-start col-12 col-md-6 mb-4 mb-md-0">
            <div>
              <h1 className="h1 fw-bold">
                <span className="text-black">I am</span>
                <span style={{ color: "#ff5733" }}>
                  <Typewriter
                    options={{
                      strings: [
                        "Gaurav Janjvadiya",
                        "Web Developer",
                        "Tech Enthusiast",
                        "Problem Solver",
                        "Lifelong Learner",
                      ],
                      autoStart: true,
                      loop: true,
                      cursor: "|",
                      delay: 50,
                    }}
                  />
                </span>
              </h1>
              <p className="lead mt-3" style={{ color: "#333" }}>
                Crafting efficient web solutions with the power of the MERN
                stack.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img
              src={myImage}
              alt="Gaurav"
              className="img-fluid rounded-pill transparent-bg"
            />
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="container my-5">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center">
          I am a passionate web developer with experience in the MERN stack. I
          enjoy building web applications that solve real-world problems and
          enhance user experiences.
        </p>
      </div>

      {/* My Skills Section */}
      <div id="skills" className="container my-5">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card text-center p-3">
              <i
                className="fas fa-database fa-3x mb-3"
                style={{ color: "#4DB33D" }}
              ></i>
              <h5 className="card-title">MongoDB</h5>
              <p className="card-text">
                NoSQL database, data modeling, aggregation
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center p-3">
              <i
                className="fas fa-server fa-3x mb-3"
                style={{ color: "#000000" }}
              ></i>
              <h5 className="card-title">Express.js</h5>
              <p className="card-text">
                Backend framework, RESTful APIs, middleware
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center p-3">
              <i
                className="fas fa-cogs fa-3x mb-3"
                style={{ color: "#61DBFB" }}
              ></i>
              <h5 className="card-title">React</h5>
              <p className="card-text">
                UI development, component-based architecture, hooks
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center p-3">
              <i
                className="fas fa-code fa-3x mb-3"
                style={{ color: "#8CC84B" }}
              ></i>
              <h5 className="card-title">Node.js</h5>
              <p className="card-text">
                Server-side JavaScript, asynchronous programming, APIs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container my-5">
        <h2 className="text-center mb-4">Contact</h2>
        <p className="text-center">
          Want to collaborate? Feel free to reach out to me via{" "}
          <a href="mailto:gaurav@example.com">email</a>.
        </p>
      </div>
    </>
  );
}

export default Home;
