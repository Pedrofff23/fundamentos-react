import "./Counting.css";
import { Component } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import PassForm from "./PassForm";

// Generated with cpc
class Counting extends Component {
  /** ANOTHER EXAMPLE  */
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       number: props.initialNumber,
  //     };
  //   }
  state = {
    number: this.props.initialNumber || 0,
    pass: this.props.initialPass || 1,
  };

  inc = () => {
    this.setState({
      number: this.state.number + this.state.pass,
    });
  };
  dec = () => {
    this.setState({
      number: this.state.number - this.state.pass,
    });
  };
  setPass = (newPass) => {
    this.setState({
      pass: newPass,
    });
  };

  render() {
    return (
      <div className="Counting">
        <h2>Counting</h2>
        <Display number={this.state.number}></Display>
        <PassForm pass={this.state.pass} setPass={this.setPass}></PassForm>
        <Buttons setInc={this.inc} setDec={this.dec}></Buttons>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className='Counting'>
  //       <h2>Counting</h2>
  //       <p>{this.state.number}</p>
  //       <div>
  //         <label htmlFor="passInput">Pass: </label>
  //         <input
  //           id="passInput"
  //           type="number"
  //           value={this.state.pass}
  //           onChange={this.setPass}
  //         />
  //       </div>
  //       <button onClick={this.inc}>+</button>
  //       <button onClick={this.dec}>-</button>
  //     </div>
  //   );
  // }
}

export default Counting;
