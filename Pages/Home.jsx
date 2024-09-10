import Typewriter from "typewriter-effect";
import myImage from "../public/man-8106958_640-removebg-preview.png";
import "./Home.css";

function Home() {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="p-5 d-flex align-items-center justify-content-start col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="h1 fw-bold">
            <span className="text-black">I am</span>
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
          </h1>
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
  );
}

export default Home;
