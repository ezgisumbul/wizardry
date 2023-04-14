import React from 'react';
import './index.css';

const FEATURED_CONTENT = [
  {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid dolores.',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    category: 'spells',
    img: 'spells.jpg',
    alt: 'Wingardium leviosa spell demonstration'
  },
  {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid dolores.',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    category: 'potions',
    img: 'potions.jpg',
    alt: 'Potion class'
  },
  {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid dolores.',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    category: 'movies',
    img: 'movies.png',
    alt: 'Posters of all Harry Potter Movies'
  },

  {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid dolores.',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    category: 'books',
    img: 'books.jpg',
    alt: 'Books on a shelf'
  },
  {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid dolores.',
    text: 'Lorem ipsum dolor sit amet consectetur.',
    category: 'characters',
    img: 'characters.png',
    alt: 'Harry Potter cast'
  }
];

export const HomePage = () => {
  return (
    <div className="home-page">
      {FEATURED_CONTENT.map((content, index) => (
        <section
          key={index}
          className={
            index % 2 === 0
              ? 'featured-content'
              : ' featured-content flip-sides'
          }
        >
          <div className="featured-content-img-box">
            <img
              className="featured-content-img"
              src={`/${content.img}`}
              alt={content.alt}
            />
          </div>

          <div className="featured-content-txt-box">
            <h1 className="featured-content-title">{content.title}</h1>
            <p className="featured-content-txt">{content.text}</p>
            <button className="featured-content-btn">
              Explore {content.category}
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};
