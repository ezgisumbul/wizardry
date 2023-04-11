import React from 'react';
import './index.css';

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="featured-content">
        <div className="featured-content-img-box">
          <img
            className="featured-content-img"
            src="/wingardium.jpg"
            alt="Spell casting"
          />
        </div>

        <div className="featured-content-txt-box">
          <h1 className="featured-content-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aliquid dolores, placeat temporibus veniam cupiditate aspernatur.
          </h1>
          <p className="featured-content-txt">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="featured-content-btn">Explore spells</button>
        </div>
      </section>

      <section className="featured-content flip-sides">
        <div className="featured-content-img-box">
          <img
            className="featured-content-img"
            src="/wingardium.jpg"
            alt="Potion"
          />
        </div>

        <div className="featured-content-txt-box">
          <h1 className="featured-content-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aliquid dolores, placeat temporibus veniam cupiditate aspernatur.
          </h1>
          <p className="featured-content-txt">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="featured-content-btn">Explore potions</button>
        </div>
      </section>

      <section className="featured-content">
        <div className="featured-content-img-box">
          <img
            className="featured-content-img"
            src="/wingardium.jpg"
            alt="Movies"
          />
        </div>

        <div className="featured-content-txt-box">
          <h1 className="featured-content-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aliquid dolores, placeat temporibus veniam cupiditate aspernatur.
          </h1>
          <p className="featured-content-txt">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="featured-content-btn">Explore movies</button>
        </div>
      </section>

      <section className="featured-content">
        <div className="featured-content-img-box">
          <img
            className="featured-content-img"
            src="/wingardium.jpg"
            alt="Books casting"
          />
        </div>

        <div className="featured-content-txt-box">
          <h1 className="featured-content-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aliquid dolores, placeat temporibus veniam cupiditate aspernatur.
          </h1>
          <p className="featured-content-txt">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="featured-content-btn">Explore books</button>
        </div>
      </section>

      <section className="featured-content">
        <div className="featured-content-img-box">
          <img
            className="featured-content-img"
            src="/wingardium.jpg"
            alt="Characters"
          />
        </div>

        <div className="featured-content-txt-box">
          <h1 className="featured-content-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            aliquid dolores, placeat temporibus veniam cupiditate aspernatur.
          </h1>
          <p className="featured-content-txt">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="featured-content-btn">Explore characters</button>
        </div>
      </section>
    </div>
  );
};
