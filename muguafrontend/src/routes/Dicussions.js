import React from "react";
import { Button, FormControl, TextField, TextareaAutosize } from "@mui/material";

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
        <FormControl>
          <table>
            <tr align="right">
              <td>
                <TextField id="standard-basic" label="Title" variant="standard" style={{ width: 400 }}/>
              </td>
            </tr>
            <tr align="right">
              <td>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="Thread message"
                  style={{ width: 400 }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Button variant="contained">Post</Button>
              </td>
            </tr>
          </table>
        </FormControl>


        <p>{postsStr}</p>
      </div>
    );
  }
}
  