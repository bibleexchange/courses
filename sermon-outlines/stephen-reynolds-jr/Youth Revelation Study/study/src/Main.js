import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Article from "./Article";

import articles from './articles'

class Main extends Component {
  render() {
    return (
    <HashRouter>
      <div id="layout" className="content pure-g">
    <div id="nav" className="pure-u">
        <NavLink to="/" className="nav-menu-button">Menu</NavLink>

        <div className="nav-inner">
            <button className="primary-button pure-button">Compose</button>

            <div className="pure-menu">
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><NavLink to="/" className="pure-menu-link">Inbox <span className="email-count">({articles.length})</span></NavLink></li>
                    <li className="pure-menu-item"><NavLink to="/" className="pure-menu-link">Important</NavLink></li>
                    <li className="pure-menu-item"><NavLink to="/" className="pure-menu-link">Sent</NavLink></li>
                    <li className="pure-menu-item"><NavLink to="/" className="pure-menu-link">Drafts</NavLink></li>
                    <li className="pure-menu-item"><NavLink to="/" className="pure-menu-link">Trash</NavLink></li>
                    <li className="pure-menu-heading">Labels</li>
                    <li className="pure-menu-item"><NavLink to="/" className="pure-menu-link"><span className="email-label-personal"></span>Personal</NavLink></li>
                    <li className="pure-menu-item"><NavLink to="/" className="pure-menu-link"><span className="email-label-work"></span>Work</NavLink></li>
                    <li className="pure-menu-item"><NavLink to="/" className="pure-menu-link"><span className="email-label-travel"></span>Travel</NavLink></li>
                </ul>
            </div>
        </div>
    </div>

    <div id="list" className="pure-u-1">

      {articles.map(function(art, key){
        return ( <div key={key} className="email-item email-item-unread pure-g">
        <NavLink to={"/"+key+""}>
       
            <div className="pure-u">
                <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" className="email-avatar" src="/img/common/tilo-avatar.png" />
            </div>

            <div className="pure-u-3-4">
                <h5 className="email-name">{art.title}</h5>
                <h4 className="email-subject">{art.subject}</h4>
                <p className="email-desc">
                    {art.description}
                </p>
            </div>
        </NavLink>
       </div>)
      })}

    </div>

    <div id="main" className="pure-u-1">
              <Route exact path="/" component={Article}/>
              <Route path="/:id" component={Article}/>
    </div>
</div>   
      </HashRouter>
    );
  }
}
 
export default Main;