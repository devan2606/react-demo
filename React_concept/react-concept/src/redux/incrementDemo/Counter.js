import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { decrement, increment, mult } from './index'
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount
// } from './counterSlice'


function Counter({ value, value1, increment, decrement, mult }) {

  const [incrementAmount, setIncrementAmount] = useState(value)
  const [incrementAmount1, setIncrementAmount1] = useState(value1)

  // const [apidata, setApidata] = useState()

  useEffect(() => {
    setIncrementAmount(value)
  }, [value])

  useEffect(() => {
    setIncrementAmount1(value1)
  }, [value1])

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
        <div>{incrementAmount}</div>
        <div>{incrementAmount1}</div>
        <button
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
        <button
          aria-label="Multiply value"
          onClick={() => mult()}
        >
          *
        </button>

      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    value: state.counter.value,
    value1: state.counter1.value
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: (data) => dispatch(decrement(data)),
    mult: (data) => dispatch(mult(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)