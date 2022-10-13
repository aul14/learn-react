import React, {Component, Fragment} from "react";
import './DetailPost.css';
import { useParams } from "react-router-dom"; 
import axios from "axios";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
  
class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    
    componentDidMount() {
        let { id } = this.props.params;

        axios.get(`http://localhost:3004/posts/${id}`)
            .then((result) => {
                this.setState({
                    post: {
                        title: result.data.title,
                        body: result.data.body
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            })

    }

    render(){
        return (
            <Fragment>
               <div className="p-detail-post">
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
               </div>
            </Fragment>
        )
    }
}

export default withParams(DetailPost);