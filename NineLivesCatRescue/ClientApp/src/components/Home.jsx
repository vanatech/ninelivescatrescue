import React, { Component } from 'react';
import CatCard from './CatCard.jsx';
import heroImg from '../images/9LivesHeroImg.png';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
          <div className="flex flex-column flex-md-row h-full">
              <div className="flex flex-1 items-center justify-center z-10">
                  <div className="p-40">
                      <h3 className="text-4xl">Be a Hero to Furry Friends: Support Our Cat Rescue Mission!</h3>
                      <p className="text-xl mt-6">
                          Change a cat's life today by opening your heart and home to a furry friend waiting for a family.
                      </p>
                      <button className="btn btn-primary mt-6" href="available-cats">Browse Cats</button>
                  </div>
              </div>
              <div className="overflow-hidden flex-1">
                  <img className="w-50" src={heroImg} alt="" />
              </div>
          </div>
        <div className="flex flex-col justify-center items-center m-4">
            <h2 className="text-2xl mb-2">Featured Cats:</h2>
            <CatCard />             
        </div>
      </>
    );
  }
}
