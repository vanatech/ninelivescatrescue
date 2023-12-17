import React, { Component } from 'react';
import heroImg from '../images/9LivesHeroImg.png';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="flex justify-center items-center">
          <img className="w-50" src={heroImg} alt="" />
      </div>
    );
  }
}
