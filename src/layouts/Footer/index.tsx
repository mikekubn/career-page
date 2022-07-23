import React from 'react';

const Footer = (): React.ReactElement => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full h-28 bottom-0 left-0" id="footer-content">
      <section className="w-1/2 flex flex-col h-full mx-auto border-t text-center justify-center mb-10">
        <p>👋🏻 Created by Michael Kubín</p>
        <p>© {year}</p>
      </section>
    </footer>
  );
};

export default Footer;
