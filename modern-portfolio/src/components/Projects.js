import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { CompanyCard } from "./CompanyCard";
import { EducationCard } from "./EducationCard";
import { useState } from "react";

export const Projects = () => {
  const experiences = [
    {
      title: "Agami Technology",
      description: "Software Engineer Intern (March 2024 - Present)",
      imgUrl:
        "https://media.licdn.com/dms/image/D560BAQHX86WefgVdmA/company-logo_200_200/0/1705379804150/agami_technologies_logo?e=2147483647&v=beta&t=CqhxXl2HUlfNXZQauas2n4NgsAagX-SJCuLsUapnTT8",
    },
    {
      title: "Radical X",
      description: "Software Engineer Intern (Dec 2023 - March 2024)",
      imgUrl: "https://i.ytimg.com/vi/-lYOAzvgBf8/maxresdefault.jpg",
    },
  ];

  const educations = [
    {
      title: "MCA",
      description: "NIT Allahabad (2021-2024)",
      imgUrl:
        "https://imgs.search.brave.com/gwJu_i5msZstfiSxw_3-BpiBeyzVEgSW3uY16qD6Gi8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y29sbGVnZXByYXZl/c2guY29tLzIwMTUv/MDgvTU5OSVQtQWxs/YWhhYmFkLUxvZ28u/cG5n",
    },
    {
      title: "BCA",
      description: "A.N College , Patna (2018 - 2021)",
      imgUrl:
        "https://imgs.search.brave.com/mYyVTqgHyYjlkSY5qDVHhCMnteFXvDZfXcYGisX3kMo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yi9iMi9BTl9Db2xs/ZWdlX1BhdG5hLnN2/Zy81MTJweC1BTl9D/b2xsZWdlX1BhdG5h/LnN2Zy5wbmc",
    },
    
  ];

  const projects = [
    {
      title: "AlphazealMedial",
      description: "Devloved Officail Website",
      linkurl: "https://alphazealmedia.com/",
      linktext: "Deployed Link",
    },
    {
      title: "Blogify",
      description: "Encorage for Bloging",
      linkurl: "https://github.com/Aryashanish/Blogify-Reactjs",
      linktext: "Repo Link",
    },
    {
      title: "Easy Way",
      description: "Professional Expert Service Platform",
      linkurl: "https://mini-project-one-snowy.vercel.app/",
      linktext: "Deployed Link",
    },
    {
      title: "QuantumBotChat",
      description: "A Chatting Community Platform",
      linkurl: "https://github.com/Aryashanish/RedXQuantumBotChat",
      linktext: "Repo Link",
    },
    {
      title: "NS Technology",
      description: "We Provide Service to Devloped Diffrent Software",
      linkurl:
        "https://659cfef6c94edb7c0c2762c2--stirring-seahorse-6c3c6b.netlify.app/",
      linktext: "Contact US",
    },
    {
      title: "Swift Key",
      description: "A Web Application for Inproved Typing Speed",
      linkurl: "https://github.com/Aryashanish/Swiftkey",
      linktext: "Repo Link",
    },
  ];

  const [activeTab, setActiveTab] = useState('first');

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>{activeTab === 'first' ? 'Experience' : activeTab === 'second' ? 'Projects' : 'Education'}</h2>

                  <p>
                  Having a well-rounded background that encompasses both education and practical experience is crucial in today's competitive world. Throughout my academic journey, I have pursued a rigorous curriculum, constantly challenging myself to excel in my studies. This dedication has equipped me with a strong theoretical foundation in my field of study.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first" activeKey={activeTab} onSelect={handleTabSelect}>
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link role="button" eventKey="first" className="tabbtn">
                          Experience
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link role="button" eventKey="second" className="tabbtn">
                          Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link role="button" eventKey="third" className="tabbtn">
                          Education
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {experiences.map((data, index) => {
                            return <CompanyCard key={index} {...data} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((data, index) => {
                            return <ProjectCard key={index} {...data} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {educations.map((data, index) => {
                            return <EducationCard key={index} {...data} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
