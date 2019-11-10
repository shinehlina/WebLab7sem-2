// import React from "react";

// class MainCity extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         latitude: null,
//         longitude: null,
//         positionIsSet: false
//     }
//   }
//   componentDidMount() {
//     console.log("ss");
//     this.requestAndUpdateLocation();
//   }

//   requestAndUpdateLocation() {
//     navigator.geolocation.getCurrentPosition(
//         position =>
//           this.setState({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude
//           }),
//         e => this.setState({ latitude: 60.03008279, longitude: 30.331874 })
//       );
//   }

//   render() {
//     return <h1>{this.props.mainCity}</h1>;
//   }
// }

// export default MainCity;
