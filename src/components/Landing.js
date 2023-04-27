import React from "react";
//import banner4 from "../assets/banner4.jfif";
import banner5 from "../assets/banner5.jfif";
import banner6 from "../assets/banner6.jfif";
import banner7 from "../assets/banner7.jfif";
//import banner8 from "../assets/banner8.jfif";
import { Link } from "react-router-dom";

//this is all about our landing page
const Landing = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner5} className=" d-block w-100 rounded mx-auto " alt="" />
            <div className="carousel-caption d-none my-auto d-md-block">
              <h1 className="bg-dark text-white text-xl">Welcome To iNotes</h1>
              <p>Take notes on the cloud and stay focused.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner7} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="bg-dark text-white text-xl">Security Guarantee</h1>
              <p>Your privacy and notes secured.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner6} className=" d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="bg-dark text-white text-xl">Free to use</h1>
              <p>iNotes is a free platform to manage your notes.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-warning">
          Features of iNotes
        </h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col mb-4">
            <h3 className="text-primary">Security Guarantee</h3>
            <p>
              We ensure that your notes are highly secured in our database and
              you can safely access your account and notes.
            </p>
            <Link to="/login" className="btn btn-warning">
              Login
            </Link>
          </div>
          <div className="feature col mb-4">
            <h3 className="text-primary">Notes on the cloud</h3>
            <p>
              Your notes will be highly secured on the cloud and will be able to
              access them easily via your account login credentials.
            </p>
            <Link to="/signup" className="btn btn-warning">
              Sign Up
            </Link>
          </div>
          <div className="feature col mb-4">
            <h3 className="text-primary">Free to use</h3>
            <p>
              Create and Maintain notes without any charge. You can create any
              number of notes you want for free.
            </p>
            <Link to="/signup" className="btn btn-warning icon-link">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;