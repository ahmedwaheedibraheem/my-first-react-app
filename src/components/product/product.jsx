import React from 'react';
import '../../../src/style.css';

const product = (props) => {

    return (
        <div className="item-medium-1">
            {props.productStatus == 'onSale'? <div className="item-medium-1__alert">Sale</div> : null}
            <div className="item-medium-1__image image" style={{backgroundImage: `url(${props.imageURL})`}}>
                <a href="#" className="item-medium-1__action">Add to Cart</a>
            </div>
            <a href="#">
                <h4>{props.productName}</h4>
                <div>
                    {props.productStatus == 'onSale'? <del>{props.productPrice}</del> : null}
                    <span className="lable">{+props.productPrice - +props.discount}</span>
                </div>
            </a>
            <div className="crud-actions">
                <a 
                    onClick = {() => props.view(props.id)}
                    ><i className="far fa-eye"></i></a>
                <a 
                    onClick = {() => props.delete(props.id, props.imageName)}
                    ><i className="fas fa-trash-alt"></i></a>
            </div>
        </div>
    );

}

export default product;