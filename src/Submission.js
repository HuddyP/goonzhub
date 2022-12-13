import './App.css';
import React from 'react';
import { Form, Input, Button } from 'antd';

//CURRENT ISSUE: 

//imports needed: react, react-router-dom, reactDOM, json-server, antd

//to make json entries show on page, cd into src and run this command: npx json-server --watch data.json --port 3000

const fs = require('fs');
const FormItem = Form.Item;

class Submit extends React.Component {

  constructor(prop){
    super(prop);
    this.state = {
      name: '',
      email: '',
      project: '',
      time: ''
    };
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  writeToFile = () => {
    console.log('writeToFile called');
    console.log('fs:', fs);
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      let jsonData = JSON.parse(data);

      jsonData.push(this.state);

      fs.writeFile('data.json', JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Data written to file');
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.writeToFile();
    this.setState({ message: 'Your request has been received by the zookeeper and will be given to the monkeys soon' });
  }
  
  render() {
    return (
        <div>
            <h1>Submit your request for our code monkeys: </h1>
            <Form>
            <FormItem>
              <Input
              name="name"
              value={this.state.name}
              placeholder="Full Name"
              onChange={this.handleChange}
            />
            </FormItem>
            <FormItem>
            <Input
              name="email"
              value={this.state.email}
              placeholder="Email Address"
              onChange={this.handleChange}
            />
            </FormItem>
            <FormItem>
            <Input
              name="project"
              value={this.state.project}
              placeholder="What project are you requesting?"
              onChange={this.handleChange}
            />
            </FormItem>
            <FormItem>
            <Input
              name="time"
              value={this.state.time}
              placeholder="When do you need the project done?"
              onChange={this.handleChange}
            />
            </FormItem>
            <Button type={this.props.type} onClick={this.handleSubmit}>Submit Request</Button>
            </Form>
            
        </div>
    ); 
  }
}

export default Submit;