import React, {Component, Fragment} from "react";
import Post from "../../component/Post/Post";
import './BlogPost.css';
import axios from "axios";

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
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
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    postDataToAPI = () => {
        axios.post(`http://localhost:3004/posts/`, this.state.formBlogPost)
            .then((result) => {
                this.getPostAPI()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost)
            .then((result) => {
                this.getPostAPI();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((result) => {
                this.getPostAPI();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
            this.setState({
                formBlogPost : {
                    title : '',
                    body : ''
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
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title}  name="title" id="title" placeholder="..." onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body}  id="body" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
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