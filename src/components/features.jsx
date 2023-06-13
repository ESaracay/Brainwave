import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="column">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="row-xs-6 row-md-3">
                  {" "}
                  <div className="row-xs-12 row-md-6">
                    <i className={d.icon}></i>
                  </div>
                  <div className="row-xs-12 row-md-6">
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
