import React, { Component } from 'react';
import { connect } from "react-redux";

class DropDown extends Component{
    render(){
        const makeDropDown = (data) => {
            
            console.log(this.data);
            return data.map(x => {
              return (
                <option key={x} value={x}>
                  {x}
                </option>
              );
            });
          };
          
        return(
        <div>
            <select onChange={this.props.callbackFn}>
            <option value="0" selected disabled hidden>
              select State
            </option>
            <option
              value={this.props.defaultOption && this.props.defaultOption}
            >
              {this.props.defaultOption}
            </option>
            {makeDropDown(this.props.data)}
            </select>
        </div>
        )
    }

}

const mapStateToProps = state => {
return{
    tripData : state.tripData
}
}

const mapDispatchToProps = dispatchEvent => {

}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);