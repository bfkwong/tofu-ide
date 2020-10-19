import React from 'react';
import { Form, Button } from "react-bootstrap"
import * as tofu from "tofulang";
import './App.css';

function App() {
  const [output, setOutput] = React.useState([" "]);
  const [error, setError] = React.useState(false);

  return (
    <div className="App" style={{display: "flex"}}>
      <Form 
        style={{margin: "20px 30px 20px 30px", width: "50%"}} 
        onSubmit={(e) => {
          e.preventDefault();
          setOutput([]);
          setError(false);
          const code = e.currentTarget.codeinput.value;
          try {
            setOutput(tofu(code).split("\n"));
          } catch (err) {
            setOutput([err.message]);
            setError(true);
            console.log(err);
          }
        }}
      >
        <Form.Group>
          <Form.Control 
            as="textarea" 
            rows="35"
            style={{backgroundColor: "#e3f0f2", border: "0px solid black", fontFamily:"Anonymous Pro"}} 
            placeholder="Code away" 
            name="codeinput"
            id="codeinput"
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                e.preventDefault();

                const sstart = e.target.selectionStart; 
                const send = e.target.selectionStart; 

                e.target.value = e.target.value.slice(0, sstart) + "   " + e.target.value.slice(send); 

                e.target.selectionStart = sstart + 3;
                e.target.selectionEnd = sstart + 3;
                return false;
              }
            }}
            />
        </Form.Group>
        <Button type="submit">Execute</Button>
      </Form>
      <div style={{textAlign: "left", marginTop: "20px", marginRight: "30px", flexGrow: "1"}}>
          <h5>Output</h5>
          <div style={{fontFamily:"Anonymous Pro", marginTop: "10px", color: error ? 'red' : 'black'}}>{output.map((output, i) => <span key={i}>{output === undefined ? "undefined" : output}<br></br></span>)}</div>
      </div>
    </div>
  );
}

export default App;
