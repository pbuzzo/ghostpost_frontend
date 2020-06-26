import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Post } from './components/post';
import { CreatePost } from './components/create_post';


class App extends React.Component {
  // set initial state
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      post_type: true,
      post_title: "",
      post_text: ""
    }
  }
  // set state if component mounds on page
  componentDidMount() {
    fetch("http://localhost:8000/api/post/"
    )
    .then(res => res.json())
    .then(data => this.setState({ posts: data }))
  }
  // need seperate all_posts funct for button
  all_posts = () => {
    fetch("http://localhost:8000/api/post/")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
  }
  // set state with all boasts
  all_boasts = () => {
    fetch("http://localhost:8000/api/boasts/")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
  }
  // set state with all roasts
  all_roasts = () => {
    fetch("http://localhost:8000/api/roasts/")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
  }

  filter_vote = () => {
    // set back to all posts state before filtering //
    // sort by vote
    let copy_state = [...this.state.posts] // get list of state
    copy_state.sort(function (a, b) {
      return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)
    })
    this.setState({ posts: copy_state })
  }

  render() {
    return (
      <div>
        <button onClick={this.all_posts}>Gimme All The Posts!</button>
        <button onClick={this.all_boasts}>Gimme All The Boasts!</button>
        <button onClick={this.all_roasts}>Gimme All The Roasts!</button>
        <button onClick={this.filter_vote}>Sort 'Em By Votes!</button>
        <div>
          {this.state.posts.map(post => {
            return (
              <div>
                <Post 
                  id={post.id}
                  title={post.title}
                  text={post.text}
                  date={post.date}
                  post_type={post.post_type}
                  upvotes={post.upvotes}
                  downvotes={post.downvotes}
                />
              </div>
            )
          })
          }
        </div>
        <CreatePost />
      </div>
    );
  }

}

export default App;

