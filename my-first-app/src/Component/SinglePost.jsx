import React from "react";
import { connect } from "react-redux";
import { postLikesData,postCommentsData } from "../Redux/actionCreators";

class SinglePost extends React.Component{
    constructor(props){
        super(props)
        this.state={
comment:''
        }
    }
    handleChange=(e)=>{
        const {name,value}=e.target
        this.setState({
            [name]:value
        })
    }
    handleComment=(postId,postComments)=>{
const {postCommentsData,user}=this.props
const{id,username_fullname}=user.user
const {comment}=this.state
        postCommentsData({id,username_fullname,comment,postId,postComments})
    }
    handleClick=(postId,postLikes)=>{
        const {postLikesData,user}=this.props

        const{id,username}=user.user
        postLikesData({id,username,postId,postLikes})
    }
    render(){
         console.log(this.props)
        const {post,user}=this.props
        
        const {comment}=this.state
        console.log(post,user)
        console.log(user.user.username)
       
        let obj=post.likes.find(like =>like.user_id === user.user.id)
        return(
           <div >
           <div style={{margin:"50px",width:"400px",border:"1px solid black"
           ,borderRadius:"10px",textAlign:"left"}}>
<img src={post.author_avatar} alt=""
style={{height:"50px",width:"50px",borderRadius:"25px"}}/>
<p style={{color:"black",fontSize:"16px"}}>{post.author_name}</p>             
<p>{post.author_title}</p>

       <hr/>
            <i style={{color:obj?"red":null}}
        onClick={()=>this.handleClick(post.id,post.likes)}
        class="fa fa-thumbs-o-up" aria-hidden="true" ></i>
        {post.likes.length}Like
        <input type="text" name="comment"
        value={comment} onChange={this.handleChange}/>
        
            <i onClick={()=>this.handleComment(post.id,post.comments)}
            class="fa fa-comment-o" aria-hidden="true"></i>Comment<br/>
            {
    post.comments.map(item=> <p  key={item.id} >
      
        {item.comment_author} :  {item.comment_body}</p> )
}
            </div>
            </div>
        )
    }
}
const mapStateToProps=state=>({
user:state.user
})

const mapDispatchToProps=dispatch=>({
    postLikesData:(payload)=>dispatch(postLikesData(payload)),
    postCommentsData:(payload)=>dispatch(postCommentsData(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(SinglePost)