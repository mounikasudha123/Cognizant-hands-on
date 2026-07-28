import React from 'react';

class Post {
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  loadPosts() {
    const initialPosts = [
      new Post(1, 'Welcome to BlogApp', 'This is a demo post created during the React lifecycle hands-on.'),
      new Post(2, 'React Lifecycle', 'Learn how componentDidMount and componentDidCatch work in class components.'),
      new Post(3, 'Handling Errors', 'componentDidCatch lets you show an error message instead of crashing the whole UI.'),
    ];

    this.setState({ posts: initialPosts });
  }

  componentDidMount() {
    try {
      this.loadPosts();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  componentDidCatch(error, info) {
    console.error('Error caught in Posts:', error, info);
    this.setState({ error: 'Something went wrong while loading the posts.' });
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return (
        <div className="Posts error">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      );
    }

    return (
      <div className="Posts">
        <h1>Blog Posts</h1>
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;
