import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Live Demo</h2>
        </div>
        <div className="row">
          <iframe width="800px" height="600px" src="https://www.youtube.com/embed/6kP3--VBP2M?si=AEK1OEcjxqQ7uDga" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="800px" height="600px" src="https://www.youtube.com/embed/6otTM5kZHC8?si=OsgWejG18alovPZX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};
