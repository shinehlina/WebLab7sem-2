import React from "react";
import Table from "react-materialize/lib/Table";

class CityDescription extends React.Component {
  createTableRow(name, value) {
    return (
      <tr style={{ borderColor: "white" }}>
        <td>{name}</td>
        <td className="right-align">{value}</td>
      </tr>
    );
  }

  render() {
    return (
      <Table className=" grey lighten-1">
        <tbody>
          {this.createTableRow(
            "Coordinates",
            `[${this.props.longtitude} : ${this.props.latitude}]`
          )}
          {this.createTableRow(
            "Weather description",
            `${this.props.description}`
          )}
          {this.createTableRow("Temperature", `${this.props.temperature}K`)}
          {this.createTableRow("Humidity", `${this.props.humidity}%`)}
          {this.createTableRow("Wind", `${this.props.windSpeed}m/c`)}
          {this.createTableRow("Pressure", `${this.props.pressure}`)}
        </tbody>
      </Table>
    );
  }
}

export default CityDescription;
