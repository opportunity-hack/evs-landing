import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';

/*

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
*/

// Define the standard color palette for the app
const colors = {
  primary: '#4CAF50', // green
  secondary: '#FFC107', // amber
  accent: '#FF5722', // deep orange
  background: '#F5F5F5', // grey
  text: '#212121', // black
};

// Define the global styles for the app
const styles = {
  app: {
    fontFamily: 'Roboto, sans-serif',
    color: colors.text,
    backgroundColor: colors.background,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    backgroundColor: colors.primary,
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '8px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    padding: '8px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: colors.secondary,
    },
  },
  main: {
    padding: '16px',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    backgroundColor: colors.primary,
    color: 'white',
  },
};

function App() {
  return (    
    <div className="App" style={styles.app}>      
      {/* Add SEO meta tags using react-helmet */}
      <Helmet>
        <title>Equestrian Volunteer Scheduler</title>
        <meta
          name="description"
          content="Equestrian Volunteer Scheduler is a software application designed to help The Barn at Tumbling T Ranch manage their volunteer program more efficiently and effectively."
        />
        <meta
          name="keywords"
          content="equestrian, volunteer, scheduler, software, application, barn, tumbling, ranch, girard, training, stables, equine, therapy, riding, lessons, hippotherapy, adaptive"
        />
      </Helmet>
      {/* Add a header with a logo and a navigation menu */}
      <header style={styles.header}>
        <div className="logo" style={styles.logo}>
          Equestrian Volunteer Scheduler
        </div>
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>
            Home
          </a>
          <a href="/about" style={styles.link}>
            About
          </a>          
        </nav>
      </header>
      {/* Add a main section with a router and a switch for different components */}
      <main style={styles.main}>
        <Router>
          <Routes>
            {
              /*
            }
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
            {
              */
            }
            <Route exact path="/" Component={Home} />            
            <Route path="/about" Component={About} />            
          </Routes>
        </Router>
      </main>
      {/* Add a footer with a disclaimer */}
      <footer style={styles.footer}>
        <p>
          This is a demo app for educational purposes only. It is not affiliated
          with or endorsed by The Barn at Tumbling T Ranch (formerly Girard
          Training Stables).
        </p>
      </footer>
    </div>
  );
}

export default App;
