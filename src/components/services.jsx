export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Progression</h2>
          <p>Concentration camp in Korla, Xinjiang from February 2016 to April 2019.</p>
          <a
            target="_blank"
            href="https://www.buzzfeednews.com/article/meghara/china-camps-prisons-xinjiang-muslims-size"
          >
            <img src="img/progression.gif" className="service-img" />
          </a>
          <p>
            <br /> <br />
            Buildings in all identified concentration camps across Xinjiang before and after April
            2017.
          </p>
          <a
            target="_blank"
            href="https://www.reuters.com/investigates/special-report/muslims-camps-china/"
          >
            <img src="img/chart.png" className="service-img" />
          </a>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
