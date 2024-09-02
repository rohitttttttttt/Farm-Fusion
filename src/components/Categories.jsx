import React from 'react';
import './Categories.css';
import fruits from '../assets/fruits.png'
import grains from '../assets/grains.png'
import fertilizers from '../assets/fertilizers.png'


const callouts = [
  {
    name: 'fruits and veggies',
    imageSrc: fruits,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'food grains ',
    imageSrc: grains,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'fertilisers',
    imageSrc: fertilizers,
    imageAlt:'',
    href: '#',
  },
];

export default function Category() {
  return (
    <div className="bg-white category-container">
      <h1 className='category-main-heading'>shop by category</h1>
      <div className="category-grid">
        {callouts.map((callout, index) => (
          <div key={callout.name} className="category-item">
            <div className="category-img-wrapper">
              <img
                src={callout.imageSrc}
                alt={callout.imageAlt}
                className="category-img"
              />
            </div>
            <h3 className="category-heading">
              <a href={callout.href}>
                {callout.name}
              </a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
