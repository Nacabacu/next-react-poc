// "use client"
import React, { FC } from 'react';
import { AboutUs } from './sections/AboutUs';
import { Contact } from './sections/Contact';
import { Gallery } from './sections/Gallery';
import { MastHead } from './sections/MastHead';
import { NavBar } from './sections/NavBar';
import { Reviewers } from './sections/Reviewers';
// import '../../shared/globals.css'
import './style.css';
import dynamic from 'next/dynamic';
import { BusinessData } from '@/types/business';

interface IAppProps {
  businessData: BusinessData;
}

export const CreativeTemplate: FC<IAppProps> = (props) => {
  const TemplateSetting = dynamic(() => import('./Setting'), {
    ssr: false,
  });
  return (
    <div>
      <TemplateSetting />
      <NavBar businessData={props.businessData} />
      <MastHead businessData={props.businessData} />
      <AboutUs businessData={props.businessData} />
      <Reviewers businessData={props.businessData} />
      <Gallery />
      <Contact businessData={props.businessData} />
    </div>
  );
};
