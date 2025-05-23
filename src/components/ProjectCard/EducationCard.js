// EducationCard.jsx (sem mudanças, o espaçamento é tratado no componente pai)
import React from "react";
import Card from "react-bootstrap/Card";

function EducationCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.institution}</Card.Title>
        <Card.Text>
          <p>
            <strong>Nível:</strong> {props.level}
            <br />
            <strong>Período:</strong> {props.startDate} - {props.endDate}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;