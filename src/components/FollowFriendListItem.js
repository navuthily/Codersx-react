import React, { Component } from "react";

class FollowFriendListItem extends Component {
  constructor(props) {
    super();
  }

  render() {
    let { user } = this.props;

    return (
      <div className="friend-list-item-wrapper">
        <div className="avatar-and-text  ">
          <img className="avatar" src={user.image} alt="" />
          <div className="name-user">
            <div>{user.username} </div>
            <div><p>Gợi ý cho bạn</p> </div>
          </div>
        </div>
        <div className="follow">
          <p>follow</p>
        </div>
      </div>
    );
  }
}
export default FollowFriendListItem;
