import React from 'react';

const PersonCard = ({ name, age, relation, bio, image, contact }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}><strong>Relation:</strong> {relation}</p>
      <p style={styles.detail}><strong>Age:</strong> {age}</p>
      <p style={styles.detail}><strong>Contact:</strong> {contact}</p>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '1.5rem',
    margin: '1rem',
    borderRadius: '15px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '1.5rem',
    color: '#333',
    margin: '0.5rem 0',
  },
  detail: {
    fontSize: '1rem',
    color: '#555',
    margin: '0.3rem 0',
  },
  bio: {
    fontSize: '0.9rem',
    color: '#777',
    marginTop: '1rem',
    fontStyle: 'italic',
  },
};

export default PersonCard;
