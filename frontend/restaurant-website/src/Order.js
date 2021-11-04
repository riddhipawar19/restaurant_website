import React from 'react'

function Order(props) {

    return (
        <div>
        <h1>in order</h1>
        {console.log(props.itemIds)}
        {props.itemIds.map(item =>{
            return item
        })}
        </div>
    )
}

export default Order
