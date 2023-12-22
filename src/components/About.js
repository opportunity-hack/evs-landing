import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from "react-ga4";
import ReactPixel from 'react-facebook-pixel';
ReactGA.initialize('G-P1RXRKKWZQ');
ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });

ReactPixel.init('1486163205287134');
ReactPixel.pageView();
ReactPixel.trackCustom('ViewContent', {
    content_name: 'About Page View',
    content_category: 'About Page',
    content_ids: ['1235'],
    content_type: 'page',
    value: 0.0,
    currency: 'USD'
    }
);
// Define the styles for the component
const styles = {
  about: {
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
    width: '600px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
};


function About() {
  return (
    <div className="About" style={styles.about}>
      {/* Add a title and a subtitle for the component */}
      <h1 className="title" style={styles.title}>
        About Us
      </h1>
      <h2 className="subtitle" style={styles.subtitle}>
        Who we are and what we do
      </h2>
      {/* Add SEO meta tags using react-helmet */}
      <Helmet>
        <title>About Us - Equestrian Volunteer Scheduler</title>
        <meta
          name="description"
          content="Learn more about The Barn at Tumbling T Ranch and their volunteer program."
        />
        <meta
          name="keywords"
          content="equestrian, volunteer, scheduler, software, application, barn, tumbling, ranch, girard, training, stables, equine, therapy, riding, lessons, hippotherapy, adaptive"
        />
      </Helmet>      
      {/* Add some paragraphs with information about The Barn and their volunteer program */}
      <p className="paragraph" style={styles.paragraph}>
        The Barn at Tumbling T Ranch (formerly Girard Training Stables) is a
        non-profit equine program that offers traditional and adaptive riding
        lessons, equine therapy, and hippotherapy to people of all ages and
        abilities. The Barn is located in Phoenix, Arizona, and has been
        serving the community since 1985.
      </p>
      {/* Add an image of The Barn */}
      <img
        src="https://i.imgur.com/hJJeVIA.jpg"
        alt="The Barn at Tumbling T Ranch"
        className="image"
        style={styles.image}
      />
      <p className="paragraph" style={styles.paragraph}>
        The Barn's mission is to provide a safe, fun, and supportive environment
        where people can learn, grow, and heal through the power of horses. The
        Barn's programs are designed to improve the physical, mental, emotional,
        and social well-being of their clients, as well as to foster a positive
        relationship between humans and animals.
      </p>
      <p className="paragraph" style={styles.paragraph}>
        The Barn relies on the generosity and dedication of its volunteers, who
        assist with various tasks such as grooming, tacking, leading,
        sidewalking, barn chores, and fundraising . The Barn's
        volunteers are an essential part of their team, and they make a huge
        difference in the lives of their clients and horses. The Barn welcomes
        volunteers of all backgrounds and experience levels, and provides
        training and orientation for new volunteers.
      </p>
      <p className="paragraph" style={styles.paragraph}>
        Equestrian Volunteer Scheduler is a software application designed to
        help The Barn manage their volunteer program more efficiently and
        effectively. Equestrian Volunteer Scheduler allows volunteers to create
        their own profiles, view their schedules, sign up for open shifts,
        receive notifications, and track their hours. It also allows The Barn
        staff to assign volunteers to different roles, monitor their
        availability and qualifications, communicate with them, and generate
        reports. Equestrian Volunteer Scheduler is easy to use, customizable,
        and secure. It helps The Barn save time, reduce errors, and improve the
        quality of their volunteer program.
      </p>
    </div>
  );
}

export default About;
