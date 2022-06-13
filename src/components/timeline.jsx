import "./timeline.css";

export const Timeline = (props) => {
  return (
    <section id="history">
      <div class="container">
        <div class="section-heading wow fadeIn">
          <h2>History</h2>
          <div class="heading-separator"></div>
        </div>
        <div class="row">
          <div class="history-wrapper">
            <div class="title-wrap text-center one-of-two">
              <h2 class="h1 text-secondary mb-0 text-uppercase"></h2>
              <p class="fs-3 font-weight-500"></p>
            </div>
            <div class="timeline-box one-of-two">
              <img
                class="mb-1-6 rounded"
                src="img/chinaRevolution.jpeg"
                alt="..."
                className="timeline-pics"
              />
              <div class="content">
                <h3 class="h4 mb-2 mb-md-3">Xinjiang Becomes A Part of China</h3>
                <p class="mb-0">
                  After the communist party takes over China, they gain control of the Xinjiang
                  region through political debate.
                </p>
              </div>
              <div class="year">1949</div>
            </div>
            <div class="timeline-box one-of-two">
              <img
                class="mb-1-6 rounded"
                src="img/urumqiRiots.jpeg"
                alt="..."
                className="timeline-pics"
              />
              <div class="content">
                <h3 class="h4 mb-2 mb-md-3">Urumqi Riots</h3>
                <p class="mb-0">
                  Large riots take place in Xinjiang’s capital, Urumqi. The riots were conducted by
                  mainly Uyghurs with the purpose of fighting against Han Chinese migration into
                  Xinjiang as well as cultural and economic discrimination towards Muslims. Nearly
                  200 people were killed in these riots.
                </p>
              </div>
              <div class="year">2009</div>
            </div>
            <div class="timeline-box one-of-two">
              <img
                class="mb-1-6 rounded"
                src="img/2014detainment.jpeg"
                alt="..."
                className="timeline-pics"
              />
              <div class="content">
                <h3 class="h4 mb-2 mb-md-3">Detainment Begins</h3>
                <p class="mb-0">
                  “Education Training Centers” are built throughout Xinjiang and the police begins
                  to detain Muslims.
                </p>
              </div>
              <div class="year">2014</div>
            </div>
            <div class="timeline-box one-of-two">
              <img
                class="mb-1-6 rounded"
                src="img/2017detainment.jpeg"
                alt="..."
                className="timeline-pics"
              />
              <div class="content">
                <h3 class="h4 mb-2 mb-md-3">Detainment Expands</h3>
                <p class="mb-0">
                  Facilities significantly expand and the police detain Muslims at a more rapid
                  rate.
                </p>
              </div>
              <div class="year">2017</div>
            </div>
            <div class="timeline-box one-of-two">
              <img
                class="mb-1-6 rounded"
                src="img/footage.jpeg"
                alt="..."
                className="timeline-pics"
              />
              <div class="content">
                <h3 class="h4 mb-2 mb-md-3">The World Takes Notice</h3>
                <p class="mb-0">
                  The footage gets leaked outside of China which attracts the media’s attention.
                </p>
              </div>
              <div class="year">2020</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<script type="text/javascript"></script>;
