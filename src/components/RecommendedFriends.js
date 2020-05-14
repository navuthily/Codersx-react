import React, { Component } from "react";
import FollowFriendListItem from "./FollowFriendListItem";
class RecommendedFriends extends Component {
  render() {
    // Truyền vào thì mình nhận lại ở đây
    const { friends } = this.props;
    // Mình vừa nhận vào thì mình bỏ xuống dưới

    return (
      <div className="col-lg-4 col-sm-12">
        <div className="recommended-friends-header">
          <div>Gợi ý cho bạn</div>
          <div>Xem tất cả</div>
        </div>

        <div className="recommanded-friends-list">
          {friends.map((user) => (
            <FollowFriendListItem key={`key:${user.name}`} user={user} />
          ))}
        </div>
      </div>
    );
  }
}
export default RecommendedFriends;
