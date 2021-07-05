import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesSplitErr from '../components/sections/FeaturesSplitErr';
import ConfigCentralization from '../components/sections/ConfigCentralization';
import ConfigUpdated from '../components/sections/ConfigUpdated';
// import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/* <FeaturesTiles /> */}
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <ConfigCentralization invertMobile topDivider imageFill className="illustration-section-02" />
      <ConfigUpdated invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesSplitErr invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;