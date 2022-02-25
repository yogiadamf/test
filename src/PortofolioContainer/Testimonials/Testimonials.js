import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import Slider from "react-slick";
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Testimonials.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
          <Slider {...settings}>
          <div>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./image/beras.png" />
                <Card.Body>
                  <Card.Title>Web Forecasting Rice Price</Card.Title>
                  <Card.Text>
                  Forecasting rice prices in western Indonesia using a panel data regression approach
                  </Card.Text>
                  <a href="https://peramalanhargaberas.my.id/">
                  <button className='button highlighted-button'>Details</button>
                  </a>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./image/sloorin.png" />
                <Card.Body>
                  <Card.Title>Web Reservations Sloor.in</Card.Title>
                  <Card.Text>
                  A place and food reservation website for cafe sloor.in in the Lamongan area. with laravel framework
                  </Card.Text>
                  <a href="https://github.com/yogiadamf/Reservasi-tempat-caffe-sloor.in">
                  <button className='button highlighted-button' >Details</button ></a>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./image/cita.png" />
                <Card.Body>
                  <Card.Title>App Cita-Citaku</Card.Title>
                  <Card.Text>
                  My ideals application is an application for the introduction of various kinds of ideals
                  </Card.Text>
                  <a href="https://github.com/yogiadamf/App-Cita-citaku">
                  <button className='button highlighted-button' >Details</button></a>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./image/search.png" />
                <Card.Body>
                  <Card.Title>Search Repository</Card.Title>
                  <Card.Text>
                  The thesis title search system using the boolean retrieval method with the python programming language
                  </Card.Text>
                  <a href="https://github.com/yogiadamf/Sistem-Temu-Kembali-Pencarian-Judul-Skripsi-dengan-Boolean-Retrieval">
                  <button className='button highlighted-button'>Details</button></a>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./image/sign.png" />
                <Card.Body>
                  <Card.Title>Traffic Sign Classifications</Card.Title>
                  <Card.Text>
                  Implementation of deep learning in traffic sign classification with python programming language
                  </Card.Text>
                  <a href="https://github.com/yogiadamf/Klasisfikasi-Rambu-Lalu-Lintas-dengan-deep-Learning">
                  <button className='button highlighted-button' >Details</button></a>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src="./image/ui.png" />
                <Card.Body>
                  <Card.Title>Design UI & UX My UISI</Card.Title>
                  <Card.Text>
                  user interface and user experience design for My UISI application development
                  </Card.Text>
                  <a href="https://github.com/yogiadamf/Klasisfikasi-Rambu-Lalu-Lintas-dengan-deep-Learning">
                  <button className='button highlighted-button' >Details</button></a>
                </Card.Body>
              </Card>
            </div>
        
          </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
