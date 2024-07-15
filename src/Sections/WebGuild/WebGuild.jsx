import React from 'react';
import './WebGuild.css'; // CSS faylini import qilish
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import { ArrowsFullscreen } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

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
   const {t} = useTranslation()
  return (
    <div className="wrapper container">
      <div className="slide-container">
        <Slide
          id="c1"
          icon={<ArrowsFullscreen/>}
          title={t('antalya')}
          description={t('slide-card__antalya')}
          checked={true}
        />
        <Slide
          id="c2"
          icon={<ArrowsFullscreen/>}
          title={t('dubai')}
          description={t('slide-card__dubai')}
        />
        <Slide
          id="c3"
          icon={<ArrowsFullscreen/>}
          title={t('istanbul')}
          description={t('slide-card__antalya')}
        />
        <Slide
          id="c4"
          icon={<ArrowsFullscreen/>}
          title={t('sharm')}
          description={t('slide-card__sharm')}
        />
        <Slide
          id="c5"
          icon={<ArrowsFullscreen/>}
          title={t('india')}
          description={t('slide-card__india')}
        />
      </div>
    </div>
  );
};

export default Carousel;
