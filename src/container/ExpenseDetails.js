import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import Table from 'react-bootstrap/Button';
import { Button} from 'react-bootstrap';

class ExpenseDetails extends PureComponent{
    submitAddMore = () => {
        this.props.history.push('/expense'+ this.props.history.location.search);
    }
    render(){
        const trackedData = this.props.mockdbValue.map((val)=>{
            return (
                <tr>
                <td>{val["Date"]}</td>
                <td>{val["Category"]}</td>
                <td>{val["SubCategory"]}</td>
                <td>{val["Price"]}</td>
                </tr>
            )
            })
        return(
            <div>
            <Table striped bordered hover variant="dark">
            <thead>
            <tr>
            <th>DATE</th>
            <th>CATEGORY</th>
            <th>SUBCATEGORY</th>
            <th>PRICE</th>
            </tr>
            </thead>
            <tbody>
                {trackedData}
            </tbody>  
            </Table><br></br>
            <Button as="input" type="submit" onClick={this.submitAddMore} value="Add More Expense" />{' '} 
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
        priceValue: state.priceValue,
        mockdbValue: state.mockdbValue
    }
   }
   const mapDispatchToProps = dispatch => {
    return {
    }
   }
   export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDetails);
