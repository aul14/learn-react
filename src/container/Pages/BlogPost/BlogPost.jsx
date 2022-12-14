import React, {Component, Fragment} from "react";
import Post from "../../../component/Post/Post";
import './BlogPost.css';
import axios from "axios";
import API from "../../../services";

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comment: []
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
        this.getPostAPI()
    }

    getPostAPI = () => {
        API.GetNewsBlog().then((result) => {
            this.setState({
                post: result
            })
        });
        // API.GetComments().then((result) => {
        //     this.setState({
        //         comment: result
        //     })
        // });
    }

    postDataToAPI = () => {
        API.PostNewsBlog(this.state.formBlogPost).then((result) => {
            this.getPostAPI();
        })
    }

    putDataToAPI = () => {
        API.PutNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((result) => {
            this.getPostAPI();
        })
    }

    handleRemove = (data) => {
        API.DeleteNewsBlog(data).then((result) => {
            this.getPostAPI();
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI();
            this.setState({
                formBlogPost : {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            });
        } else {
            this.postDataToAPI();
            this.setState({
                formBlogPost : {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            });
        }
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
     
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};

        let timestamp = new Date().getTime();

        if (!this.state.isUpdate) {
            formBlogPostNew["id"] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }


    render() {
        return (
            <Fragment>
                <p className="section-title">Halaman Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title}  name="title" id="title" placeholder="..." onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body}  id="body" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
                {/* {
                    this.state.comment.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;