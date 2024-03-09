import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I possess a diverse skill set that spans across web development,{" "}
                <br></br> data structures, algorithms, and programming
                languages.
              </p>
              <div className="row">
                <div className="item col-4">
                  <img
                    className="w-25 object-fit-none"
                    src="https://t4.ftcdn.net/jpg/05/37/54/83/360_F_537548342_JTZDEMaYfgxX2eFqWwP8kaiJrjqFvUXF.jpg"
                    alt="not found"
                  ></img>
                  <h5>Data Structure and Algorithm</h5>
                </div>
                <div className="item col-4">
                  <img
                    className="w-25"
                    src="https://imgs.search.brave.com/8tjPbtKDGfwhQQT8-DhRbajx85BOCxvAJ1dAgMgs620/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9yZWFjdC0yLnN2/Zw.svg"
                    alt="not found"
                  ></img>
                  <h5>React Js</h5>
                </div>
                <div className="item col-4">
                  <img
                    className="w-25"
                    src="https://imgs.search.brave.com/mk-cdHlhi7OaCel68gaMVecl_kRqHBqYjjx0oA6FXnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk1L1Z1ZS5qc19M/b2dvXzIuc3Zn.svg"
                    alt="not found"
                  ></img>
                  <h5>Vue-3 Js</h5>
                </div>
                <div className="item col-4">
                  <img className="w-25" src="https://imgs.search.brave.com/R4oUMYOWlmaa9yJjJeEWnByL2prTSleHCdvFP6xGcjI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9qYXZhc2NyaXB0/LTEuc3Zn.svg" alt="not found"></img>
                  <h5>Javascript</h5>
                </div>
                <div className="item col-4">
                  <img className="w-25" src="https://imgs.search.brave.com/DGH8mVBu8dXHTHeWGCb5eZliNJqFR9KjkYtbrRH0Aj0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGVwcy5jb20vbG9n/by1kb3dubG9hZC9O/L05vZGUtSlMtbG9n/by12ZWN0b3ItMDEu/c3Zn.svg" alt="not found"></img>
                  <h5>Node Js</h5>
                </div>
                <div className="item col-4">
                  <img className="w-25" src="https://imgs.search.brave.com/HfCbhwfTYtjXFh6CSVWu9aJtgBi9NFr8H47aXFBmCSI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y5L0FudHVfbW9u/Z29kYi5zdmc.svg" alt="not found"></img>
                  <h5>Mongo DB</h5>
                </div>
                <div className="item col-4 mt-4">
                  <img
                    className="w-25"
                    src="https://imgs.search.brave.com/hGwT1XWOE5s9l6sFNaWVB3YKfeoo0hadewIgx8rhdFA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L1RhaWx3aW5k/X0NTU19Mb2dvLnN2/Zw.svg"
                    alt="not found"
                  ></img>
                  <h5>Talwind CSS</h5>
                </div>
                <div className="item col-4">
                  <img
                    className="w-25"
                    src="https://imgs.search.brave.com/yMEQni3gd8CAh_ynfIyiEbcskpYxs9aDoGnhs0gB1KI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy8zMDM2NzAv/ZmlyZWJhc2UtMS1s/b2dvLnN2Zw.svg"
                    alt="not found"
                  ></img>
                  <h5>Firebase</h5>
                </div>
                <div className="item col-4">
                  <img
                    className="w-25"
                    src="https://imgs.search.brave.com/rBCT6r7VlA1VcMdtXAMD639eEWZShcFaEs1jdjDQ8MM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FlL0dpdGh1Yi1k/ZXNrdG9wLWxvZ28t/c3ltYm9sLnN2Zw.svg"
                    alt="not found"
                  ></img>
                  <h5>Git</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
