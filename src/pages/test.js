import React, {Component} from "react";
import { Link} from 'react-router-dom';
class Test extends Component {
    state = {
        posts: null
    };

    componentDidMount() {

        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                })
            })
    }


    render() {
        const {posts} = this.state;
        if (posts === null) {
            return <p>Loading...</p>
        } else {
            return (

                <div>
                    <h1>{this.state.posts[Number(this.props.match.params.id)].title}</h1>
                    <h4>{this.state.posts[Number(this.props.match.params.id)].body}</h4>

                    <Link to={`/page/2`}> BACK</Link>
                </div>
            )

        }
    }
}

export default Test