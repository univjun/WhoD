import React, { Component } from 'react';
import {Pager} from "react-bootstrap";
import { StickyContainer, Sticky } from 'react-sticky';

import ReactPageScroller from "../../src/index";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";

import "./index.css";

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    getPagesNumbers = () => {

        const pageNumbers = [];

        for (let i = 1; i <= 5; i++) {
            pageNumbers.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
            )
        }

        return [...pageNumbers];
    };

    render() {
        const title = 'hello';
        const pagesNumbers = this.getPagesNumbers();
        return (
            <React.Fragment>
                <StickyContainer>
                    <h1>{title}</h1>
                    <h1>{hi}</h1>
                    <Sticky>
                        {({
                              style,
                              // the following are also available but unused in this example
                              isSticky,
                              wasSticky,
                              distanceFromTop,
                              distanceFromBottom,
                              calculatedHeight
                          }) => (
                            <header
                                style={styles}>
                                {<h1>second title</h1>}
                            </header>
                        )}
                    </Sticky>
                </StickyContainer>
                <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                    <FirstComponent/>
                    <SecondComponent/>
                    <ThirdComponent/>
                    <FourthComponent goToPage={this.goToPage}/>
                    <FifthComponent/>
                </ReactPageScroller>
                <Pager className="pagination-additional-class" bsSize="large">
                    {pagesNumbers}
                </Pager>
            </React.Fragment>
        );
    }
}

const styles = {
    size: 15,
    marginLeft:20,
};