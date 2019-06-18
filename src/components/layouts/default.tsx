import React, { Component } from "react";
import Footer from "../footer";
import Header from "../header";
import "./default.less";

export default abstract class DefaultLayout<P = any, S = any> extends Component<
  P,
  S
> {
  render() {
    return (
      <div className="layout-default">
        <Header />
        <div id="main-wrapper">
          <div className={`content`}>{this.renderContent()}</div>
          <div className="side">{this.renderSide()}</div>
        </div>
        <Footer />
      </div>
    );
  }
  abstract renderContent(): JSX.Element;
  abstract renderSide(): JSX.Element;
}
