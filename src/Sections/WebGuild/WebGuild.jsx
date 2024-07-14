import React from 'react';
import './WebGuild.css'; // CSS faylini import qilish
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import { ArrowsFullscreen } from 'react-bootstrap-icons';

const Slide = ({ id, icon, title, description, checked }) => (
  <>
    <input type="radio" name="slide" id={id} defaultChecked={checked} />
    <label htmlFor={id} className="card">
      <div className="row">
        <div className="icon">{icon}</div>
        <div className="description">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </label>
  </>
);

const Carousel = () => {
  return (
    <div className="wrapper container">
      <div className="slide-container">
        <Slide
          id="c1"
          icon={<ArrowsFullscreen/>}
          title="Antalya"
          description="Aholisi: 3.5M"
          checked={true}
        />
        <Slide
          id="c2"
          icon={<ArrowsFullscreen/>}
          title="Dubai"
          description="Aholisi: 2M"
        />
        <Slide
          id="c3"
          icon={<ArrowsFullscreen/>}
          title="Istanbul"
          description="Aholisi: 4.1M"
        />
        <Slide
          id="c4"
          icon={<ArrowsFullscreen/>}
          title="Sharm El-Shaikh"
          description="Aholisi: 4M"
        />
        <Slide
          id="c5"
          icon={<ArrowsFullscreen/>}
          title="India"
          description="Aholisi: 3M"
        />
      </div>
    </div>
  );
};

export default Carousel;
