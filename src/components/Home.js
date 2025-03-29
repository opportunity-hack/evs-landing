import React from 'react';
import { Helmet } from 'react-helmet';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from "react-ga4";
import { TextField, Button, Typography } from '@mui/material';
// Load from .env file for this React app

const BACKEND_URL = process.env.REACT_APP_BACKEND_API;

ReactGA.initialize('G-P1RXRKKWZQ');
ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });


ReactPixel.trackCustom('ViewContent', {
    content_name: 'Home Page View',
    content_category: 'Home Page',
    content_ids: ['1234'],
    content_type: 'page',
    value: 0.0,
    currency: 'USD'
    }
);

// Define the styles for the component
const styles = {
  home: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: 'normal',
  },
  paragraph: {
    fontSize: '16px',
    fontWeight: 'normal',
    textAlign: 'justify',
    maxWidth: '800px',
  },
  image: {
    width: '800px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

const trackTellMeMore = () => {            
    // Call POST localhost:3001/api when the button is clicked
    fetch(BACKEND_URL, {
        method: 'POST',
    })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        })
        .catch((error) => {
        console.error(error);
        });
    
    ReactGA.event({
        category: 'Button',
        action: 'Tell Me More Clicked',
        label: 'Tell Me More Button',
    });
    
    ReactPixel.trackCustom('TellMeMore', {
        content_name: 'Tell Me More Button Clicked',
        content_category: 'Tell Me More Button',
        content_ids: ['1234'],
        content_type: 'button',
        value: 0.0,
        currency: 'USD'
        }
    );
    }    

function Home() {
  return (    
    <div className="Home" style={styles.home}>       
      {/* Add a title and a subtitle for the component */}
      <h1 className="title" style={styles.title}>
        Welcome to Equestrian Volunteer Scheduler
      </h1>
      <h2 className="subtitle" style={styles.subtitle}>
        A software application built for The Barn at Tumbling T Ranch by
        Opportunity Hack
      </h2>
      {/* Add SEO meta tags using react-helmet */}
      <Helmet>
        <title>Home - Equestrian Volunteer Scheduler</title>
        <meta
          name="description"
          content="Equestrian Volunteer Scheduler is a software application built for The Barn at Tumbling T Ranch by Opportunity Hack."
        />
      </Helmet>
      
      {/* Add some paragraphs with information about Opportunity Hack and the application */}
      <p className="paragraph" style={styles.paragraph}>
        <a href="https://ohack.dev">Opportunity Hack</a> is a global community of volunteers who use their
        skills and passion to create positive social impact. Opportunity Hack
        organizes hackathons, workshops, and mentorship programs to empower
        non-profit organizations and social enterprises with innovative
        solutions that address their challenges and opportunities.
      </p>
      <picture>
        <source 
          media="(max-width: 768px)"
          srcSet="https://i.imgur.com/Ih0mbYx.png?w=400&q=80"
          type="image/webp"
        />
        <source 
          media="(min-width: 769px)"
          srcSet="https://i.imgur.com/Ih0mbYx.png?w=800&q=90"
          type="image/webp"
        />
        <source 
          media="(max-width: 768px)"
          srcSet="https://i.imgur.com/Ih0mbYx.png?w=400&q=80"
          type="image/png"
        />
        <source 
          media="(min-width: 769px)"
          srcSet="https://i.imgur.com/Ih0mbYx.png?w=800&q=90"
          type="image/png"
        />
        <img
          src="https://i.imgur.com/Ih0mbYx.png"
          alt="Opportunity Hack logo"
          className="image"
          width={400}
          height={200}
          style={{
            ...styles.image,
            maxWidth: '100%',
            height: 'auto',
            width: 'auto',
            aspectRatio: '2/1'
          }}
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <p className="paragraph" style={styles.paragraph}>
        Equestrian Volunteer Scheduler is one of the projects that was developed
        by a team of <a target='_blank' rel='noreferrer'  href="https://ohack.dev/nonprofit/89076bcc077811edbfdeb29c4ac23549">Opportunity Hack volunteers during the 2020 Opportunity
        Hackathon</a> . The team collaborated with The Barn
        at Tumbling T Ranch (formerly Girard Training Stables), a non-profit
        equine program that offers traditional and adaptive riding lessons,
        equine therapy, and hippotherapy to people of all ages and abilities.
      </p>
      {
        // Add a tell me more button that links to the About page
      }
        <a
            href="/about"
            onClick={trackTellMeMore}
            style={{
            textDecoration: 'none',
            backgroundColor: '#5cad00',
            color: 'white',
            padding: '10px',
            fontSize: '20px',
            width: '150px',
            textAlign: 'center',
            
            borderRadius: '4px',
            '&:hover': {
                backgroundColor: '#ff5983',
            },
            }}
        >
            Tell Me More
        </a>

      
      <p className="paragraph" style={styles.paragraph}>
        <h2>Improving the Volunteer Management System</h2>
        The Barn's challenge was to manage their volunteer program more
        efficiently and effectively. The Barn relies on the generosity and
        dedication of its volunteers, who assist with various tasks such as
        grooming, tacking, leading, sidewalking, barn chores, and fundraising.
        However, The Barn did not have a centralized system to schedule,
        communicate, and track their volunteers, and relied on manual methods
        such as phone calls, emails, spreadsheets, and paper forms .
      </p>
      <p className="paragraph" style={styles.paragraph}>
        <h2>Equestrian Volunteer Scheduler: A Software Solution for The Barn's Volunteer Program</h2>
        The team's solution was to create Equestrian Volunteer Scheduler, a
        software application that allows volunteers to create their own
        profiles, view their schedules, sign up for open shifts, receive
        notifications, and track their hours. It also allows The Barn staff to
        assign volunteers to different roles, monitor their availability and
        qualifications, communicate with them, and generate reports. Equestrian
        Volunteer Scheduler is easy to use, customizable, and secure. It helps
        The Barn save time, reduce errors, and improve the quality of their
        volunteer program.
      </p>
      <p className="paragraph" style={styles.paragraph}>
        <h2>How It Works</h2>
        Equestrian Volunteer Scheduler is built using React, a popular
        JavaScript library for building user interfaces. It also uses
        react-helmet, a library that helps manage the document head of the React
        app, and react-router-dom, a library that provides routing functionality
        for the React app. The app is deployed on fly.io, a platform that
        provides fast and scalable hosting for web applications  
        .
      </p>
    </div>
  );
}

export default Home;