import React, {Component, Fragment} from "react";
import YouTubeComp from "../../../component/YouTubeComp/YouTubeComp";

class YouTubeCompPages extends Component {
    render(){
        return(
            <Fragment>
                <p>Youtube Component</p>
                    <hr />
                    <YouTubeComp time="7.12" title="Learn React Part 1" desc="Testing 1"/>
                    <YouTubeComp time="8.32" title="Learn React Part 2" desc="Testing 2"/>
                    <YouTubeComp time="12.28" title="Learn React Part 3" desc="Testing 3"/>
                    <YouTubeComp/>
            </Fragment>
        )
    }
}

export default YouTubeCompPages;