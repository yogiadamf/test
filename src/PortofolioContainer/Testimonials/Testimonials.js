import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./Testimonials.css";
import sloorin from "../../../src/img/Testimonial/sloorin.png";
import network from "../../../src/img/Testimonial/net.png";
import sign from "../../../src/img/Testimonial/sign.png";
import search from "../../../src/img/Testimonial/search.png";
import cita from "../../../src/img/Testimonial/cita.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Works"}
        subHeading={"Check Out Some of My Works."}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                  <img src={sloorin} alt="no internet connection"></img>
                  </div>
                  <div className="client-info">
                    <h5>Web Reservations</h5>
                    <p>Caffe Sloor.in</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                  <img src={cita} alt="no internet connection"></img>
                  </div>
                  <div className="client-info">
                    <h5>App Cita-Citaku</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                  <img src={sign} alt="no internet connection"></img>
                  </div>
                  <div className="client-info">
                    <h5>Traffic Sign Classification</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                  <img src={search} alt="no internet connection"></img>
                  </div>
                  <div className="client-info">
                    <h5>Search Repository</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                  <img src={network} alt="no internet connection"></img>
                  </div>
                  <div className="client-info">
                    <h5>Network Design</h5>
                    <p>CV. Barokah ZA</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
