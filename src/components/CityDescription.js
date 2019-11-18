import React from "react";
import Table from "react-materialize/lib/Table";

class CityDescription extends React.Component {
  render() {
    return (
      <Table className=" grey lighten-1">
        <tbody>
          <tr style={{ borderColor: "white" }}>
            <td>Coordinates</td>
            <td className="right-align">
              [{this.props.longtitude} : {this.props.latitude}]
            </td>
          </tr>
          <tr style={{ borderColor: "white" }}>
            <td>Weather description</td>
            <td className="right-align">{this.props.description}</td>
          </tr>
          <tr style={{ borderColor: "white" }}>
            <td>Temperature</td>
            <td className="right-align">{this.props.temperature}K</td>
          </tr>
          <tr style={{ borderColor: "white" }}>
            <td>Humidity</td>
            <td className="right-align">{this.props.humidity}%</td>
          </tr>
          <tr style={{ borderColor: "white" }}>
            <td>Wind</td>
            <td className="right-align">{this.props.windSpeed}m/c</td>
          </tr>
          <tr style={{ borderColor: "white" }}>
            <td>Pressure</td>
            <td className="right-align">{this.props.pressure}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default CityDescription;
