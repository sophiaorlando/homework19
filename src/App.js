import React, { Component } from "react";
import './App.css';
import NavBar from './components/NavBar'
import EmployeeCard from './components/EmployeeCard'
import employees from "./employee.json";




class App extends Component {

  state = {
    employees,
    newEmployees: employees
  }

  searchEmployee = event => {
    const name = event.target.value
    console.log(event, "hello")


    const newEmployees = this.state.employees.filter(employee => employee.name.toLocaleLowerCase() === name.toLocaleLowerCase())

    this.setState({ newEmployees: newEmployees })
    console.log(event, "hello")

    console.log(name)

  }


  render(){
    return (
      <div className="App">
        <NavBar 
        searchEmployee={this.searchEmployee}
        
        />
        {/* <Title>Employee Directory</Title> */}
        {this.state.newEmployees.map(employee => (
        <EmployeeCard
        id={employee.id}
        name={employee.name}
        image={employee.image}
        occupation={employee.occupation}
        location={employee.location}
        />
        ))}

  
      </div>
    );
  }

}

export default App;
