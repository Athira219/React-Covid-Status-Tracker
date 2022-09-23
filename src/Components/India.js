import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Statedata from "./Statedata";
import Axios from  'axios';

class India extends Component {

  constructor(){
    super();
    this.state = {
      data :{}
    }
  }

  componentDidMount(){
    Axios.get("https://disease.sh/v3/covid-19/india").then(response=>{
      this.setState({data:response.data});
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img
            src="https://www.countryflags.com/product/india-flag-package"
            alt=""
          />
          <h3>INDIA</h3>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <Card className="badge bg-info" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>TOTAL CASES</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                  
                </Card.Body>
              </Card>
              </div>

              <div className="col-md-3">
              <Card className="badge bg-warning" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>ACTIVE CASES</Card.Title>
                  <h3>{this.state.data.active}</h3>
                  
                </Card.Body>
              </Card>
              </div>
              <div className="col-md-3">
              <Card className="badge bg-success" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>RECOVERD CASES</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                  
                </Card.Body>
              </Card>
              </div>

              <div className="col-md-3">
              <Card className="badge bg-danger" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>DEATH CASES </Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                  
                </Card.Body>
              </Card>
              </div>
            <div className="col-md-12">
                <Statedata />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default India;
