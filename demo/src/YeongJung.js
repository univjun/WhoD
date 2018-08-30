import React, { Component } from 'react';

const age = 10;
export default class YeongJung extends React.Component {


    constructor(props){
        super(props);
        this._myAge.bind(this);
        this.state = {
            age,
            name: "sanmin",
        }
    }



    _myAge = (age) => {
        return age*2;
    };

    render(){
        return  (
            <div>
                <h2>
                    {this._myAge(this.props.age)}
                    {this.state.age}
                </h2>
            </div>
        )
    }
}
