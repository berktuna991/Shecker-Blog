import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Header.sass'
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            api: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/posts')
            .then(res => {
                const api = res.data;
                this.setState({ api });
            })
    }
    render() {
        return (
            <header>
                <div className="header">
                    <div className="header2">
                        <div className="header-title">
                            <Link to="/home" className="h1">Shecker</Link>
                        </div>
                        <div className="options-category">
                            <ul className="category">
                                <li>
                                    <Link to="/home" className="category-link">Home</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="category-link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="down-settings">
                    <div className="options-category">
                        <div className="category">
                            <li>
                                <Link to="/home" className="category-link">Home</Link>
                                /
                            </li>
                        </div>
                        <div className="search">
                            <div className="search-form">
                                <input className="search-text" type="text" placeholder="Search the site..."></input>
                                <input className="search-button" type="submit" value="Search"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;