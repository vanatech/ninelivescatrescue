import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { FooterWithSocialLinks as Footer } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <>
        <NavMenu />
          <div className="flex justify-center" tag="main">
              <div className="container">
              {this.props.children}
              </div>
          </div>
          <Footer />
      </>
    );
  }
}
