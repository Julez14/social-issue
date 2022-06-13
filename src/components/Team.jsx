export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Resources</h2>
          <a href="https://uhrp.org/donate/" target="_blank">
            https://uhrp.org/donate/
          </a>
          <p>Donate to UHRP, an organization aiming to expose more information of the issue.</p>
          <a href="https://www.saveuighur.org/" target="_blank">
            https://www.saveuighur.org/
          </a>
          <p>Provides more information and ways you can help.</p>
          <a href="https://www.launchgood.com" target="_blank">
            https://www.launchgood.com
          </a>
          <p>Donate to support orphans who have escaped China.</p>
          <a
            href="https://www.cfr.org/backgrounder/chinas-repression-uyghurs-xinjiang"
            target="_blank"
          >
            https://www.cfr.org/backgrounder/chinas-repression-uyghurs-xinjiang
          </a>
          <p>Read this detailed article to become more educated on the issue.</p>
        </div>
        {/* <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
