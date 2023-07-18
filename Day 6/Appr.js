// Appr.js
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './Redux/actions';
import styled from '@emotion/styled';

const Appr = ({ counter, incrementCounter, decrementCounter }) => {
  return (
    <div>
      <h2 style={{marginLeft:'350px',marginTop:'30px',fontSize:'30px',color:'gold',border:'2px solid gold',maxWidth:'200px',borderRadius:'40px'}}> Points : {counter}</h2>
      <button onClick={incrementCounter} style={{marginTop:'30px',marginLeft:'400px',minWidth:'40px',backgroundColor:'lightblue'}}>+</button>
      <button onClick={decrementCounter} style={{marginLeft:'20px',minWidth:'40px',backgroundColor:'lightblue'}}>-</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Appr);

