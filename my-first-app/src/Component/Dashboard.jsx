import React from "react"
// import { Navbar, Nav } from "react-bootstrap";
import {connect} from "react-redux"
import {getPost,postPostsData} from '../Redux/actionCreators'
import SinglePost from './SinglePost'
class  Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={

author_title:''

    }
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    const {user,postData}=this.props
    
    const {id,username_fullname,avatar}=user.user
    const {author_title}=this.state
    postData({id,username_fullname,avatar,author_title})
  }
  componentDidMount(){
    this.props.getData()
    
      }
      handleChange=(e)=>{
        const {name,value}=e.target
        this.setState({
          [name]:value
        })
      }
  render(){
    const {author_title}=this.state
    const {posts,user}=this.props
    // console.log(user.user.username)
    return(
      <div >
  <div >
 
 <div className="shadow-sm m-0 p-0 bg-white rounded"
  style={{display:"flex"}}>
                <div style={{display:"flex",
                marginLeft:"200px",backgroundColor:"white"}}>
                    <div> <h1 className="text-primary"><i className="fab fa-linkedin"></i></h1> </div>
                    <div className="pt-2 pl-2">
                        <input type="text" placeholder="Search" style={{ width:"250px",border:"none",backgroundColor:"#EEF3F8",padding:"5px",marginTop:"1px"}}/>
                    </div> 
                </div>
                <div className="Menu" style={{textAlign:"center"}}>
                <div className=" border-bottom border-dark">
                    <div className="text-body">
                        <h5 className="p-0 m-0">
                            <i className="fas fa-home"></i>
                        </h5>
                         <small>Home</small> 
                    </div>
                </div>
                <div>
                    <div className="text-body">
                        <h5 className="p-0 m-0">
                            <i className="fas fa-user-friends"></i>
                        </h5>
                        <small>My Network</small>
                    </div>
                </div>
                <div>
                    <div className="text-body">
                        <h5 className="p-0 m-0">
                            <i className="fas fa-briefcase"></i>
                        </h5>
                        <small>Jobs</small>                         
                    </div>
                </div>
                <div>
                    <div className="text-body">
                        <h5 className="p-0 m-0">
                            <i className="fas fa-comment-dots"></i>
                        </h5>
                        <small>Messaging</small>                         
                    </div>
                </div>
                <div>
                    <div className="text-body">
                        <h5 className="p-0 m-0">
                            <i className="fas fa-bell"></i>
                        </h5>
                        <small>Notifications</small>                         
                    </div>
                </div><hr/>
                <div className="border-right text-body">
                    
                </div>
                <div  className="text-body">
                    <div>
                        <h5 className="p-0 m-0">
                            <i className="fab fa-buromobelexperte"></i>
                        </h5>
                        <small>Work <i className="fas fa-sort-down"></i></small>
                    </div>              
                </div>
                <div>
                    <small>Try Premium Free <br/> For 1 Month.</small>
                </div>
                </div>               
            </div>
</div>
<div style={{display:"flex",flexDirection:"row",margin:"10px"}}>
<div style={{margin:"20px",width:"200px",border:"1px solid black",
backgroundColor:"white",marginRight:"50px"}}>
<div style={{height:"30px",backgroundColor:"blue"}}></div>
<img src={user.user.avatar} alt=""
     style={{height:"50px",width:"50px",borderRadius:"25px"}}      />
    <h3>{user.user.username_fullname}</h3>
  
  <p style={{color:"gray",fontSize:"12px"}}>
    RemoteSoftware Developer at MicroSoft
  </p>
  
<div className="border-top  border-bottom">
                    <p className="mt-3">                        
                        <small className="float-left ml-3 text-muted">Who viewed your profile</small> <small className="float-right mr-3 text-primary">34</small> 
                    </p> <br/>
                    <p >                        
                        <small className="float-left ml-3 text-muted">Connections </small> <small className="float-right mr-3 text-primary">100+</small> 
                    </p><br/>
                    <p className="float-left ml-3">
                    <small className="text-muted">Access exclusive tools & insites </small> <br/>
                    <small>Try Premium free for 1 months</small>
                    </p>  
                    </div>                 
                    <div>
                    <p className="font-weight-bold float-left ml-3"><i className="fas fa-bookmark"></i> Saved Items</p>
                    </div>
  </div>
<div style={{margin:"20px",width:"500px",height:"150px",backgroundColor:"white",
border:"1px solid black"}}>

  <form onSubmit={this.handleSubmit}>
  <i class="fa fa-pencil-square-o"></i>
 <input onChange={this.handleChange} className="input"
value={author_title} name="author_title"
 style={{margin:"10px",width:"300px",
 borderRadius:"15px"}}
 placeholder="Start a Post"
/>

<input type="submit" value="POST"/>
  
   </form>
 
  <img src="data:image/jpeg;base64,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"
  alt="" style={{height:"50px",width:"50px",margin:"10px"}}/>
  
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShMwDZ30Cz_DnrHfqxasZfF4xsqyrEwkXvlw&usqp=CAU"
  alt="" style={{height:"50px",width:"50px",margin:"10px"}}/>
  <img src="data:image/png;base64,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"
  alt="" style={{height:"50px",width:"50px",margin:"10px"}}/>
  <img src="data:image/jpeg;base64,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"
  alt="" style={{height:"50px",width:"50px",margin:"10px"}}/>
  <div >
  {posts &&
    posts.sort((a,b)=>(b.id-a.id)).map(item=>{
      return <SinglePost key={item.id} post={item}/>

      
    }

    )}
  </div>
  </div>
  
      <div style={{width:"390px"}}>
                    <div className="card rounded-md m-3">
                        <div className="card-body">
                            <p className="text-left">LikedIn News</p>                            
                            <p class="p-0 m-0 font-weight-bolder text-left">
                                <i class="text-primary fa fa-circle "></i> A CV that works during the pandemic.
                            </p>
                                <small class="p-0 font-weight-light">1 day ago . 23123 readers</small>
                            <p class="p-0 m-0 font-weight-bolder text-left">
                                <i class="text-primary fa fa-circle "></i>IT plans firm for WFH.
                            </p>
                                <small class="p-0 font-weight-light">4 hrs ago . 987987 readers</small>
                            <p class="p-0 m-0 font-weight-bolder text-left">
                                <i class="text-primary fa fa-circle "></i> Covid-19 is fuelling internal hiring
                            </p>
                                <small class="p-0 font-weight-light">21 hrs ago . 9312 readers</small>
                            <p class="p-0 m-0 font-weight-bolder text-left">
                                <i class="text-primary fa fa-circle "></i>Tata eyes Stake in Big Basket
                            </p>
                                <small class="p-0 font-weight-light">1 day ago . 675 readers</small>

                        </div>
                    </div>
                </div>
  </div>
  
    </div>
)}
}
const mapStateToProps=state=>({
  posts:state.posts,
  user:state.user
  })
  
  const mapDispatchToProps=dispatch=>({
    postData:(payload)=>dispatch(postPostsData(payload)),
    getData:(payload)=>dispatch(getPost(payload))
    
  })
  export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)