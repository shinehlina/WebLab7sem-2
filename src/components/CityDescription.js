import React from "react";
import { Col } from "react-materialize";
import Table from "react-materialize/lib/Table";

class CityDescription extends React.Component {
  render() {
    return (
      <Col m={6} s={12}>
        <Table className="grey" m={6} s={12}>
          <tbody>
            <tr>
              <td>Coordinates</td>
              <td className="right-align">
                [{this.props.longtitude} : {this.props.latitude}]
              </td>
            </tr>
            <tr>
              <td>Weather description</td>
              <td className="right-align">{this.props.description}</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td className="right-align">{this.props.temperature}K</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td className="right-align">{this.props.humidity}%</td>
            </tr>
            <tr>
              <td>Wind</td>
              <td className="right-align">{this.props.windSpeed}m/c</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td className="right-align">{this.props.pressure}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    );
  }
}

export default CityDescription;
