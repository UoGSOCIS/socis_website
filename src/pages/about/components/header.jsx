import React from 'react';

function Header() {
  return (
    <div className="AboutHeader" style={styles.header}>
      <h1>We are the Society of Computing and Information Sciences</h1>
      <p>
        The Society of Computing and Information Science (SOCIS) is here to represent all School of Computer
        Science (SOCS) students, this includes those enrolled in computer science, software engineering, the
        general computing degree, and all minors. We represent the students in SOCS council meetings, which has
        far reaching effects on important topics like curriculum, and in the College of Engineering and Physical
        Science Student Council (CEPSSC) meetings.
      </p>
      <p>
        SOCIS also runs events throughout the year including o-week, social nights, community building events,
        weekly Guelph Coding Community (GCC) technical events, as well as a hackathon on Local Hack Day. We also
        represent the University of Guelph at CS games, a collegiate competition that includes challenges from
        all aspects of computing.
      </p>
      <p>
        If you would like to more know, please
        {' '}
        <a href="/contact" style={styles.link}>reach out</a>
        .
      </p>
    </div>
  );
}

const styles = {
  header: {
    textAlign: 'left',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
};

export default Header;
