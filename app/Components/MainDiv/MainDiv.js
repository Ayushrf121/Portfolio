// "use client"
import React from 'react';
import Section1 from '../Main_Sections/Section1';
import Section2 from '../Main_Sections/Section2';
import Border from '../Border';
import ProjectGallery from '../Project_Gallery/ProjectGallery';
export default function MainDiv() {
  return (
    <main id='home'>
      <Section1/>
      <Border/>
      <Section2/>
      <Border/>
      <ProjectGallery/>
      <Border/>
    </main>
  );
}