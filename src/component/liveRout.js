import React, {Component} from "react";
import {Link} from "react-router-dom";

class LiveRout extends Component {


    render(){


        return(
            this.props.posts.map((elem, key)=>{
                return(
                    <div key ={key}>
                        <h3>{elem.title}</h3>
                        <Link key = {key} to={`/post/${key}`} >MORE</Link>

                    </div>
                )


            })





        )


    }

}

export default LiveRout