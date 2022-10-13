// LIBRARY
import React, {Component, Fragment} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// PAGES
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import BlogPost from "../Pages/BlogPost/BlogPost";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import Product from "../Pages/Product/Product";
import YouTubeCompPages from "../Pages/YouTubeCompPages/YouTubeCompPages";
//STYLE
import './Home.css';

class Home extends Component {
    state = {
      showComponent: true
    }

    componentDidMount () {
      // setTimeout(() => {
      //   this.setState({
      //     showComponent:false
      //   })
      // },15000)
    }

    render() {
        return(
          <Router>
            {/* <div>
              <p>Youtube Component</p>
              <hr />
              <YouTubeComp time="7.12" title="Learn React Part 1" desc="Testing 1"/>
              <YouTubeComp time="8.32" title="Learn React Part 2" desc="Testing 2"/>
              <YouTubeComp time="12.28" title="Learn React Part 3" desc="Testing 3"/>
              <YouTubeComp/>
              <p>Counter</p>
              <hr />
              <Product/>
              <p>LifeCycleComponent</p>
              <hr />
              {
                this.state.showComponent ?
                <LifeCycleComp/> :
                null
              }
              <p>Blog Posts</p>
              <hr/>
              <BlogPost />
            </div> */}
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
                </ul>
              </div>
                <Routes>
                  <Route exact path="/" element={<BlogPost/>}></Route>
                  <Route exact path="/product" element={<Product/>}></Route>
                  <Route exact path="/lifecycle" element={<LifeCycleComp/>}></Route>
                  <Route exact path="/youtube-component" element={<YouTubeCompPages/>}></Route>
                </Routes>
            </Fragment>
          </Router>
        )
    }
}

export default Home;