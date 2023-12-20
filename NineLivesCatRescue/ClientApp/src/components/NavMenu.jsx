/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render() {
    return (
        <div className="navbar">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" tag={Link} to="/">9 Lives Cat Rescue</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>
                                Adopt/Foster
                            </summary>
                            <ul className="p-2 bg-primary rounded-t-none">
                                <li><a>Available Cats</a></li>
                                <li><a>Adoption Application</a></li>
                                <li><a>Foster Application</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Spay/Neuter</a></li>
                    <li><a>About Us</a></li>
                    <li><Link tag={Link} to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
  }
}
