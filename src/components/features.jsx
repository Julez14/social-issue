export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        {/* <div className="col-md-10 col-md-offset-1 section-title"></div> */}
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4">
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <h3 className="featuresHeading">{d.title}</h3>
                  <p className="featuresBody">{d.text}</p>
                  <a clssName="featuresBody" href={d.link}>
                    {d.linkText}
                  </a>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
