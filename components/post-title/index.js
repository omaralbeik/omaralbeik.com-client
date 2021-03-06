import React, { Component } from "react";
import Moment from "react-moment";
import { _div } from "./_styled";

class PostTitle extends Component {
  render() {
    const { post } = this.props;

    return (
      <_div>
        <h1>{post.title}</h1>
        <h2>
          <Moment format="LL" date={post.date_published} />
        </h2>
      </_div>
    );
  }
}

export default PostTitle;
