import React from 'react';

export const Footer = () => {
  const lastUpdated = "June 12, 2023"; // Replace with the actual last updated date

  return (
    <footer className='Footer'>
      <p>Last day the website was updated: {lastUpdated}</p>
    </footer>
  );
}
