import React, { useState } from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('course');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>BlogPress - Conditional Rendering Demo</h1>
        <p>Explore different ways to implement conditional rendering in React</p>
      </header>

      <nav className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'course' ? 'active' : ''}`}
          onClick={() => setActiveTab('course')}
        >
          Course Details
        </button>
        <button
          className={`tab-button ${activeTab === 'book' ? 'active' : ''}`}
          onClick={() => setActiveTab('book')}
        >
          Book Details
        </button>
        <button
          className={`tab-button ${activeTab === 'blog' ? 'active' : ''}`}
          onClick={() => setActiveTab('blog')}
        >
          Blog Details
        </button>
      </nav>

      <main className="content-area">
        {activeTab === 'course' && <CourseDetails />}
        {activeTab === 'book' && <BookDetails />}
        {activeTab === 'blog' && <BlogDetails />}
      </main>
    </div>
  );
}

export default App;
