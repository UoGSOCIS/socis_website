import React from 'react';
import { NavBar, Footer, LearnMoreBtn } from '../../components';
import gcc from './gcc.jpg';

function ClubPage() {
  return (
    <div className="club">
      <NavBar />
      <div className="ClubPage" style={styles.page}>
        <div className="GCC">
          <div className="Picture" style={styles.picture}>
            <img
              src={gcc}
              alt="GCC logo"
              height="250"
              width="250"
            />
          </div>
          <div className="GCC Blurb" style={styles.text}>
            <h1>Guelph Coding Community</h1>
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
        <br />
        <div className="GWICS">
          <div className="GwicsPicture" style={styles.picture}>
            <img
              src={gcc}
              alt="GCC logo"
              height="250"
              width="250"
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
        <br />
        <div className="GWICS">
          <div className="GwicsPicture" style={styles.picture}>
            <img
              src={gcc}
              alt="GCC logo"
              height="250"
              width="250"
            />
          </div>
          <div className="DSC Blurb" style={styles.text}>
            <h1>Developer Student Club</h1>
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
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    paddingTop: 25,
    paddingLeft: 75,
    paddingRight: 75,
    paddingBottom: 25,
    height: 1000,
  },
  picture: {
    width: 300,
    float: 'left',
  },
  text: {
    width: 1000,
  },
  button: {
    textAlign: 'center',
  },
  bStyle: {
    background: '#FD8900',
  },
};

export default ClubPage;
