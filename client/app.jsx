import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*componentDidMount() {

  }*/

  handleLogin(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log('event', name, value);
    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/login',
      data: this.state
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="logo-container">
            <h1 className="logo-text">PIANO911</h1>
            <img className="logo" src="music.jpeg" alt="Logo"></img>
          </div>
          <div className="login-container">
            <form>
              <label className="labels" htmlFor="username">Username:</label>
              <input type="text" className="entries" id="login-username" name="username" value={this.state.username} onChange={this.handleLogin} />
              <label className="labels" htmlFor="password">Password:</label>
              <input type="password" className="entries" id="login-password" name="password" value={this.state.password} onChange={this.handleLogin} />
              <input type="submit" className="buttons" id="login-submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
