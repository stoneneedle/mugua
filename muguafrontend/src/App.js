import * as React from "react";

// React Router
import { Routes, Route } from "react-router-dom";

// Routes
import Home from "./routes/Home";
import Discussions from "./routes/Dicussions";
import Pages from "./routes/Pages";
import Assignments from "./routes/Assignments";
import Files from "./routes/Files";

// Components
import MuguaMain from "./components/MuguaMain";

// CSS
import "./index.css";

let discussionData = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const that = this;
    fetch('http://localhost:8000/api/discussions/', {
      credentials: 'include'
    })
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        if (discussionData.length === 0) {
          discussionData.push(data);
          that.setState({posts: data});
          console.log(this.state.posts);
        }
      });
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<MuguaMain />}>
          <Route index element={<Home />} />
          <Route path="discussions" element={<Discussions posts={this.state.posts} />} />
          <Route path="pages" element={<Pages />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="files" element={<Files />} />
        </Route>
      </Routes>
    );
  }

}
