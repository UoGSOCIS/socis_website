import React from 'react';
import gwics from '../assets/gwics.jpg';
import { LearnMoreBtn } from '../../../components/buttons';

function GWICS() {
  return (
    <div className="GWICS" style={styles.club}>
      <div className="GwicsPicture" style={styles.picture}>
        <img
          src={gwics}
          alt="GCC logo"
          height="250vh"
          width="250vw"
        />
      </div>
      <div className="GWICS Blurb" style={styles.text}>
        <h1>Guelph Women in Computer Science</h1>
        <p>
          This should be a description of the Guelph Coding Community that includes
          information about the Guelph Coding Community such as what they do, a bit
          about their history, some of their events, other filler information because I
          dont want to think about what to write here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus tempus congue libero ac tempor. Integer pretium at nunc et
          vulputate. Pellentesque fringilla sagittis quam.
        </p>
        <div style={styles.button}>
          <LearnMoreBtn href="/Learn More" color="#FD8900" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  club: {
    paddingBottom: '1.0rem',
    paddingTop: '1.0rem',
  },
  picture: {
    float: 'left',
    paddingRight: '2.0rem',
  },
  button: {
    textAlign: 'center',
  },
};

export default GWICS;
