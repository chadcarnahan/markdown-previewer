import React from "react";

import { Container, Row, Col, textarea } from "react-bootstrap";
import { useState } from "react";
import marked from "marked";
import { defaultText } from "./text.js";

const App = () => {
  const [text, setText] = useState(defaultText);
  const [hidden, setHidden] = useState(false);
  console.log(defaultText);
  const show = (id, idToHide) => {
    if (!hidden) {
      id === "editor"
        ? (document.getElementById(id).style.height = "600px")
        : (document.getElementById(id).style.height = "auto");
      document.getElementById(idToHide).style.display = "none";
      setHidden(true);
    } else {
      id === "editor"
        ? (document.getElementById(id).style.height = "200px")
        : (document.getElementById(id).style.height = "auto");
      document.getElementById(idToHide).style.display = "block";
      setHidden(false);
    }
  };

  return (
    <Container
      fluid
      id="markdown"
      style={{ =width: "70%", margin: "auto", maxWidth: "700px" }}
    >
      <Row id="firstBox" style={{ marginTop: "20px" }}>
        <Col id="header">
          Editor
          <i
            onClick={() => show("editor", "whole")}
            class="bi bi-arrows-angle-expand"
          ></i>
        </Col>
        <textarea onChange={(e) => setText(e.target.value)} id="editor">
          {defaultText}
        </textarea>
      </Row>
      <Row id="whole" style={{ marginTop: "40px" }}>
        <Col id="header2" style={{ width: "730px", height: "30px" }}>
          Previewer
          <i
            onClick={() => show("preview", "firstBox")}
            class="bi bi-arrows-angle-expand"
          ></i>
        </Col>
        <Col
          id="preview"
          style={{
            width: "700px",
            height: "auto",
            padding: "20px",
            paddingTop: "5px",
          }}
          dangerouslySetInnerHTML={{
            __html: marked(text, { sanitize: false }),
          }}
        ></Col>
      </Row>
    </Container>
  );
};

export default App;
