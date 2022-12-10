import './App.css';
import { useState } from 'react';

//To start JSON server, **CD INTO SRC FOLDER FIRST** and use command "npx json-server --watch data.json --port 3000" 

//imports needed: react, react-router-dom, reactDOM, json-server

export function Submit() {
  
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [time, setTime] = useState("");
  const [isPending, setIsPending] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const request = { name, email, project, time};

    console.log(request);

    setIsPending(true);

      fetch("http://localhost:3000/request", {
        method: "POST",
        headers: { "Content-Type": "applicaton/json" },
        body: JSON.stringify(request)
      }).then(() => {
        console.log("New Request Submitted!");
      });
  };
  
    return (
        <div>
            <h1>Submit your request for our code monkeys: </h1>
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              value={project}
              placeholder="What project are you requesting?"
              onChange={(e) => setProject(e.target.value)}
            />
            <input
              type="text"
              value={time}
              placeholder="When do you need the project done?"
              onChange={(e) => setTime(e.target.value)}
            />
            <button type="Submit">Submit Request</button>
            { isPending && <div className="Message"><p>Your request has been received by the zookeeper and will be given to the monkeys soon</p></div> }
            </form>
            
        </div>
    ); 
}

export default Submit;