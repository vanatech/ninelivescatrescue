import React, { Component } from 'react';
import { CatCard } from './CatCard.jsx';
import heroImg from '../images/9LivesHeroImg.png';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <div className="flex justify-center items-center">
          <img className="w-50" src={heroImg} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center m-4">
            <h2 className="text-2xl mb-2">Featured Cat:</h2>
            <CatCard />             
        </div>
      </>
    );
  }
}
