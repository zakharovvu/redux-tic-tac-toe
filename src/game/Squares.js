import React from "react"
import { connect } from "react-redux"

const Squares = (props) => {
      return (
          <div>
          <span>Step number: {props.state.count} -> {props.state.count % 2 ? 'O' : 'X'}</span>
          {props.state.win ? <div className="win">wins {props.state.count % 2 ? 'X' : 'O'}</div> : ''}
          <div className="Game">
            {props.state.square.map((el, i) => {
               return (
                el === null && props.state.win === false
                    ? <div onClick={() => props.setXorO(i)} className="Square" key={i}>{el}</div>
                    : <div className="Square" key={i}>{el}</div>
                    )}
            )}
            
            <button onClick={() => props.reset()}>reset</button>
          </div>
          </div>
      )
}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
       setXorO: (index) => {
           dispatch({type: 'TORN', index})
       },
       reset: () => {
        dispatch({type: 'RESET'})
       }
    })
)(Squares)

