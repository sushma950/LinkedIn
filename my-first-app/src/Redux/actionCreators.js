import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,
    GET_POSTDATA_REQUEST,GET_POSTDATA_SUCCESS,GET_POSTDATA_FAILURE,
    POST_DATA_REQUEST,POST_DATA_SUCCESS,POST_DATA_FAILURE,
    POST_LIKES_REQUEST,POST_LIKES_SUCCESS,POST_LIKES_FAILURE,
    POST_COMMENTS_REQUEST,POST_COMMENTS_SUCCESS,POST_COMMENTS_FAILURE} from './actionTypes'
import axios from 'axios'
import {v4 as uuid} from "uuid"
export const loginRequest=(payload)=>({
    type:LOGIN_REQUEST,
    payload
})
export const loginSuccess=(payload)=>({
    type:LOGIN_SUCCESS,
    payload
})
export const loginFailure=(payload)=>({
    type:LOGIN_FAILURE,
    payload
})
// export const getUserData=(payload)=>dispatch=>{
//     console.log(payload)
//     dispatch(loginRequest(payload))
// axios.get(`http://localhost:3000/users?username=${payload.username}&&password=${payload.password}`)
//     .then(res=>(res.data.length>0?dispatch(loginSuccess(res)):dispatch(loginFailure(res))))
//     .then(()=>dispatch(getPost()))
// }

export const getUserData =(payload)=>dispatch=>{
    console.log(payload)
dispatch(loginRequest())
return axios.get("http://localhost:3000/users")
.then(res=>res.data)
.then(res=>{
    let loggedInUser = res.find(item=>item.username==payload.username)
    console.log(loggedInUser)
    if(loggedInUser.password==payload.password){
        return dispatch(loginSuccess({message:"loggedIn successfully",user:loggedInUser}))
    }
    return dispatch(loginFailure({message:"wrong Credentials"}))
})
// .then(res=>console.log(res))
}
export const getDataRequest=(payload)=>({
    type:GET_POSTDATA_REQUEST,
    payload
})

export const getDataSuccess=(payload)=>({
    type:GET_POSTDATA_SUCCESS,
    payload
})
export const getDataFailure=(payload)=>({
    type:GET_POSTDATA_FAILURE,
    payload
})
export const postDataRequest=(payload)=>({
    type:POST_DATA_REQUEST,
    payload
})
export const postDataSuccess=(payload)=>({
    type:POST_DATA_SUCCESS,
    payload
})
export const postDataFailure=(payload)=>({
    type:POST_DATA_FAILURE,
    payload
})
export const getPost=()=>dispatch=>{
    dispatch(getDataRequest())
     axios.get("http://localhost:3000/posts") 
    
    //  .then(res=>console.log(res))
     .then(res=>dispatch(getDataSuccess(res.data)))
     .catch(err=>dispatch(getDataFailure(err)))

}
export const postPostsData=(payload)=>dispatch=>{
    
    
    const {id,username_fullname,avatar,author_title}=payload
    let data={
        author_id:id,
        author_name:username_fullname,
        author_title:author_title,
        author_avatar:avatar,
        likes:[],
        comments:[]
    }
    dispatch(postDataRequest())
    return axios.post("http://localhost:3000/posts",
      data
    )    
   
   //.then(res=>dispatch(postDataSuccess()))
    .then(res=>(dispatch(getPost(res))))
    .catch(err=>dispatch(postDataFailure(err)))
}


export const postLikesRequest=(payload)=>({
    type:POST_LIKES_REQUEST,
    payload
})
export const postLikesSuccess=(payload)=>({
    type:POST_LIKES_SUCCESS,
    payload
})
export const postLikesFailure=(payload)=>({
    type:POST_LIKES_FAILURE,
    payload
})
export const postLikesData=(payload)=>dispatch=>{
   console.log(payload)
   let {id,postLikes,postId,username}=payload
   let data=postLikes.find(item=>item.user_id==id)
   if(!data){
    postLikes =[...postLikes,{user_id:id,username:username}]
   }
   else {
       postLikes =postLikes.filter(like=>like.user_id!=id)
   }
//  postLikes =[...postLikes,{user_id:id,username:username}]
    dispatch(postLikesRequest())
    return axios.patch("http://localhost:3000/posts/"+postId,{
        likes:postLikes
    })    
   
   .then(res=>console.log(res.data))
   .then(res=>(dispatch(postLikesSuccess(res))))
    .then(res=>(dispatch(getPost(res))))
    //.catch(err=>dispatch(postLikesFailure(err)))
}


export const postCommentsRequest=(payload)=>({
    type:POST_COMMENTS_REQUEST,
    payload
})
export const postCommentsSuccess=(payload)=>({
    type:POST_COMMENTS_SUCCESS,
    payload
})
export const postCommentsFailure=(payload)=>({
    type:POST_COMMENTS_FAILURE,
    payload
})
export const postCommentsData=(payload)=>dispatch=>{
    console.log(payload)
    let {id,username_fullname,postId,postComments,comment}=payload
    postComments=[...postComments,{id:uuid(),timeStamp:Date.now(),comment_body:comment,comment_author:username_fullname}]
     dispatch(postCommentsRequest())
     
    return axios.patch("http://localhost:3000/posts/"+postId,{
        comments:postComments
    })    
    
    .then(res=>console.log(res.data))
    .then(res=>(dispatch(postCommentsSuccess(res))))
     .then(res=>(dispatch(getPost(res))))
     //.catch(err=>dispatch(postCommentsFailure(err)))
 }
 