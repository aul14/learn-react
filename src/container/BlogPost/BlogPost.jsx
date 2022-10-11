import React, {Component, Fragment} from "react";
import Post from "../../component/Post/Post";
import './BlogPost.css';
import axios from "axios";

class BlogPost extends Component {
    state = {
        post: []
    }
    
    componentDidMount () {
        // MEMANGGIL API DENGAN FETCH API
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        // MEMANGGIL API DENGAN AXIOS
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                this.setState({
                    post: result.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;