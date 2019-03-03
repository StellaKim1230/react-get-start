import React, { Component } from 'react';

import UserInfo from './UserInfo'

class Comment extends Component {

  // componentDidMount() {
  //   setInterval(this.formatDate, 1000);
  // }

  formatDate = () => {
    return new Date().toLocaleTimeString()
  }

  render() {
    const { author, text, date} = this.props

    return (
      <div className="Comment">
        <UserInfo author={author}/>
        <div className="Comment__text">
          {text}
        </div>
        <div className="Comment__date">
          {this.formatDate(date)}
        </div>
      </div>
    );
  }
}

export default Comment;
