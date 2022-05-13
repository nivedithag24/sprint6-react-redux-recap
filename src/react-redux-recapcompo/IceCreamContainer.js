import React from 'react'
import { connect } from 'react-redux'
import  buyIceCream  from '../redux/icecream/iceCreamAction'

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecreams - {props.numOfIcecreams} </h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
return{
  numOfIcecreams : state.icecream.numOfIcecreams
}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    buyIceCream:()=>dispatch(buyIceCream())
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(IceCreamContainer)
