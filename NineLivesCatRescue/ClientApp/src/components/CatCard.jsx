import React, {Component} from 'react';

export class CatCard extends Component {
    render() {
        return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.imgur.com/Jvh1OQm.jpeg" alt="Cat" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Jezabel</h2>
                    <p>Cat description</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Adopt me</button>
                    </div>
                </div>
            </div>
        );
    }
}
