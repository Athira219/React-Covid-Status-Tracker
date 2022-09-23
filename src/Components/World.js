import React, { Component } from "react";
import Axios from 'axios';

class World extends Component{
    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        Axios.get("https://disease.sh/v3/covid-19/countries").then(
            (response) => {
              console.log(response.data);
        this.setState({ data: response.data });
            });
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-primary table-bodered table-stripted">
                        <thead>
                            <td>Country</td>
                            <td>Total Cases</td>
                            <td>Recovered</td>
                            <td>Death</td>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((itm,ky)=>{
                                    return(
                                        <tr>
                                            <td>{itm.country}
                                            <img style={{width:'64px' , marginLeft:'10px'}} src={itm.countryInfo.flag}  />
                                            </td>
                                            <td>{itm.cases}</td>
                                            <td>{itm.recovered}</td>
                                        
                                            <td>{itm.deaths}</td>
                                            </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default World;