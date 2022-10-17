// LIBRARY
import React, {Component, Fragment, createContext} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// PAGES
import GlobalProvider from "../../context/context";
import BlogPost from "../Pages/BlogPost/BlogPost";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";
import Hooks from "../Pages/Hooks/Hooks";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import Product from "../Pages/Product/Product";
import YouTubeCompPages from "../Pages/YouTubeCompPages/YouTubeCompPages";
//STYLE
import './Home.css';

// STATE MANAGEMENT MENGGUNAKAN CONTEXT DI FOLDER CONTEXT > CONTEXT

class Home extends Component {

    render() {
        return(
          <Router>
            {/* // STATE MANAGEMENT MENGGUNAKAN CONTEXT */}
            <Fragment>
                <div>
                  <ul>
                    <li>
                      <Link to="/">Blog Post</Link>
                    </li>
                    <li>
                      <Link to="/product">Product</Link>
                    </li>
                    <li>
                      <Link to="/lifecycle">Lifecycle</Link>
                    </li>
                    <li>
                      <Link to="/youtube-component">Youtube Component</Link>
                    </li>
                    <li>
                      <Link to="/hooks">Hooks</Link>
                    </li>
                  </ul>
                </div>
                  <Routes>
                    <Route exact path="/" element={<BlogPost/>}></Route>
                    <Route exact path="/product" element={<Product/>}></Route>
                    <Route exact path="/lifecycle" element={<LifeCycleComp/>}></Route>
                    <Route exact path="/youtube-component" element={<YouTubeCompPages/>}></Route>
                    <Route exact path="/detail-post/:id" element={<DetailPost/>} ></Route>
                    <Route exact path="/hooks" element={<Hooks/>} ></Route>
                  </Routes>
              </Fragment>
          </Router>
        )
    }
}

export default GlobalProvider(Home);