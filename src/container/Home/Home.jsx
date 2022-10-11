import React, {Component} from "react";
// import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import BlogPost from "../BlogPost/BlogPost";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import Product from "../Product/Product";

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
          <div>
            {/* <p>Youtube Component</p>
            <hr />
            <YouTubeComp time="7.12" title="Learn React Part 1" desc="Testing 1"/>
            <YouTubeComp time="8.32" title="Learn React Part 2" desc="Testing 2"/>
            <YouTubeComp time="12.28" title="Learn React Part 3" desc="Testing 3"/>
            <YouTubeComp/> */}
            {/* <p>Counter</p>
            <hr />
            <Product/> */}
            {/* <p>LifeCycleComponent</p>
            <hr />
            {
              this.state.showComponent ?
              <LifeCycleComp/> :
              null
            } */}
            <p>Blog Posts</p>
            <hr/>
            <BlogPost />
          </div>
        )
    }
}

export default Home;