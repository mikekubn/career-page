import Company from 'app/components/Company';
import Contact from 'app/components/Contact';
import React from 'react';

const Cooperation = (): React.ReactElement => (
  <section className="flex flex-1 flex-col justify-center items-center">
    <Company />
    <Contact />
  </section>
);

export default Cooperation;
