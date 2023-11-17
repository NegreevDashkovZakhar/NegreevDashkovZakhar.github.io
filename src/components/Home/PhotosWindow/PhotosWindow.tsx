import Title from '@components/Title';
import Slider from 'react-slick';

import style from './PhotosWindow.module.scss';
import Window from '@components/Window';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import images from './photos';
import './slider.scss';

const PhotosWindow = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Window className={style['window']}>
      <div className={style['photos']}>
        <Title className={style['photos__title']}>Фотографии</Title>
        <Slider {...settings} className={style['photos__slider']}>
          {images.map((image) => {
            return (
              <>
                <div className={style['photos__image']} style={{backgroundImage: `url(${image})`}}></div>
              </>
            );
          })}
        </Slider>
      </div>
    </Window>
  );
};

export default PhotosWindow;
