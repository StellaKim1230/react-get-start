import React, { Component } from 'react';

import Avatar from './Avatar'

class UserInfo extends Component {
  render() {
    const { author } = this.props

    return (
      <div className="UserInfo">
        <Avatar user={author} />
        <div className="UserInfo__name">
          {author.name}
        </div>
      </div>
    );
  }
}

export default UserInfo;