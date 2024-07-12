import { Component } from "react";
// import logo from "./Assests/logo192.png";

export default class About extends Component {
  render() {
    return (
      <>
        <div style={{ background: "#27323E" }}>
          <nav className="navbar">
            <div className="container-fluid">
              <a className="navbar-brand m-2 fs-3 fw-bold text-light">
                Beans <span>Studios</span>
              </a>
              <img
                src={require("./Assests/icon.png")}
                style={{ width: "70px" }}
                className="m-2 pe-3"
              />
            </div>
          </nav>
          <div className="container text-left text-light mt-5 p-5 ">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="btn mb-1 text-light p-3 ps-4 pe-4 mt-4 mb-3  rounded-top-0 rounded-end-circle rounded-5">
                  Hello, I'm
                </div>
                <h1 className="fw-bold mb-3">Mr. Beans</h1>
                <p className="fw-bold mb-4">
                  FULL-STACK DEVELOPER | UX/UI DESIGNER | FREELANCER
                </p>
                <div className="icons d-flex mt-2 mb-5 pe-auto text-light">
                  <i className="fa-brands fa-twitter pe-3 fs-4"></i>
                  <i className="fa-brands fa-behance pe-3 fs-4"></i>
                  <i className="fa-brands fa-facebook pe-3 fs-4"></i>
                  <i className="fa-brands fa-pinterest pe-3 fs-4"></i>
                </div>
                <div className="btn text-light p-2 fw-bold mb-5 rounded-pill">
                  Download CV
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 text-md-end">
                <img
                  src={require("./Assests/images-removebg-preview (1).png")}
                  className="h-51 w-50"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="about bg-dark">
            <div class="container text-light p-5">
              <div class="row">
                <div class="col-lg-6 col-sm-12 text-left">
                  <img
                    src={require("./Assests/person1.jpg")}
                    class="w-50 border border-2 border-danger text-center rounded-top-circle"
                    alt=""
                  />
                  <h2 class="fw-bold mb-4 m-3 p-2">
                    <span class="fs-5 ms-5">Certifications</span>
                    <br />
                    Irael Gonzalez
                  </h2>
                </div>

                <div class="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
                  <div>
                    <h1 class="fw-bold mb-4 p-relative title">About me</h1>
                    <p class="fw-bold mb-4 fs-5">
                      I'm Israel Gonzalez, I'm 27 years old, I currently work
                      independently as a fullstack, UX|UI designer and video
                      game designer.
                    </p>
                    <p class="fw-bold mb-4 fs-5">
                      I currently have a video game studio where I spend my time
                      mixing ideas from all my work to generate quality stories
                      that everyone can enjoy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div>
              <h1 className="text-center fw-bold m-3 text-light mb-5 pb-5 titles">
                My services
              </h1>
            </div>
            <div className="container text-center text-light">
              <div className="row justify-content-between">
                <div className="col-lg-4 col-sm-12 mb-5">
                  <div className="row justify-content-center">
                    <div className="col-8">
                      <h1 className="fs-1">PHOTOGRAPHY</h1>
                      <p className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt doloremque excepturi sit odit impedit,
                        voluptas.
                      </p>
                    </div>
                    <div className="col-4">
                      <i className="fa-solid fa-chalkboard-user border border-3 border-danger p-2 fs-3 fw-bold rounded-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mb-5">
                  <div className="row justify-content-center">
                    <div className="col-4">
                      <i className="fa-solid fa-chalkboard-user border border-3 border-danger p-2 fs-3 fw-bold rounded-circle"></i>
                    </div>
                    <div className="col-8">
                      <h1>PHOTOGRAPHY</h1>
                      <p className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt doloremque excepturi sit odit impedit,
                        voluptas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-lg-4 col-sm-12 mb-5">
                  <div className="row justify-content-center">
                    <div className="col-8">
                      <h1 className="fs-1">PHOTOGRAPHY</h1>
                      <p className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt doloremque excepturi sit odit impedit,
                        voluptas.
                      </p>
                    </div>
                    <div className="col-4">
                      <i className="fa-solid fa-chalkboard-user border border-3 border-danger p-2 fs-3 fw-bold rounded-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mb-5">
                  <div className="row justify-content-center">
                    <div className="col-4">
                      <i className="fa-solid fa-chalkboard-user border border-3 border-danger p-2 fs-3 fw-bold rounded-circle"></i>
                    </div>
                    <div className="col-8">
                      <h1>PHOTOGRAPHY</h1>
                      <p className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt doloremque excepturi sit odit impedit,
                        voluptas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-lg-4 col-sm-12 mb-5">
                  <div className="row justify-content-center">
                    <div className="col-8">
                      <h1 className="fs-1">PHOTOGRAPHY</h1>
                      <p className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt doloremque excepturi sit odit impedit,
                        voluptas.
                      </p>
                    </div>
                    <div className="col-4">
                      <i class="fa-solid fa-chalkboard-user border border-3 border-danger p-2 fs-3 fw-bold rounded-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12 mb-5">
                  <div class="row justify-content-center">
                    <div class="col-4">
                      <i class="fa-solid fa-chalkboard-user border border-3 border-danger p-2 fs-3 fw-bold rounded-circle"></i>
                    </div>
                    <div class="col-8">
                      <h1>PHOTOGRAPHY</h1>
                      <p class="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt doloremque excepturi sit odit impedit,
                        voluptas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfile pt-5 bg-dark">
            <h1 className="text-center fw-bold m-3 text-light mb-5 pb-5 titles">
              Portfolio
            </h1>
            <div className="row p-0 m-0">
              <div className="col-lg-2 p-0">
                <img
                  src={require("./Assests/Portfolio.png")}
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-lg-2 p-0">
                <img
                  src={require("./Assests/Portfolio1.png")}
                  className="w-100 im"
                  alt=""
                />
                <img
                  src={require("./Assests/Portfolio3.png")}
                  className="w-100 im"
                  alt=""
                />
              </div>
              <div class="col-lg-4 p-0">
                <img
                  src={require("./Assests/portfolio4.png")}
                  className="w-100"
                  alt=""
                />
              </div>
              <div class="col-lg-2 p-0">
                <img
                  src={require("./Assests/Portfolio5.png")}
                  className="w-100"
                  alt=""
                />
              </div>
              <div class="col-lg-2 p-0">
                <img
                  src={require("./Assests/Portfolio6.png")}
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
            <div class="row m-0">
              <div class="col-lg-4 p-0">
                <img
                  src={require("./Assests/Portfolio7.png")}
                  className="w-100"
                  alt=""
                />
              </div>
              <div class="col-lg-2 p-0">
                <img
                  src={require("./Assests/Portfolio8.png")}
                  className="w-100"
                  alt=""
                />
              </div>
              <div class="col-lg-2 p-0">
                <img
                  src={require("./Assests/Portfolio9.png")}
                  className="w-100"
                  alt=""
                />
              </div>
              <div class="col-lg-4 p-0">
                <img
                  src={require("./Assests/Portfolio10.png")}
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="blog ms-auto pb-5">
            <div className="container text-center mb-5">
              <div className="row">
                <div
                  className="h-100"
                  style={{
                    background: "#000",
                    width: "fit-content",
                    margin: "0 auto",
                  }}
                >
                  <h1 className="head text-center fw-bold m-3 text-light mb-5 p-5 titles">
                    Blog
                  </h1>
                </div>
              </div>
              <div className="container text-center m-0">
                <div className="row ms-auto justify-content-center">
                  <div className="col-lg-3 col-sm-4 m-0">
                    <img
                      src={require("./Assests/blog1.png")}
                      className="img"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-3 col-sm-4 text-center">
                    <img
                      src={require("./Assests/blog2.png")}
                      className="img"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-3 col-sm-4">
                    <img
                      src={require("./Assests/blog3.png")}
                      className="img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-4 ms-3">
                    <img
                      src={require("./Assests/blog4.png")}
                      className="img"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-3 col-sm-4">
                    <img
                      src={require("./Assests/blog5.png")}
                      className="img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row mb-5 justify-content-center">
                  <div className="col-lg-2 col-sm-6">
                    <img
                      src={require("./Assests/blog6.png")}
                      className="img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark p-5 ">
            <div className="container">
              <div className="row justify-content-evenly">
                <h1 className="text-center ms-5 fw-bold m-3 text-light mb-5 pb-5 title ps-5">
                  GET IN TOUCH
                </h1>
                <div className="col-lg-4 lg-sm-12">
                  <div className="col mb-2">
                    <input
                      type="text"
                      className="form-control border border border-warning bg-dark rounded-pill p-3 text-light"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col mb-3">
                    <input
                      type="text"
                      className="form-control border border-warning bg-dark rounded-pill p-3 text-light"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control border border-warning bg-dark rounded-pill p-3 text-light"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control border border-warning bg-dark rounded-3 p-4 text-light"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary border-0 p-2 ps-4 pe-4 rounded-pill mb-5"
                  >
                    Submit
                  </button>
                </div>
                <div className="col-lg-4 lg-sm-12">
                  <div className="card box">
                    <div className="card-body text-light">
                      <h5 className="card-title">CONTACT INFO</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus quia quae quas explicabo corrupti necessitatibus
                        quisquam quos?.
                      </p>

                      <p className="card-text">
                        <i className="fa-solid fa-location-crosshairs fs-5 fw-bold me-1"></i>
                        Address:
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reprehenderit, numquam.
                      </p>

                      <p className="card-text">
                        <i className="fa-solid fa-envelope fs-5 fw-bold me-1"></i>{" "}
                        Email: iisraelgonza@gmail.com abelisraelromero@gmail.com
                      </p>

                      <p className="card-text">
                        <i className="fa-solid fa-mobile-button fs-5 fw-bold me-1"></i>
                        Phone: +52 671 114 3273
                      </p>

                      <p className="card-text">
                        <i className="fa-solid fa-diagram-successor fs-5 fw-bold me-1"></i>
                        office - Beans studio
                      </p>

                      <p className="card-text">
                        <i className="fa-brands fa-skype fs-5 fw-bold me-1"></i>{" "}
                        Skype: sadfasd.skype
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="testimonials">
            <div className="container">
              <h1 className="text-center fw-semibold m-3 text-light mb-5">
                Testimonial
              </h1>
              <div className="row">
                <div className="col-lg-4 col-sm-12 mb-2">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text fw-bold mb-3">
                        This is a template Figma file, turned into code using
                        Anima. Learn more at AnimaApp.com
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0 d-flex">
                      <img
                        src={require("./Assests/person2.png")}
                        alt="person2"
                        className="card-img-top rounded-circle me-4"
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                      <div class="col-lg-6 col-sm-12">
                        <div className="d-flex mb-2">
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                        </div>
                        <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                        <p className="card-text mb-2">Google</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mb-2">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text fw-bold mb-3">
                        This is a template Figma file, turned into code using
                        Anima. Learn more at AnimaApp.com
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0 d-flex">
                      <img
                        src={require("./Assests/person2.png")}
                        alt="person2"
                        className="card-img-top rounded-circle me-4"
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                      <div className="col-lg-6 col-sm-12">
                        <div className="d-flex mb-2">
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                        </div>
                        <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                        <p className="card-text mb-2">Google</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mb-2">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text fw-bold mb-3">
                        This is a template Figma file, turned into code using
                        Anima. Learn more at AnimaApp.com
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0 d-flex">
                      <img
                        src={require("./Assests/person2.png")}
                        alt="person2"
                        className="card-img-top rounded-circle me-4"
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                      <div className="col-lg-6 col-sm-12">
                        <div className="d-flex mb-2">
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                        </div>
                        <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                        <p className="card-text mb-2">Google</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mb-2">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text fw-bold mb-3">
                        This is a template Figma file, turned into code using
                        Anima. Learn more at AnimaApp.com
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0 d-flex">
                      <img
                        src={require("./Assests/person2.png")}
                        alt="person2"
                        className="card-img-top rounded-circle me-4"
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                      <div className="col-lg-6 col-sm-12">
                        <div className="d-flex mb-2">
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                        </div>
                        <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                        <p className="card-text mb-2">Google</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mb-2">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text fw-bold mb-3">
                        This is a template Figma file, turned into code using
                        Anima. Learn more at AnimaApp.com
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0 d-flex">
                      <img
                        src={require("./Assests/person2.png")}
                        alt="person2"
                        className="card-img-top rounded-circle me-4"
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                      <div className="col-lg-6 col-sm-12">
                        <div className="d-flex mb-2">
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                        </div>
                        <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                        <p className="card-text mb-2">Google</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mb-2">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text fw-bold mb-3">
                        This is a template Figma file, turned into code using
                        Anima. Learn more at AnimaApp.com
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-0 d-flex">
                      <img
                        src={require("./Assests/person2.png")}
                        alt="person2"
                        className="card-img-top rounded-circle me-4"
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                      <div className="col-lg-6 col-sm-12">
                        <div className="d-flex mb-2">
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                          <i className="fa-solid fa-star pe-1"></i>
                        </div>
                        <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                        <p className="card-text mb-2">Google</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="example-projects mt-5 mb-5 pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="feature-project">
                    <p className="project-subtitle mb-0">Featured Project</p>
                    <h3 className="project-title">Example Project</h3>
                    <div className="boxs">
                      <p>
                        A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks, recently played
                        tracks, and detailed audio information about each track.
                        Create and save new playlists of recommended tracks
                        based on your existing playlists and more.
                      </p>
                    </div>
                    <div className="icons"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="image">
                    <img src={require("./Assests/example.jpg")} alt="example" />
                  </div>
                </div>
              </div>
              <div className="reversed">
                <div className="row flex-row-reverse">
                  <div className="col-lg-6 col-sm-12">
                    <div className="feature-project">
                      <p className="project-subtitle mb-0">Featured Project</p>
                      <h3 className="project-title">Example Project</h3>
                      <div className="boxs">
                        <p>
                          A web app for visualizing personalized Spotify data.
                          View your top artists, top tracks, recently played
                          tracks, and detailed audio information about each
                          track. Create and save new playlists of recommended
                          tracks based on your existing playlists and more.
                        </p>
                      </div>
                      <div className="icons"></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="image">
                      <img
                        src={require("./Assests/example.jpg")}
                        alt="example"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="row m-0 text-light pt-5 mx-5">
              <div class="col-sm-12 col-md-4 col-lg-4">
                <h1 className="m-0 mb-3">Your name.</h1>
                <p className="fs-4 text-secondary fw-bold">decs</p>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-2">
                <p className="fs-5 p-0 mb-4 text-secondary">Links</p>
                <ul className="p-0">
                  <li className="mb-4">
                    <a href="#"> Home </a>
                  </li>
                  <li className="mb-4">
                    <a href="#"> Shop </a>
                  </li>
                  <li className="mb-4">
                    <a href="#"> About </a>
                  </li>
                  <li className="mb-4">
                    <a href="#"> Contact </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-2">
                <p className="fs-5 p-0 mb-4 text-secondary">Help</p>
                <ul className="p-0">
                  <li className="mb-4">
                    <a href="#"> Payment Options </a>
                  </li>
                  <li className="mb-4">
                    <a href="#"> Returns </a>
                  </li>
                  <li className="mb-4">
                    <a href="#"> Privacy Policies </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <p className="fs-5 p-0 mb-4 text-secondary">Newsletter</p>
                <div className="mb-4 gap-3 d-flex">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    className="bg-transparent border border-top-0 border-end-0 border-start-0"
                  />
                  <span className="pb-1 bg-transparent text-light border border-top-0 border-end-0 border-start-0">
                    SUBSCRIBE
                  </span>
                </div>
              </div>
              <p className="pt-5 pb-4 border-top">
                2024 furino. All rights reverved
              </p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
