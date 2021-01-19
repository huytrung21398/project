import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
// hàm bình thường
// function One(){
//   return <div>Cach so 1</div>
// }
//annonymous function
// var Two = function(){
//   return(
//     <div>
//     <h1>Cach so 2</h1>
//     </div>
//   );
// }
//arrow function (es6)
// var Three =() =>
//   (
//     <div>
//     <h1>Cach so 3</h1>
//     </div>
//   );
//   //Class
// class Four extends Component{
//   render(){
//     return(
//       <div className="Four">
//       <button>Cach so 4</button>
//       </div>
//     );
//   }
// }
//Sử dụng props cách 1 bằng function

function NumberOne(props){
  return(

      <div className="col-6">
        <div className="card">
          <img className="card-img-top" src={props.linkanh} alt=""/>
          <div className="card-body">
          <h4 className="card-title">{props.tieude}</h4>
          <p className="card-text">{props.text}</p>
          </div>

  </div>
    </div>
  )
}
// Sử dụng props cách 2 bằng class
class NumberTwo extends Component{
  render(){
    return(
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src={this.props.linkanh} alt=""/>
          <div className="card-body">
          <h4 className="card-title">{this.props.tieude}</h4>
          <p className="card-text">{this.props.text}</p>
          </div>
          </div>
          </div>
    );
  }
}
// Ví dụ về hàm map
const so = [1,2,3,4,5,6];
const so2 = so.map((x)=> x*2);

class NumberThree extends Component{
  render(){
    return(
      <div>
      {so2}
      </div>
    )
  }
}

class  App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NumberThree/>
        </header>

      <div className="container">
      <div className="row">
        <NumberOne tieude="Cocacola" text="cocacola nhập khẩu từ nhật" linkanh="https://kidsplaza-1.cdn.vccloud.vn/media/wysiwyg/product/be-an-be-uong/nuoc-ngot-co-ga-cocacola-nhat-300ml-1.JPG"/>
        <NumberOne tieude="Pepsi" text="pepsi apple pie" linkanh="https://www.gannett-cdn.com/presto/2020/11/17/USAT/f771651c-39db-4fdd-9eee-5a082fc51b2e-Pepsi_Apple_Pie_KV.jpg"/>
        <NumberTwo tieude="Sting" linkanh="https://iwater.vn/Image/Picture/Nuoc_ngot/sting%20chai%20330ml.png"/>

      </div>
      </div>
      </div>


  );
}
}
export default App;
