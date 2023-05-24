import React from "react";
import { Table } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import "../commonStyles.css";

function TabulatedData({ title, data }) {
  return (
    <Container>
      <Container className="sub-section white-text">
        <h4>{title}</h4>
        <Table bordered variant="dark">
          <tbody>
            {data.map((reading, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{reading}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}

export { TabulatedData };
