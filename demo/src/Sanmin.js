import React, {Component} from 'react';
import YeongJung from './YeongJung';

export default class Sanmin extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            univjun: "junhyung",
        }
    }

    componentDidMount() {

        this.setState({
            univjun: "YeongJung",
        })
    }

    render() {

        return (
            <div>
                <h1>{this.state.univjun}</h1>
                <YeongJung age={15}/>
            </div>
        );

    }
}
