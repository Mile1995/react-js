import React, {Component} from 'react';
import './App.css';
import Header2 from './components/Header'
import Content from './components/Content'
import Demo1 from './Demo1'

class App extends Component {
  render() {
    return (
      <div>
        <Header2/>

        <Content
            name = "The Famous Five"
            price = "1.000.000"
            status = "true"
            unit = "VND"
            image = "https://images-na.ssl-images-amazon.com/images/I/61wfPboRsdL._SX324_BO1,204,203,200_.jpg"
        />
        <Content/>
        <Content/>
        <Content/>
        <Content/>

        DucN
        <Demo1/>
      </div>
    );
  }
}

export default App;
