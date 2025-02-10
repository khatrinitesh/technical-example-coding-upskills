import React, { useState, useEffect } from 'react';

const HooksOne = () => {
    const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_APIURL; // Ensure this is correct

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        console.log('Response:', response); // Log response

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        console.log('Content-Type:', contentType); // Log content type

        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Expected JSON, but got something else');
        }

        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error); // Log the actual error
        setError(error.message); // Update the error state
        setLoading(false);
      }
    };

    fetchPosts();
  }, [apiUrl]);

  const btnDel = (id) => {
    const newPost = posts.filter((val) => val.id !== id)
    setPosts(newPost)
  }
    

  return (
    <>
    <div className="App">
      <h1>Posts from JSONPlaceholder API</h1>

      {/* Loading state */}
      {loading && <p>Loading posts...</p>}

      {/* Error state */}
      {error && <p>Error: {error}</p>}

      {/* Displaying fetched posts */}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => btnDel(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
};

export default HooksOne;
