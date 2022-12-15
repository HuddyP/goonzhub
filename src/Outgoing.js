import './App.css';
import { useEffect, useState } from 'react';

const RequestList = ({ request, name, email, project, time}) => {
    return (
        <div>
            <h2>{ name }</h2>
            {request.map((request) => (
                <div>
                    <h2>{request.name}</h2>
                    <h3>{request.project}</h3>
                    <p>{request.email}</p>
                    <p>Timeline: {request.time}</p>
                </div>
            ))}
        </div>
    );
}

export function Outgoing() {
    const [request, setRequest] = useState(null); 

    useEffect(() => {
        fetch('http://localhost:3000/request')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setRequest(data);
            });
    }, []);
  
    return (
      <div className="outgoing">
         {request && <RequestList request={request} />} 
      </div>
    )
  
  }

export default Outgoing;