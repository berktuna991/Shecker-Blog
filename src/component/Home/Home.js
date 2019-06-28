import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from 'axios';
import './Home.sass';

var maks = 200;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      api: [],
      click: false
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
    var readmore;
    if (this.state.click) {
      readmore = this.state.api.map(apis => apis.content.substr(0, 900))
    } else {
      readmore = this.state.api.map(apis => apis.content.substr(0, maks))
    }
    return (
        <div className="container">
          <div className="thread">

            {this.state.api.map(apis =>
              <div className="card" style={{ width: "408px" }}>
                <img src={apis.picture} className="card-img-top" style={{ width: "405.6px", height: "254px" }} />
                <div className="card-body">
                  <h5 className="card-title">{apis.title}</h5>
                  <p className="card-text">{readmore}</p>
                  <div className="postmeta-primary">
                    <span className="author2"> By:  <b>
                      {apis.username} </b>
                    </span>
                    <span className="meta_date">On   <b>{apis.date}</b></span>
                  </div>
                  <Router>
                    <Link to="/readmore" className="btn btn-primary">Continue Reading</Link>
                  </Router>
                </div>
              </div>
            )}
          </div>
        </div>
    );
  }
}

export default Home;