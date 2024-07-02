import React, { FC } from 'react';
import { AboutUs } from './sections/AboutUs';
import { Contact } from './sections/Contact';
import { Gallery } from './sections/Gallery';
import { MastHead } from './sections/MastHead';
import { NavBar } from './sections/NavBar';
import { Reviewers } from './sections/Reviewers';
// import '../../shared/globals.css'
import './style.css';

interface IAppProps {}

export const CreativeTemplate: FC<IAppProps> = () => {
  return (
    <div>
      <NavBar />
      <MastHead />
      <AboutUs />
      <Reviewers />
      <Gallery />
      <Contact />
    </div>
  );
};
