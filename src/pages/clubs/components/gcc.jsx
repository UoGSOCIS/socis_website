import React from 'react';
import styled from 'styled-components';

function GCC() {
  return (
    <div style={{ paddingBottom: '1rem' }}>
      <Name>Guelph Coding Community (GCC)</Name>
      <Bio>
        The Guelph Coding Community (GCC) is a School of Computer Science Student Organization (SOCSSO) focused on
        providing students with valuable, hands-on, extracurricular tech skills which cannot normally be acquired
        through coursework.

        Founded in 2013, GCC facilitates student-run workshops, tutorials, demos, networking sessions, social nights,
        and presentations for students of all backgrounds and skill-levels. GCC workshops are designed by passionate
        students and guest speakers to teach all manner of new skills. We believe that we learn best from our peers, and
        want experienced students to help expand the skillsets of Guelph Coders.
      </Bio>
      <div style={{ textAlign: 'center' }}>
        <Link href="https://www.instagram.com/gcc_uog" target="_blank" rel="noreferrer">Instagram</Link>
      </div>
    </div>
  );
}

const Name = styled.p`
    font-size: 28px;
    text-align: center;
    margin-top: 10px;
    font-weight: 500;
`;

const Bio = styled.p`
    font-size: 20px;
    line-height: 1.625;
`;

const Link = styled.a`
    text-decoration: none;
    color: #000;
`;

export default GCC;
