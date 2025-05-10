import React, { useState } from 'react';
import people from './data/people';
import PersonCard from './components/PersonCard';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
        <h1 style={styles.titleBook}>My People Book</h1>
      </div>
      {menuOpen && (
        <div style={styles.menu}>
          <a href="#home" style={styles.menuItem}>Home</a>
          <a href="#about" style={styles.menuItem}>About</a>
          <a href="#contact" style={styles.menuItem}>Contact</a>
        </div>
      )}
      <div style={styles.cardContainer}>
        {people.map((person, index) => (
          <PersonCard key={index} {...person} />
        ))}
      </div>
      <footer>
        <p stlye={styles.footerContainer}>© 2023 My People Book. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'sans-serif',
    textAlign: 'center'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  hamburger: {
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    borderRadius: '5px',
    marginBottom: '1rem'
  },
  menuItem: {
    textDecoration: 'none',
    color: '#333',
    margin: '0.5rem 0'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  titleBook: {
    textAlign: 'center',
    margin: '0 auto'
  },
  footerContainer: {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '0.8rem',
    color: '#555'
  }
};

export default App;
