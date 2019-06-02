import React, { Component } from 'react';
import blank from '../../Assets/product-grey-7.jpg';
import spinner from '../../Assets/RewardingDisfiguredAnnelid-size_restricted.gif';
import storage from '../../firebase/firebase-config';
import axios from 'axios';

class AddProduct extends Component {

    state = {
        image: null,
        imageURL: blank,
        productName: '',
        productDescription: '',
        productPrice: '',
        productStatus: 'notOnSale',
        discount: '',
        paymentTypes: [],
        productCategory: 'Arts & Crafts'
    }

    // EVENT HANDLERS

    imageSelectHandler = (files) => {
        if(files[0]){
            this.setState({image: files[0]});
        }
    }

    imageUploadHandler = () => {
        storage.ref(`images/${this.state.image.name}`).put(this.state.image).on('state_changed',
        () => {
            this.setState({imageURL: spinner});
        },
        () => {
        },
        () => {
            storage.ref('images').child(this.state.image.name).getDownloadURL().then((url) => {
                this.setState({imageURL: url});
            });
        });    
    }

    textFieldHandler = (fieldName, fieldValue) => {
        this.setState({[fieldName]: fieldValue})
    }

    radioBtnHandler = (btnValue, isChecked) => {
        if (isChecked){
            this.setState({productStatus: btnValue});
        }
    }

    checkBoxHandler = (checkBoxValue, isChecked) => {
        if(isChecked && this.state.paymentTypes.indexOf(checkBoxValue) === -1){
            const newPaymentTypesArr = [...this.state.paymentTypes];
            newPaymentTypesArr.push(checkBoxValue);
            this.setState({paymentTypes: newPaymentTypesArr});
        } else if(!isChecked && this.state.paymentTypes.indexOf(checkBoxValue) !== -1){
            const index = this.state.paymentTypes.indexOf(checkBoxValue);
            const newPaymentTypesArr = [...this.state.paymentTypes];
            newPaymentTypesArr.splice(index,1);
            this.setState({paymentTypes: newPaymentTypesArr});
        } 
    }

    selectHandler = (value) => {
        this.setState({productCategory: value});
    }

    submitHandler = (event) => {
        let imageName = this.state.image.name;
        let stateToBeUploaded = {
            ...this.state,
            imageName: imageName
        };
        event.preventDefault();
        axios.post('https://react-26c41.firebaseio.com/products.json', stateToBeUploaded)
        .then((response) => {
            console.log(response);
            this.props.history.push('/')})
        .catch(error => console.log(error));
    }

    cancelHandler = (event) => {
        event.preventDefault();
        if (this.state.image != null){
            storage.ref('images').child(this.state.image.name).delete();
        }
        this.props.history.push('/')
    }

    // RENDER
    
    render() {
        return (
            <div className="add-product container">
                <form action="">
                    <div className="add-product__images slider">
                        <div className="add-product__image-actions">
                            <div className="add-product__image-action">
                                
                                {/* image */}
                                
                                <input type="file" 
                                onChange = {(event) => this.imageSelectHandler(event.target.files)}/>
                                <input name="upload" type="button" value="upload" 
                                onClick={this.imageUploadHandler}/>
                            </div>
                        </div>
                        <div className="slider__items">
                            <div className="slider__item active" style={{backgroundImage: `url(${this.state.imageURL})`,
                            backgroundSize: '100% 100%'}}></div>
                        </div>
                    </div>
                    <div className="add-product__data">
                        <div className="form-controls">
                            <section className="tabs">
                                <div className="tabs__headers">
                                    <div className="tabs__header active">
                                        English
                                </div>
                                </div>
                                <div className="tabs__bodies">
                                    <div className="tabs__body active">
                                        
                                        {/* NAME */}
                                        
                                        <div className="form-group">
                                            <label >Name</label>
                                            <input className="form-control" type="text" name="productName" 
                                                value={this.state.productName} 
                                                onChange={(event) => this.textFieldHandler(event.target.name, event.target.value)}/>
                                        </div>
                                        
                                        {/* DESCRIPTION */}

                                        <div className="form-group">
                                            <label >Description</label>
                                            <textarea className="form-control" name="productDescription" id="" cols="30" rows="4"
                                                onChange={(event) => this.textFieldHandler(event.target.name, event.target.value)}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="form-group">
                                
                                {/* PRICE */}
                                
                                <label >Price</label>
                                <input className="form-control" type="text" name="productPrice" id="" 
                                    onChange = {(event) => this.textFieldHandler(event.target.name, event.target.value)}/>
                            </div>
                            <div className="add-product__discount">
                                <div className="form-group">
                                    
                                    {/* STATUS */}

                                    <label >Satus</label>
                                    <div className="form-group__radios">
                                        <div className="form-group__radio"><input type="radio" name="status" value="onSale" 
                                            onChange = {(event) => this.radioBtnHandler(event.target.value, event.target.checked)}/><span>On Sale</span></div>
                                        <div className="form-group__radio"><input type="radio" name="status" value="notOnSale" 
                                            onChange = {(event) => this.radioBtnHandler(event.target.value, event.target.checked)}
                                            checked = {this.state.productStatus == 'notOnSale'? true : false}/><span>Not On Sale</span></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    
                                    {/* DISCOUNT */}
                                    
                                    <label >Discount</label>
                                    <input disabled = {(this.state.productStatus == 'notOnSale')? true : false} className="form-control" type="text" name="discount" id="" 
                                        onChange = {(event) => this.textFieldHandler(event.target.name, event.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                {/* PAYMENT TYPES */}
                                
                                <label >Payment Types</label>
                                <div className="form-group__checkboxs">
                                    <div className="form-group__checkbox"><input type="checkbox" name="" value="Direct Bank Transfer" 
                                        onChange = {(event) => this.checkBoxHandler(event.target.value, event.target.checked)}/><span>Direct Bank Transfer</span></div>
                                    <div className="form-group__checkbox"><input type="checkbox" name="" value="Cheque Payment" 
                                        onChange = {(event) => this.checkBoxHandler(event.target.value, event.target.checked)}/><span>Cheque Payment</span></div>
                                    <div className="form-group__checkbox"><input type="checkbox" name="" value="Paypal"
                                        onChange = {(event) => this.checkBoxHandler(event.target.value, event.target.checked)}/><span>Paypal</span></div>
                                    <div className="form-group__checkbox"><input type="checkbox" name="" value="Visa" 
                                        onChange = {(event) => this.checkBoxHandler(event.target.value, event.target.checked)}/><span>Visa</span></div>
                                    <div className="form-group__checkbox"><input type="checkbox" name="" value="Mastercard" 
                                        onChange = {(event) => this.checkBoxHandler(event.target.value, event.target.checked)}/><span>Mastercard</span></div>
                                    <div className="form-group__checkbox"><input type="checkbox" name="" value="On Delivery" 
                                        onChange = {(event) => this.checkBoxHandler(event.target.value, event.target.checked)}/><span>On Dilivery</span></div>
                                </div>
                            </div>
                            <div className="form-group">
                                
                                {/* CATEGORY */}
                                
                                <label >Category</label>
                                <select className="form-control"
                                    onChange = {(event) => this.selectHandler(event.target.value)}>
                                    <option value="Arts & Crafts">Arts & Crafts</option>
                                    <option value="Automotive">Automotive</option>
                                    <option value="Baby">Baby</option>
                                    <option value="Books">Books</option>
                                    <option value="Eletronics">Eletronics</option>
                                    <option value="Women's Fashion">Women's Fashion</option>
                                    <option value="Men's Fashion">Men's Fashion</option>
                                    <option value="Health & Household">Health & Household</option>
                                    <option value="Home & Kitchen">Home & Kitchen</option>
                                    <option value="Military Accessories">Military Accessories</option>
                                    <option value="Movies & Television">Movies & Television</option>
                                    <option value="Sports & Outdoors">Sports & Outdoors</option>
                                    <option value="Tools & Home Improvement">Tools & Home Improvement</option>
                                    <option value="Toys & Games">Toys & Games</option>
                                </select>
                            </div>
                            
                            {/* ACTIONS */}
                            
                            <div className="add-product__actions">
                                <button href="#" className="btn btn--gray"
                                    onClick = {(event) => this.cancelHandler(event)}>Cancel</button>
                                <button href="#" className="btn btn--primary"
                                    onClick = {(event) => this.submitHandler(event)}>Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProduct;