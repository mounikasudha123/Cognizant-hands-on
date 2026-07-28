import React, { useState } from 'react';

/**
 * BlogDetails Component
 * Demonstrates conditional rendering using:
 * - Conditional rendering in JSX with nested components
 * - Inline conditionals
 * - Complex nested conditions
 */
function BlogDetails() {
  const [selectedBlog, setSelectedBlog] = useState('react');
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [showComments, setShowComments] = useState(false);

  const blogsData = {
    react: {
      id: 'react',
      title: 'React Learning Path',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'React',
      isPublished: true,
      views: 1250,
      comments: 24,
      excerpt: 'A comprehensive guide to mastering React from basics to advanced concepts.',
      content:
        'React is a powerful JavaScript library for building user interfaces with reusable components. In this post, we explore best practices, hooks, and state management patterns.',
    },
    installation: {
      id: 'installation',
      title: 'Environment Setup Guide',
      author: 'Mike Chen',
      date: '2024-01-10',
      category: 'Installation',
      isPublished: true,
      views: 3420,
      comments: 56,
      excerpt: 'Step-by-step guide to set up your development environment.',
      content:
        'Setting up a proper development environment is crucial for efficient development. This guide covers Node.js installation, package managers, and IDE configuration.',
    },
    updates: {
      id: 'updates',
      title: 'Latest Framework Updates',
      author: 'Emily Davis',
      date: '2024-01-20',
      category: 'Updates',
      isPublished: false,
      views: 0,
      comments: 0,
      excerpt: 'Coming soon: updates on the latest React features and improvements.',
      content: 'This blog post is currently being drafted and will be published soon.',
    },
  };

  const getCategoryColor = (category) => {
    const colors = {
      React: '#61dafb',
      Installation: '#4caf50',
      Updates: '#ff9800',
    };
    return colors[category] || '#667eea';
  };

  const handleBlogSelect = (blogId) => {
    setSelectedBlog(blogId);
    setExpandedBlog(null);
  };

  return (
    <div className="component-section">
      <h2 className="section-title">Blog Details - Complex Conditional Rendering</h2>

      {/* Demo 1: Conditional Rendering of Blog List */}
      <div className="method-demo">
        <div className="method-title">1. Conditional Blog List Rendering</div>
        <div className="method-description">
          Rendering blogs with conditional status indicators and actions
        </div>
        <div style={{ marginBottom: '15px' }}>
          {Object.keys(blogsData).map((blogKey) => (
            <button
              key={blogKey}
              className="toggle-button"
              onClick={() => handleBlogSelect(blogKey)}
              style={{
                background: selectedBlog === blogKey ? '#667eea' : '#ccc',
                marginRight: '10px',
                marginBottom: '10px',
              }}
            >
              {blogsData[blogKey].title}
              {!blogsData[blogKey].isPublished && ' (Draft)'}
            </button>
          ))}
        </div>
      </div>

      {/* Demo 2: Nested Conditional Rendering */}
      <div className="method-demo">
        <div className="method-title">2. Nested Conditional Rendering</div>
        <div className="method-description">
          Displaying blog details with multiple levels of conditions
        </div>
        <button
          className="toggle-button"
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? 'Hide' : 'Show'} Comments
        </button>
        <div className="demo-output" style={{ marginTop: '15px' }}>
          {selectedBlog ? (
            <div>
              {/* Check if blog exists */}
              {blogsData[selectedBlog] ? (
                <div>
                  {/* Check if blog is published */}
                  {blogsData[selectedBlog].isPublished ? (
                    <div>
                      <div className="card">
                        <h3>{blogsData[selectedBlog].title}</h3>
                        <p style={{ color: '#999', fontSize: '0.9em' }}>
                          By {blogsData[selectedBlog].author} on{' '}
                          {new Date(blogsData[selectedBlog].date).toLocaleDateString()}
                        </p>
                        <p>
                          <span
                            className="tag"
                            style={{ backgroundColor: getCategoryColor(blogsData[selectedBlog].category) }}
                          >
                            {blogsData[selectedBlog].category}
                          </span>
                          <span className="status-badge active">PUBLISHED</span>
                        </p>
                        <p>
                          <strong>👁️ Views:</strong> {blogsData[selectedBlog].views} |{' '}
                          <strong>💬 Comments:</strong> {blogsData[selectedBlog].comments}
                        </p>
                        <p>
                          <strong>Excerpt:</strong> {blogsData[selectedBlog].excerpt}
                        </p>

                        {/* Show comment section if enabled and blog is published */}
                        {showComments && blogsData[selectedBlog].comments > 0 ? (
                          <div
                            style={{
                              marginTop: '15px',
                              padding: '15px',
                              background: '#f0f0f0',
                              borderRadius: '4px',
                            }}
                          >
                            <h4>Recent Comments ({blogsData[selectedBlog].comments})</h4>
                            <p style={{ color: '#666', fontSize: '0.9em' }}>
                              Comments section is active. {blogsData[selectedBlog].comments}{' '}
                              comment(s) available.
                            </p>
                          </div>
                        ) : showComments && blogsData[selectedBlog].comments === 0 ? (
                          <div
                            style={{
                              marginTop: '15px',
                              padding: '15px',
                              background: '#f0f0f0',
                              borderRadius: '4px',
                            }}
                          >
                            <p style={{ color: '#999' }}>
                              No comments yet. Be the first to comment!
                            </p>
                          </div>
                        ) : null}
                      </div>

                      {/* Expand/Collapse full content */}
                      <div style={{ marginTop: '10px' }}>
                        <button
                          className="toggle-button"
                          onClick={() =>
                            setExpandedBlog(
                              expandedBlog === selectedBlog ? null : selectedBlog
                            )
                          }
                        >
                          {expandedBlog === selectedBlog ? 'Hide' : 'Show'} Full Content
                        </button>

                        {/* Show full content when expanded */}
                        {expandedBlog === selectedBlog && (
                          <div
                            style={{
                              marginTop: '15px',
                              padding: '15px',
                              background: '#f9f9f9',
                              borderLeft: '4px solid #667eea',
                              borderRadius: '4px',
                            }}
                          >
                            <p>{blogsData[selectedBlog].content}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Blog is not published */
                    <div
                      style={{
                        padding: '20px',
                        background: '#fff3cd',
                        borderLeft: '4px solid #ff9800',
                        borderRadius: '4px',
                      }}
                    >
                      <h3>{blogsData[selectedBlog].title}</h3>
                      <p>
                        <span className="status-badge" style={{ background: '#ff9800' }}>
                          DRAFT
                        </span>
                      </p>
                      <p>
                        This blog post is in draft status and has not been published yet.
                      </p>
                      <p style={{ color: '#666', fontSize: '0.9em' }}>
                        Preview: {blogsData[selectedBlog].excerpt}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <p>Blog not found</p>
              )}
            </div>
          ) : (
            <p>Please select a blog to view details.</p>
          )}
        </div>
      </div>

      {/* Demo 3: Conditional Rendering Examples Summary */}
      <div className="method-demo">
        <div className="method-title">3. Conditional Rendering Techniques Summary</div>
        <div className="method-description">
          Overview of all conditional rendering methods used in this component
        </div>
        <div className="demo-output">
          <ul style={{ lineHeight: '1.8' }}>
            <li>
              <strong>Ternary Operator:</strong> Used for showing/hiding comments based on
              blog state
            </li>
            <li>
              <strong>Logical AND (&&):</strong> Used for rendering content only when
              conditions are true
            </li>
            <li>
              <strong>Nested Conditions:</strong> Multiple levels of conditionals to
              handle different states
            </li>
            <li>
              <strong>Conditional in Map:</strong> Status indicators for draft/published
              blogs
            </li>
            <li>
              <strong>IIFE (Immediately Invoked Function Expression):</strong> Used with
              ternary operators for complex logic
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
