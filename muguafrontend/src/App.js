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

export default class App extends React.Component {
  constructor(props) {
    super(props);

    fetch('http://localhost:8000/api/discussions/')
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        if (data.data.length !== 0) {
          console.log(data.data);
        }
      });

    this.state = {
      testStr: 'test test test',
      posts: [{id: 1, title: 'Test Post', message: 'Test msg.'}]
    };
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<MuguaMain />}>
          <Route index element={<Home />} />
          <Route path="discussions" element={<Discussions test={this.state.testStr} posts={this.state.posts} />} />
          <Route path="pages" element={<Pages />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="files" element={<Files />} />
        </Route>
      </Routes>
    );
  }

}
