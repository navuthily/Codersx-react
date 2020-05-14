import React, { Component } from 'react';

class FollowFriendListItem extends Component {
  constructor(props){
    super()
 }
 render(){
       let {username, image}=this.props;
    return(
    <div className=''>
       <div className='avatar-and-text  '> 
          <img className='avatar' src ={image} alt=""/>
          <div className='name-user'>
           <div>{username} </div>
           
          </div>
       
        </div>
        <div className='a'> <p>follow</p></div> 
    </div>

    )
 }
}

export default FollowFriendListItem;