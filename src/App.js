import React from 'react';
import { Form, Button } from "react-bootstrap"
import * as tofu from "tofulang";
import './App.css';

function App() {
  const [output, setOutput] = React.useState([]);

  return (
    <div className="App">
      <Form 
        style={{margin: "20px 30px 20px 30px"}} 
        onSubmit={(e) => {
          e.preventDefault();
          const code = e.currentTarget.codeinput.value;
          setOutput(tofu(code).split("\n"));
        }}
      >
        <Form.Group>
          <Form.Control 
            as="textarea" 
            rows="25" 
            style={{backgroundColor: "#e3f0f2", border: "0px solid black", fontFamily:"Anonymous Pro"}} 
            placeholder="Code away" 
            name="codeinput"
            id="codeinput"/>
        </Form.Group>
        <Button type="submit">Execute</Button>
        <div style={{textAlign: "left", marginTop: "20px"}}>
          <h5>Output</h5>
          <div style={{fontFamily:"Anonymous Pro", marginTop: "10px"}}>{output.map((output) => <span>{output}<br></br></span>)}</div>
        </div>
      </Form>
    </div>
  );
}

export default App;
