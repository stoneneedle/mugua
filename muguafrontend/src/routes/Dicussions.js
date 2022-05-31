import React from "react";

export default class Discussions extends React.Component {
  render() {

    const postsStr = this.props.posts.map((post) => (
      <>
        <p>{post.id}</p>
        <p>{post.title}</p>
        <p>{post.message}</p>
      </>
    ));

    return (
      <div>
        <h2>Discussions</h2>
        <p>{postsStr}</p>
      </div>
    );
  }
}
  