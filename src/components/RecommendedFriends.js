import React, { Component } from 'react';
import FollowFriendListItem from './FollowFriendListItem';
class RecommendedFriends extends Component {
  friends =[{username: 'an', image:'https://image.shutterstock.com/image-photo/macro-leaves-background-texture-blue-600w-728448754.jpg'},
  {username: 'na', image:'https://image.shutterstock.com/image-photo/macro-leaves-background-texture-blue-600w-728448754.jpg'},
  {username: 'ly',  image:'https://image.shutterstock.com/image-photo/macro-leaves-background-texture-blue-600w-728448754.jpg'}]
   render(){
      return(
        <div className='row'>
         <div className='col-6'>
           <div>gợi ý cho bạn</div>
            {this.friends.map(user=>(
            <FollowFriendListItem key={`key:${user.name}`}
            {...user}
            />
         ))}   
         </div>
         <div className='col-6'>
            Xem tất cả
         
         </div>
        </div>
      )
   }
}
export default RecommendedFriends;