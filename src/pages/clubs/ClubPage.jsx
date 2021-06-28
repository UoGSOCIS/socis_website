import React from 'react';
import { LearnMoreBtn } from '../../components';
import gcc from './gcc.jpg';

function ClubPage() {
  return (
    <div className="club">
      <div className="ClubPage" style={styles.page}>
        <div className="GCC" style={styles.club}>
          <div className="Picture" style={styles.picture}>
            <img
              src={gcc}
              alt="GCC logo"
              height="250vh"
              width="250vw"
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
        <div className="GWICS" style={styles.club}>
          <div className="GwicsPicture" style={styles.picture}>
            <img
              src={gcc}
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
        <br />
        <div className="DSC" style={styles.club}>
          <div className="DSC Picture" style={styles.picture}>
            <img
              src={gcc}
              alt="GCC logo"
              height="250vh"
              width="250vw"
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
      <div style={styles.preFooter} />
    </div>
  );
}

const styles = {
  page: {
    paddingTop: '2.0rem',
    paddingLeft: '2.0rem',
    paddingRight: '2.0rem',
    paddingBottom: '2.0rem',
    // height: '200vh',
  },
  club: {
    paddingBottom: '1.0rem',
    paddingTop: '1.0rem',
  },
  preFooter: {
    paddingBottom: '2.0rem',
    paddingTop: '2.0rem',
  },
  picture: {
    // width: '300vw',
    float: 'left',
    paddingRight: '2.0rem',
  },
  text: {
    // width: '50vw',
    // paddingLeft: '2.0rem',
    // paddingRight: '2.0rem',
  },
  button: {
    textAlign: 'center',
  },
  bStyle: {
    background: '#FD8900',
  },
};

export default ClubPage;
