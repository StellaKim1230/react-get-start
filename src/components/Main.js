import React, { Component, Fragment } from 'react';

import Comment from './Comment'

class Main extends Component {

  // componentDidMount() {
  //   setInterval(this.formatDate, 1000);
  // }

  formatName = (user) => {
    return user.firstName + ' ' + user.lastName
  }

  formatDate = () => {
    return new Date().toLocaleTimeString()
  }

  render() {
    const user = {
      firstName: 'jieun',
      lastName: 'kim'
    }

    const author = {
      name: 'Stella',
      avatarUrl: '/'
    }

    const text = 'text'
    const date = new Date()
    
    return (
      <Fragment>
        <h1>{this.props.name}</h1>
        <h1>Hello, {this.formatName(user)}</h1>
        <h2>It is {this.formatDate()}</h2>
        <Comment
          author={author}
          text={text}
          date={date}
        />
      </Fragment>
    );

  }

}

export default Main;
