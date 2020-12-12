import {LOGIN_REQUEST,LOGIN_SUCCESS, LOGIN_FAILURE,
  GET_POSTDATA_REQUEST,GET_POSTDATA_SUCCESS,GET_POSTDATA_FAILURE,
  POST_DATA_REQUEST,POST_DATA_SUCCESS,POST_DATA_FAILURE,
  POST_LIKES_REQUEST,POST_LIKES_SUCCESS,POST_LIKES_FAILURE,
  POST_COMMENTS_REQUEST,POST_COMMENTS_SUCCESS,POST_COMMENTS_FAILURE
} from './actionTypes'
    
    const initState ={
      user:'',
      
      isLoading:false,
      isError:false,
      isAuth:false,
     
      posts:[],
      message:'',
      
    }
  
    const reducer =(state=initState,{type,payload})=>{
      switch(type){
        case LOGIN_REQUEST:
          return {
            ...state,
            isLoading:true
          }
          case LOGIN_SUCCESS:
            //console.log(payload)
            return {
              ...state,
              isLoading:false,
              user:payload,
              isAuth:true,
              isError:false
            }
            case LOGIN_FAILURE:
              return {
                ...state,
          isError:true,
          isLoading:false
              }
               //.................GETDATA.................//
        case GET_POSTDATA_REQUEST:
          return {
              ...state,
              isLoading:true
          }
          case GET_POSTDATA_SUCCESS:
              return {
                  ...state,
                  isLoading:false,
                  posts:payload,
                  
                  isError:false
                  // isAuth:true
              }
              
              case GET_POSTDATA_FAILURE:
                  return {
                      ...state,
                      isError:true,
                      isLoading:false
                  }
                  case POST_DATA_REQUEST:
                      return {
                          ...state,
                          isLoading:true
                      }
                      case POST_DATA_SUCCESS:
                      return {
                          ...state,
                  isLoading:false,
                 message:payload.message,
                  
                  isError:false,
                  isAuth:true,
                  
                      }
                      case POST_DATA_FAILURE:
                      return {
                          ...state,
                      isError:true,
                      isLoading:false
                      } 
                  
                      case POST_LIKES_REQUEST:
                      return {
                          ...state,
                          isLoading:true
                      }
                      case POST_LIKES_SUCCESS:
                      return {
                          ...state,
                  isLoading:false,
                 
                  
                  isError:false,
                  isAuth:true,
                  
                      }
                      case POST_LIKES_FAILURE:
                      return {
                          ...state,
                      isError:true,
                      isLoading:false
                      } 
                  
                      case POST_COMMENTS_REQUEST:
                        return {
                            ...state,
                            isLoading:true
                        }
                        case POST_COMMENTS_SUCCESS:
                        return {
                            ...state,
                    isLoading:false,
                   
                    
                    isError:false,
                    isAuth:true,
                    
                        }
                        case POST_COMMENTS_FAILURE:
                        return {
                            ...state,
                        isError:true,
                        isLoading:false
                        } 
                    
              default:
                return state
      }
    }
  
    export default reducer