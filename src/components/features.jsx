import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="row">
        <div className="col section-title">
          <h2>Features</h2>
        </div>
        <div className="container">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="row-md-12 feature_row" >
                  {" "}
                  <div className="col-xs-12 col-md-8">
                    <img alt="feature" src={d.image} height="45%" />
                  </div>
                  <div className="col-xs-12 col-md-4 feature-descript">
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
