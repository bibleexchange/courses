import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import { connect } from 'react-redux';
import { fetchCoursesIfNeeded } from '../actions/actions'

class Home extends Component {

componentDidMount(){
	this.props.dispatch(fetchCoursesIfNeeded())
}

shouldComponentUpdate(newProps){
	return newProps.courses !== this.props.courses
}

  render() {

  	if(this.props.courses !== false){

    return (
      <div id="home">

    <div className="hero-wrap js-fullheight" style={{"backgroundImage":"url('images/bg_1.jpg')"}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
          <div className="col-xl-10 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Bible exchange</h1>
            <p className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Your place for Bible knowledge sharing and discovery</p>

          </div>
        </div>
      </div>
    </div>

      <section className="ftco-section services-section bg-light">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-placeholder"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Venue</h3>
                <p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-world"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Transport</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>    
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-hotel"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Hotel</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-cooking"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Restaurant</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>
    
    <section className="ftco-counter img" id="section-counter">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 d-flex">
            <div className="img d-flex align-self-stretch" style={{"backgroundImage":"url('images/about.jpg')"}} ></div>
          </div>
          <div className="col-md-6 pl-md-5 py-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <span className="subheading">Fun Facts</span>
                <h2 className="mb-4"><span>Fun</span> Facts</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center py-4 bg-light mb-4">
                  <div className="text">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-guest"></span>
                    </div>
                    <strong className="number" data-number="30">0</strong>
                    <span>Speakers</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center py-4 bg-light mb-4">
                  <div className="text">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-handshake"></span>
                    </div>
                    <strong className="number" data-number="200">0</strong>
                    <span>Sponsor</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center py-4 bg-light mb-4">
                  <div className="text">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-chair"></span>
                    </div>
                    <strong className="number" data-number="2500">0</strong>
                    <span>Total Seats</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center py-4 bg-light mb-4">
                  <div className="text">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-idea"></span>
                    </div>
                    <strong className="number" data-number="40">0</strong>
                    <span>Topics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span className="subheading">Speaker</span>
            <h2 className="mb-4"><span>Our</span> Speakers</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ftco-animate">
            <div className="carousel-testimony owl-carousel">
              <div className="item">
                <div className="speaker">
                  <img src="images/speaker-1.jpg" className="img-fluid" alt="Colorlib HTML5 Template"/>
                  <div className="text text-center py-3">
                    <h3>John Adams</h3>
                    <span className="position">Web Developer</span>
                    <ul className="ftco-social mt-3">
                      <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="speaker">
                  <img src="images/speaker-2.jpg" className="img-fluid" alt="Colorlib HTML5 Template"/>
                  <div className="text text-center py-3">
                    <h3>Paul George</h3>
                    <span className="position">Web Developer</span>
                    <ul className="ftco-social mt-3">
                      <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="speaker">
                  <img src="images/speaker-3.jpg" className="img-fluid" alt="Colorlib HTML5 Template"/>
                  <div className="text text-center py-3">
                    <h3>James Smith</h3>
                    <span className="position">Web Developer</span>
                    <ul className="ftco-social mt-3">
                      <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="speaker">
                  <img src="images/speaker-4.jpg" className="img-fluid" alt="Colorlib HTML5 Template"/>
                  <div className="text text-center py-3">
                    <h3>Angelie Crawford</h3>
                    <span className="position">Web Developer</span>
                    <ul className="ftco-social mt-3">
                      <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="speaker">
                  <img src="images/speaker-5.jpg" className="img-fluid" alt="Colorlib HTML5 Template"/>
                  <div className="text text-center py-3">
                    <h3>Jackie Spears</h3>
                    <span className="position">Entrepreneur</span>
                    <ul className="ftco-social mt-3">
                      <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                      <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span className="subheading">Schedule</span>
            <h2 className="mb-4"><span>Event</span> Schedule</h2>
          </div>
        </div>
        <div className="ftco-search">
          <div className="row">
            <div className="col-md-12 nav-link-wrap">
              <div className="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link ftco-animate active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Day 01 <span>21 Dec. 2019</span></a>

                <a className="nav-link ftco-animate" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Day 02 <span>22 Dec. 2019</span></a>

                <a className="nav-link ftco-animate" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Day 03 <span>23 Dec. 2019</span></a>

                <a className="nav-link ftco-animate" id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="false">Day 04 <span>24 Dec. 2019</span></a>

              </div>
            </div>
            <div className="col-md-12 tab-wrap">
              
              <div className="tab-content" id="v-pills-tabContent">

                <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_1.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Introduction to Wordpress 5.0</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_2.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Best Practices For Programming WordPress</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_3.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Web Performance For Third Party Scripts</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_1.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Introduction to Wordpress 5.0</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_2.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Best Practices For Programming WordPress</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_3.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Web Performance For Third Party Scripts</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_1.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Introduction to Wordpress 5.0</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_1.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Best Practices For Programming WordPress</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_1.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Web Performance For Third Party Scripts</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-day-4-tab">
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_1.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Introduction to Wordpress 5.0</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_1.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Best Practices For Programming WordPress</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                  <div className="speaker-wrap ftco-animate d-flex">
                    <div className="img speaker-img" style={{"backgroundImage":"url('images/person_1.jpg')"}} ></div>
                    <div className="text pl-md-5">
                      <span className="time">08: - 10:00</span>
                      <h2><a href="#">Web Performance For Third Party Scripts</a></h2>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      <h3 className="speaker-name">&mdash; <a href="#">Brett Morgan</a> <span className="position">Founder of Wordpress</span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-4"><span>Happy</span> Clients</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                  <div className="user-img mb-4" style={{"backgroundImage":"url('images/person_1.jpg')"}} >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Roger Scott</p>
                    <span className="position">Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                  <div className="user-img mb-4" style={{"backgroundImage":"url('images/person_1.jpg')"}} >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Roger Scott</p>
                    <span className="position">Interface Designer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                  <div className="user-img mb-4" style={{"backgroundImage":"url('images/person_1.jpg')"}} >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Roger Scott</p>
                    <span className="position">UI Designer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                  <div className="user-img mb-4" style={{"backgroundImage":"url('images/person_1.jpg')"}} >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Roger Scott</p>
                    <span className="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap text-center py-4 pb-5">
                  <div className="user-img mb-4" style={{"backgroundImage":"url('images/person_1.jpg')"}} >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="name">Roger Scott</p>
                    <span className="position">System Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <span className="subheading">Pricing Tables</span>
            <h2 className="mb-1"><span>Our</span> Ticket Pricing</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ftco-animate">
            <div className="block-7">
              <div className="text-center">
              <h2 className="heading">Personal</h2>
              <span className="price"><sup>$</sup> <span className="number">85</span></span>
              <span className="excerpt d-block">per Month</span>
              
              <h3 className="heading-2 my-4">Enjoy All The Features</h3>
              
              <ul className="pricing-text mb-5">
                <li>Conference Seats</li>
                <li>Free Wifi</li>
                <li>Coffee Breaks</li>
                <li>Lunch</li>
                <li>Workshops</li>
                <li>One Speakers</li>
                <li>Papers</li>
              </ul>

              <a href="#" className="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 ftco-animate">
            <div className="block-7">
              <div className="text-center">
              <h2 className="heading">Small Team</h2>
              <span className="price"><sup>$</sup> <span className="number">200</span></span>
              <span className="excerpt d-block">per Month</span>
              
              <h3 className="heading-2 my-4">Enjoy All The Features</h3>
              
              <ul className="pricing-text mb-5">
                <li>Conference Seats</li>
                <li>Free Wifi</li>
                <li>Coffee Breaks</li>
                <li>Lunch</li>
                <li>Workshops</li>
                <li>One Speakers</li>
                <li>Papers</li>
              </ul>

              <a href="#" className="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 ftco-animate">
            <div className="block-7">
              <div className="text-center">
              <h2 className="heading">Family Pack</h2>
              <span className="price"><sup>$</sup> <span className="number">499</span></span>
              <span className="excerpt d-block">per Month</span>
              
              <h3 className="heading-2 my-4">Enjoy All The Features</h3>
              
              <ul className="pricing-text mb-5">
                <li>Conference Seats</li>
                <li>Free Wifi</li>
                <li>Coffee Breaks</li>
                <li>Lunch</li>
                <li>Workshops</li>
                <li>One Speakers</li>
                <li>Papers</li>
              </ul>

              <a href="#" className="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Our Blog</span>
            <h2><span>Recent</span> Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20" style={{"backgroundImage":"url('images/image_1.jpg')"}} >
              </a>
              <div className="text p-4 float-right d-block">
                <div className="d-flex align-items-center pt-2 mb-4">
                  <div className="one">
                    <span className="day">07</span>
                  </div>
                  <div className="two">
                    <span className="yr">2019</span>
                    <span className="mos">January</span>
                  </div>
                </div>
                <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20" style={{"backgroundImage":"url('images/image_2.jpg')"}} >
              </a>
              <div className="text p-4 float-right d-block">
                <div className="d-flex align-items-center pt-2 mb-4">
                  <div className="one">
                    <span className="day">07</span>
                  </div>
                  <div className="two">
                    <span className="yr">2019</span>
                    <span className="mos">January</span>
                  </div>
                </div>
                <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry">
              <a href="blog-single.html" className="block-20" style={{"backgroundImage":"url('images/image_3.jpg')"}} >
              </a>
              <div className="text p-4 float-right d-block">
                <div className="d-flex align-items-center pt-2 mb-4">
                  <div className="one">
                    <span className="day">06</span>
                  </div>
                  <div className="two">
                    <span className="yr">2019</span>
                    <span className="mos">January</span>
                  </div>
                </div>
                <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="ftco-section-parallax">
      <div className="parallax-img d-flex align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <h2>Subcribe to our Newsletter</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              <div className="row d-flex justify-content-center mt-4 mb-4">
                <div className="col-md-8">
                  <form action="#" className="subscribe-form">
                    <div className="form-group d-flex">
                      <input type="text" className="form-control" placeholder="Enter email address"/>
                      <input type="submit" value="Subscribe" className="submit px-3"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-gallery">
      <div className="container-wrap">
        <div className="row no-gutters">
          <div className="col-md-3 ftco-animate">
            <a href="images/image_1.jpg" className="gallery image-popup img d-flex align-items-center" style={{"backgroundImage":"url('images/image_1.jpg')"}} >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-3 ftco-animate">
            <a href="images/image_2.jpg" className="gallery image-popup img d-flex align-items-center" style={{"backgroundImage":"url('images/image_2.jpg')"}}>
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-3 ftco-animate">
            <a href="images/image_3.jpg" className="gallery image-popup img d-flex align-items-center" style={{"backgroundImage":"url('images/image_3.jpg')"}}>
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-3 ftco-animate">
            <a href="images/image_4.jpg" className="gallery image-popup img d-flex align-items-center" style={{"backgroundImage":"url('images/image_4.jpg')"}}>
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>   

	{this.props.courses.map(function(course, i){
		return <h2 key={i}><Link to={"/course/"+course.id}>{course.title}</Link></h2>
	})}
      </div>
    );

    }else if(this.props.hasError){
  		return (<div>{this.props.error}</div>)
  	}else{
  		return null
  	}

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  	courses: state.courses.data,
  	hasError: state.courses.hasError,
  	error: state.courses.error
  }
};

export default connect(
  mapStateToProps
)(Home);