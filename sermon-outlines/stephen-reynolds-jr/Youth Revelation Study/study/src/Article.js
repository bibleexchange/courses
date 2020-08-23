import React, {useEffect} from "react";
import { useLocation, NavLink } from 'react-router-dom';
import articles from './articles'

function Article() {
  const location = useLocation();
  const id = location.pathname.replace("/","");
  useEffect(() => {
    const id = location.pathname.replace("/","");
    const searchParams = new URLSearchParams(location.search);
  }, [id]);
console.log(id, articles[id])
  if(id !== ""){
 return ( <div className="email-content">
            <div className="email-content-header pure-g">
                <div className="pure-u-1-2">
                    <h1 className="email-content-title">{id} here</h1>
                    <p className="email-content-subtitle">
                        From <NavLink to="/">Tilo Mitra</NavLink> at <span>3:56pm, April 3, 2012</span>
                    </p>
                </div>

                <div className="email-content-controls pure-u-1-2">
                    <button className="secondary-button pure-button">Reply</button>
                    <button className="secondary-button pure-button">Forward</button>
                    <button className="secondary-button pure-button">Move to</button>
                </div>
            </div>

            <div className="email-content-body content">
              {articles[id].body}
            </div>
            
        </div>);
  }else{
    return (<p>empty</p>)
  }

 

  ;
}
 
export default Article;