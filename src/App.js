import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './components/panels/AppBar';
// https://medium.com/@taweesoft/chapter-1-create-react-app-and-setup-firebase-real-time-todo-list-with-firebase-react-js-f03a904097c7
// cant get firebase too work
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <MenuAppBar/>
        <footer color="black" height="20">
          <img src={logo} className="App-logo" alt="logo"/>
        </footer>
      </div>
    );
  }
}

export default App;
