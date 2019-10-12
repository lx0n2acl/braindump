import React from "react";
import { Row, Col } from "antd";
import "./App.css";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import IntentionFilter from "./components/IntentionFilter";

function App() {
  return (
    <div>
      <Row>
        <Col span={6}>
          <IntentionFilter></IntentionFilter>
        </Col>
        <Col span={8}>
          <Row>
            <AddNote></AddNote>
          </Row>
          <Row>
            <NoteList></NoteList>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
