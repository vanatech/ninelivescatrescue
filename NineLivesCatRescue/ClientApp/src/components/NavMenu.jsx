/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render() {
    return (
        <div className="navbar bg-emerald-300 text-white">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">9 Lives Cat Rescue</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>
                                Adopt/Foster
                            </summary>
                            <ul className="p-2 bg-emerald-300 rounded-t-none">
                                <li><a>Available Cats</a></li>
                                <li><a>Adoption Application</a></li>
                                <li><a>Foster Application</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Spay/Neuter</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    );
  }
}
