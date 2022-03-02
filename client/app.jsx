import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    /*this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);*/
  }

  /*componentDidMount() {

  }*/

  render() {
    return (
      <div>
        <div className="App">
          <p>PIANO911</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
