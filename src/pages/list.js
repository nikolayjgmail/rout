import React, {Component} from "react";
import LiveRout from '../component/liveRout'




class List extends Component {
    state = {
        posts: null,
        count: 10,
        pages:0
    };

    componentDidMount() {

        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(res => res.json())
            .then(res => {
                let start=this.state.pages;
                let end =this.state.count*(this.state.pages+1);
                let test=res.slice(start, end);
                this.setState({
                    posts: test
                })
            })
    }




    render() {

        const {posts} = this.state;
        if(posts===null){
            return <p>Loading...</p>
        } else {

            return (

                <div >

                    <LiveRout posts={this.state.posts}/>

                </div>
            )
        }

    }


}

export default List


