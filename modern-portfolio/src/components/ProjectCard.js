import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, linkurl , linktext }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx d-flex">
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={linkurl} target="_blank" rel="noreferrer">{ linktext}</a>
        </div>
      </div>
    </Col>
  )
}
