import React, { Component } from 'react';
import CatCard from './CatCard.jsx';
import heroImg from '../images/9LivesSimba.png';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
          <div className="flex flex-column flex-md-row h-[90vh]">
              <div className="flex flex-1 items-center z-10">
                  <div className="p-10">
                      <h3 className="text-4xl">Be a Hero to Furry Friends: Support Our Cat Rescue Mission!</h3>
                      <p className="text-xl mt-6">
                          Change a cat's life today by opening your heart and home to a furry friend waiting for a family.
                      </p>
                      <a className="btn btn-primary mt-6 text-white" href="available-cats">Browse Cats</a>
                  </div>
              </div>
              <div className="flex flex-1 justify-center items-center">
                  <img className="w-full" src={heroImg} alt="" />
              </div>
          </div>
        <div className="flex flex-col justify-center items-center m-10 h-[90vh]">
            <h2 className="text-2xl mb-2">Featured Cats:</h2>
            <CatCard />             
        </div>
      </>
    );
  }
}
