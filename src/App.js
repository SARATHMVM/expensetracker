import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DropDown from "./container/DropDown";
import {connect} from 'react-redux';
import { Button} from 'react-bootstrap';
import styles from "./App.scss"
import Router from '../src/router/Router';
import {withRouter} from 'react-router-dom';

class App extends Component{

  handleChange = date => {
     this.props.setDate(date);
  };
  handleCategory = (event) => {
    let selectedCategory = event.target.value;
    this.props.updateCategory(selectedCategory);
  };
  handleSubCategory = (event) => {
    let selectedSubCategory = event.target.value;
    this.props.updateSubCategory(selectedSubCategory);
  };
  handlePrice = (event) =>{
    let price = event.target.validity.valid ? event.target.value : this.props.handlePrice; 
    this.props.updatePrice(price);
  };
  trackerHandler = () => {
    this.props.history.push('/myexpensedetails'+ this.props.history.location.search);
  }

  submitHandler = () => {
  let data = {};
  data.Date = this.props.startDate.toDateString()
  data.Category = this.props.selectCategory
  data.SubCategory = this.props.selectSubCategory
  data.Price = this.props.priceValue  
    this.props.updateDB(data)
  }

  render(){
    const Data = Object.values(this.props.tripData).map(val=>{
      return val.name;
      })
   const subData = Object.values(this.props.tripData).map(val=>{
      
      if(this.props.selectCategory && this.props.selectCategory != "select Category" && val.name === this.props.selectCategory){
        let values = val.value
        return values;
        }
        else{
          return null;
        }
      })
      
    const subDataValue = subData.filter(function (el) {
      return el != null;
    });
      return(
      <div className="Container">
        <DatePicker
        selected={this.props.startDate}
        onChange={this.handleChange}
      />
        <DropDown
          data={Data}
          defaultOption="select Category"
          callbackFn={this.handleCategory.bind(this)}
        />
        { this.props.selectCategory && this.props.selectCategory != "select Category" ?
        <DropDown
          data={subDataValue[0]}
          defaultOption="select SubCategory"
          callbackFn={this.handleSubCategory}
        /> : null }
        <input type="text" pattern="[0-9]*"
        onInput={this.handlePrice.bind(this)} value={this.props.priceValue} /><br/>
        <Button as="input" type="submit" onClick={this.submitHandler} value="Submit" /><br/>
        <Button as="input" type="submit" onClick={this.trackerHandler} value="Track my Expense" /><br/>
        Your expense details are : {this.props.selectCategory}&nbsp; {this.props.selectSubCategory}&nbsp; {this.props.priceValue}
      </div>
    )
  }

}

const mapStateToProps =(state) => {
  return {
      startDate: state.startDate,
      tripData: state.tripData,
      selectCategory: state.selectCategory,
      selectSubCategory: state.selectSubCategory,
      priceValue: state.priceValue
  }
 }
 const mapDispatchToProps = dispatch => {
  return {
      setDate: (date) => dispatch({type:'SETDATE', value: date}),
      updateCategory: (selectedCategory) => dispatch({type:'UPDATECATEGORY', value: selectedCategory}),
      updateSubCategory: (selectedSubCategory) => dispatch({type:'UPDATESUBCATEGORY', value: selectedSubCategory}),
      updatePrice: (price) => dispatch({type:"UPDATEPRICE", value: price}),
      updateDB: (data) => dispatch({type:"UPDATEDB", value: data})
  }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(App);
