import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
// import {render} from '@testing-library/react';

function App() {
  return (
    <div id="container">
    <Header/>
    {/* this is content area */}
    <Content/>
    {/* footer content */}
    <Footer/>
  </div>
)
};








// //Định nghĩa component cách số 1: Dùng hàm đơn giản 
// function One() {
//   return <div>Chào bạn</div>;
// }

// function Two(){
//   return <div>Hello</div>;
// }

// // Định nghĩa component cách số 2: kg khai báo tên hàm
// var Three = function(){
//   return <div>Tên tôi là PNV26</div>
// }

// // Định nghĩa component cách số 3: kg khai báo trên arrow function
// var Four = () => (
//   <div>
//     <i>Tôi là sinh viên PNV26</i>
//   </div>
// );

// // Định nghĩa component: cách số 3
// class Five extends Component{
//   render(){
//     return(
//       <div>
//         <button>Đây là ví dụ class</button>
//       </div>
//     )
//   }
// }


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <One></One>
    //     <h1><One /></h1>
    //     <h2><Two></Two></h2>
    //     <Three />
    //     <Four />
    //     <Five/>
    //     <p>
    //       Hello PNV26
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


export default App;
