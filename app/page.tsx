'use client';
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search submitted:', searchTerm);
  };

  return (
    <main style={mainStyle}>
      <header style={headerStyle}>
<h1>🔥 Hello from the flattened folder</h1>
        <p style={subtitleStyle}>
          Discover the world of celebrities — bios, news, tour dates, and more.
        </p>
        <form onSubmit={handleSearch} style={searchFormStyle}>
          <input
            type="text"
            placeholder="Search celebrities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyle}
          />
          <button type="submit" style={searchButtonStyle}>Search</button>
        </form>
      </header>

      {/* SPORTS SECTION */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>🏆 Sports</h2>
        <p style={sectionDesc}>Explore profiles of top athletes across these major sports:</p>
        <ul style={listStyle}>
          {['Football', 'Basketball', 'Tennis', 'Formula 1', 'Athletics', 'UFC / Boxing'].map((sport) => (
            <li key={sport} style={cardStyle}>
              <h3>{sport}</h3>
              <p>Top players, rankings, and upcoming events.</p>
            </li>
          ))}
        </ul>
      </section>

      {/* MUSIC SECTION */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>🎵 Music</h2>
        <p style={sectionDesc}>Discover artists by genre — prioritizing the most streamed and searched:</p>
        <ul style={listStyle}>
          {['Pop', 'Hip-Hop / Rap', 'K-Pop', 'Rock', 'Electronic', 'Latin / Reggaeton'].map((genre) => (
            <li key={genre} style={cardStyle}>
              <h3>{genre}</h3>
              <p>Artist bios, tour dates, and top chart releases.</p>
            </li>
          ))}
        </ul>
      </section>

      {/* FILM & TV SECTION */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>🎬 Film & TV</h2>
        <p style={sectionDesc}>Browse by profession:</p>
        <ul style={listStyle}>
          {['Actors', 'Directors', 'TV Personalities'].map((role) => (
            <li key={role} style={cardStyle}>
              <h3>{role}</h3>
              <p>Notable works, awards, and interviews.</p>
            </li>
          ))}
        </ul>
      </section>

      {/* COMING SOON */}
      <section style={{ ...sectionStyle, marginTop: '3rem' }}>
        <h2 style={sectionTitle}>🚧 Coming Soon</h2>
        <p style={sectionDesc}>
          We’re building dynamic AI-generated celebrity profiles, live updates, and personalized recommendations.
        </p>
      </section>
    </main>
  );
}

// --- Inline styles

const mainStyle = { fontFamily: 'Arial, sans-serif', padding: '2rem' };
const headerStyle = { textAlign: 'center', marginBottom: '3rem' };
const titleStyle = { fontSize: '3rem', margin: 0 };
const subtitleStyle = { fontSize: '1.2rem', color: '#666' };
const sectionStyle = { marginBottom: '3rem' };
const sectionTitle = { fontSize: '1.8rem', marginBottom: '0.5rem' };
const sectionDesc = { fontSize: '1rem', color: '#555', marginBottom: '1.5rem' };
const listStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
};
const cardStyle = {
  background: '#f9f9f9',
  padding: '1.2rem',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
  width: '220px',
};
const searchFormStyle = {
  marginTop: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
};
const searchInputStyle = {
  padding: '0.6rem 1rem',
  width: '300px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
};
const searchButtonStyle = {
  padding: '0.6rem 1.2rem',
  fontSize: '1rem',
  backgroundColor: '#111',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};


