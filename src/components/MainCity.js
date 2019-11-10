import React from "react";

class MainCity extends React.Component {
  componentDidMount() {
    console.log("ss");
    this.props.getMainCity();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.isFetching ? (
          <p>Загрузка...</p>
        ) : (
          <p>{JSON.stringify(this.props.data)}</p>
        )}
      </div>
    );
  }
}

export default MainCity;
