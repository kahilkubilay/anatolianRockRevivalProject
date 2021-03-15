import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Stories from './Stories';
import Story from './Story';
import Poster from './Poster';
import { TrackList } from './TrackList';

const allTitle = TrackList.map((info, key) => {
  return <li>
    <NavLink className='tag-title' to={{ pathname:'/', state: {key: key} }}>
      {info.title}
    </NavLink></li>
});

class App extends React.Component  {
  render() {
    return (
        <div>
          <Router>
            <nav className='header-menu'>
                <ul className='sub-headers'>
                    <NavLink  to='/'>
                        <li>
                            <img src='./logo.png' className='head-logo' alt='Anatolian Rock Revival Project Logo'/>
                        </li>
                    </NavLink>
                    <NavLink to='/poster' className='category' activeClassName="main-active">
                        <li>Posterler</li>
                    </NavLink>
                    <NavLink to='/stories' className='category' activeClassName="main-active">
                        <li>Hikayeler</li>
                    </NavLink>
                </ul>
            </nav>

            <Route>
              <nav className='tag-area'>
                {allTitle}
              </nav>
            </Route>

            <Route exact path='/' component={Story}></Route>
            <Route path='/stories' component={Stories} ></Route>
            <Route path='/poster' component={Poster}></Route>
          </Router>
        </div>
    );
  }
}

export default App;
