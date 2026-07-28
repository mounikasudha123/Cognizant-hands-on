import React, { useState } from 'react';

/**
 * BookDetails Component
 * Demonstrates conditional rendering using:
 * - If-else statements with separate return statements
 * - Switch statements
 * - Element variables
 */
function BookDetails() {
  const [selectedGenre, setSelectedGenre] = useState('fiction');
  const [showBookInfo, setShowBookInfo] = useState(false);

  const booksData = {
    fiction: {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      pages: 180,
      rating: 4.5,
      description: 'A classic novel about wealth, love, and the American Dream.',
    },
    nonFiction: {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      pages: 464,
      rating: 4.7,
      description: 'A sweeping history of mankind from the Stone Age to the present.',
    },
    mystery: {
      title: 'The Girl with the Dragon Tattoo',
      author: 'Stieg Larsson',
      pages: 465,
      rating: 4.4,
      description: 'A gripping mystery about a journalist and a hacker solving a cold case.',
    },
  };

  // Demo 1: If-else logic (Element variable approach)
  const getBookInfo = () => {
    if (!showBookInfo) {
      return <p>Click the button below to see book information.</p>;
    }

    const book = booksData[selectedGenre];

    if (!book) {
      return <p>No book information available for this genre.</p>;
    }

    return (
      <div className="card">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Pages:</strong> {book.pages}</p>
        <p><strong>Rating:</strong> ⭐ {book.rating}/5</p>
        <p><strong>Description:</strong> {book.description}</p>
      </div>
    );
  };

  // Demo 2: Switch statement for genre selection
  const getGenreColor = (genre) => {
    switch (genre) {
      case 'fiction':
        return { bg: '#E3F2FD', color: '#1976D2' };
      case 'nonFiction':
        return { bg: '#F3E5F5', color: '#7B1FA2' };
      case 'mystery':
        return { bg: '#FCE4EC', color: '#C2185B' };
      default:
        return { bg: '#F5F5F5', color: '#333' };
    }
  };

  const currentGenreStyle = getGenreColor(selectedGenre);

  return (
    <div className="component-section">
      <h2 className="section-title">Book Details - If-Else & Switch Statements</h2>

      {/* Demo 1: If-Else with Element Variables */}
      <div className="method-demo">
        <div className="method-title">1. If-Else Logic with Element Variables</div>
        <div className="method-description">
          Storing conditional JSX in a variable and rendering it
        </div>
        <button
          className="toggle-button"
          onClick={() => setShowBookInfo(!showBookInfo)}
        >
          {showBookInfo ? 'Hide' : 'Show'} Book Information
        </button>
        <div className="demo-output">
          {getBookInfo()}
        </div>
      </div>

      {/* Demo 2: Switch Statement */}
      <div className="method-demo">
        <div className="method-title">2. Switch Statement for Conditional Rendering</div>
        <div className="method-description">
          Using switch statements to render different content based on genre
        </div>
        <div style={{ marginBottom: '15px' }}>
          <button
            className="toggle-button"
            onClick={() => setSelectedGenre('fiction')}
            style={{
              background: selectedGenre === 'fiction' ? '#667eea' : '#ccc',
            }}
          >
            Fiction
          </button>
          <button
            className="toggle-button"
            onClick={() => setSelectedGenre('nonFiction')}
            style={{
              background: selectedGenre === 'nonFiction' ? '#667eea' : '#ccc',
              marginLeft: '10px',
            }}
          >
            Non-Fiction
          </button>
          <button
            className="toggle-button"
            onClick={() => setSelectedGenre('mystery')}
            style={{
              background: selectedGenre === 'mystery' ? '#667eea' : '#ccc',
              marginLeft: '10px',
            }}
          >
            Mystery
          </button>
        </div>
        <div
          className="demo-output"
          style={{
            backgroundColor: currentGenreStyle.bg,
            borderLeft: `5px solid ${currentGenreStyle.color}`,
          }}
        >
          {(() => {
            switch (selectedGenre) {
              case 'fiction':
                return (
                  <div>
                    <h4 style={{ color: currentGenreStyle.color }}>📖 Fiction Genre</h4>
                    <p>
                      {booksData.fiction.title} by {booksData.fiction.author}
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                      {booksData.fiction.description}
                    </p>
                  </div>
                );
              case 'nonFiction':
                return (
                  <div>
                    <h4 style={{ color: currentGenreStyle.color }}>📚 Non-Fiction Genre</h4>
                    <p>
                      {booksData.nonFiction.title} by {booksData.nonFiction.author}
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                      {booksData.nonFiction.description}
                    </p>
                  </div>
                );
              case 'mystery':
                return (
                  <div>
                    <h4 style={{ color: currentGenreStyle.color }}>🔍 Mystery Genre</h4>
                    <p>
                      {booksData.mystery.title} by {booksData.mystery.author}
                    </p>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>
                      {booksData.mystery.description}
                    </p>
                  </div>
                );
              default:
                return <p>Unknown genre</p>;
            }
          })()}
        </div>
      </div>

      {/* Demo 3: Conditional CSS Classes */}
      <div className="method-demo">
        <div className="method-title">3. Conditional Rendering with Classes</div>
        <div className="method-description">
          Combining multiple conditions to render books with dynamic styling
        </div>
        <div className="demo-output">
          {showBookInfo && selectedGenre ? (
            <div
              className="card"
              style={{
                borderLeft: `4px solid ${currentGenreStyle.color}`,
                backgroundColor: currentGenreStyle.bg,
              }}
            >
              <h3>{booksData[selectedGenre].title}</h3>
              <p>
                <strong>Genre:</strong>{' '}
                <span className="tag" style={{ backgroundColor: currentGenreStyle.color }}>
                  {selectedGenre === 'nonFiction'
                    ? 'Non-Fiction'
                    : selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1)}
                </span>
              </p>
              <p><strong>Pages:</strong> {booksData[selectedGenre].pages}</p>
              <p><strong>Rating:</strong> ⭐ {booksData[selectedGenre].rating}/5</p>
            </div>
          ) : (
            <p style={{ color: '#999' }}>
              Enable "Show Book Information" and select a genre to view book details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
