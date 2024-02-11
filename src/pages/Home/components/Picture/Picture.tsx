import {useState} from 'react';

import style from './Picture.module.scss';
import Choice from './Choice/Choice';

import kitten1 from '@assets/kitten1.png';
import kitten2 from '@assets/kitten2.png';
import kitten3 from '@assets/kitten3.png';

import bg1 from '@assets/bg1.jpg';
import bg2 from '@assets/bg2.jpg';
import bg3 from '@assets/bg3.jpg';

const kittens = [kitten1, kitten2, kitten3];

const backgrounds = [bg1, bg2, bg3];

const Picture = () => {
  const [choices, setChoices] = useState({background: 0, kitten1: 0, kitten2: 0});

  return (
    <div className={style['picture']}>
      <div className={style['picture__whole']}>
        <img className={style['picture__background']} src={backgrounds[choices.background]} alt="" />
        <img className={style['picture__kitten1']} src={kittens[choices.kitten1]} alt="" />
        <img className={style['picture__kitten2']} src={kittens[choices.kitten2]} alt="" />
      </div>
      <Choice
        images={backgrounds}
        choice={choices.background}
        setChoice={(choice: number) => {
          setChoices({...choices, background: choice});
        }}
      />
      <Choice
        images={kittens}
        choice={choices.kitten1}
        setChoice={(choice: number) => {
          setChoices({...choices, kitten1: choice});
        }}
      />
      <Choice
        images={kittens}
        choice={choices.kitten2}
        setChoice={(choice: number) => {
          setChoices({...choices, kitten2: choice});
        }}
      />
    </div>
  );
};

export default Picture;
