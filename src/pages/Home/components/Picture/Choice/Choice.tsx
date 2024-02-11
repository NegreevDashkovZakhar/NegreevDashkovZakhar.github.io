import {FC} from 'react';
import style from './Choice.module.scss';

interface ChoiceArgs {
  images: any[];
  choice: number;
  setChoice: (choice: number) => void;
}

const Choice: FC<ChoiceArgs> = ({images = [], choice = 0, setChoice}) => {
  return (
    <div className={style['choice']}>
      {images.map((image, index) => {
        return <img src={image} alt="" className={style['choice__image']} onClick={() => setChoice(index)} />;
      })}
    </div>
  );
};

export default Choice;
