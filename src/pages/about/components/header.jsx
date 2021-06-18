import React from 'react';

function Header() {
  return (
    <div className="AboutHeader" style={styles.header}>
      <h1>We are the Society of Computing and Information Sciences</h1>
      <p>
        Hello world
      </p>
      <p>
        Computer Science students have a voice inside the department and that voice is SOCIS. At least one of our
        executives is at every department meeting to give student input on the topics discussed. This has far
        reaching effects on important topics like the future curriculum provided to CS and S. ENG majors.
      </p>
      <p>
        In addition, we also help the department to run events like the annual SOCS barbeque held every year in
        September to help welcome first year CS students to the University.
      </p>
    </div>
  );
}

const styles = {
  header: {
    textAlign: 'left',
  },
};

export default Header;
