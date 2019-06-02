import React from 'react';
import '../../style.css';

const filter = (props) => {
    return(
        <div className="item-listing__tools">
            <select className="form-control" name="" id="">
                <option value="1">Featured</option>
                <option value="2">Price low to high</option>
                <option value="3">Price high to low</option>
                <option value="4">Name</option>
            </select>
            <a className="action-btn" href="#">
                <i className="fas fa-plus"></i>
            </a>
        </div>
    );
}

export default filter;