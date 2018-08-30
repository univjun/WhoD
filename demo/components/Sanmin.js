import React, { Component } from 'react';

export default class Sanmin extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            univjun: "junhyung",
        }
    }

    render(){


        this.setState({
            univjun:"yeongjung",
        });


        return (
            <div>
                <h1>{this.state.univjun}</h1>
            </div>
        );


    }
}
