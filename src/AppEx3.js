import React, {Component} from 'react';
import './App.css';
import Header2 from './components/Header';
import Content from './components/Content';
import Products from './data.json';

class App2 extends Component {
  render() {

    let books = [
      {
        id: 1,
        name: "The Famous Five",
        price : 1000000,
        status : true,
        unit : "VND",
        qty : 3,
        image : "https://images-na.ssl-images-amazon.com/images/I/61wfPboRsdL._SX324_BO1,204,203,200_.jpg"
      },
      {
        id : 2,
        name : "Like Brothers",
        price : 2000000,
        status : false,
        unit : "VND",
        image : "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1541610951-51aP744o4LL.jpg"
      },
      {
        id : 3,
        name : "Harry Poster",
        price : 3000000,
        status : false,
        unit : "VND",
        qty : 0,
        image : "https://images-na.ssl-images-amazon.com/images/I/51E7NvVLO9L._SX346_BO1,204,203,200_.jpg"
      },
      {
        id : 4,
        name : "Dead Famousr",
        price : 3000000,
        status : false,
        unit : "VND",
        qty : 3,
        image : "https://upload.wikimedia.org/wikipedia/en/3/3c/Deadfamous.jpg"
      },
      {
        id : 5,
        name : "Little Woman",
        price : 3000000,
        status : false,
        unit : "VND",
        qty : 3,
        image : "https://blog.booko.com.au/wp-content/uploads/2016/08/https-covers.booko_.info300littlewomen.jpg"
      },
      {
        id : 6,
        name : "Nancy Drew",
        price : 3000000,
        status : false,
        unit : "VND",
        qty : 3,
        image : "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481485494/famous-mistakes-9781481485494_lg.jpg"
      },
    ];
    return (
      <div className="wrap">
        <Header2/>
        <Content books = {books}>
        ABC  
        </Content>/>
        </div> 
    );
  }
}

export default App2;
