import Window from '@components/Window';
import Title from '@components/Title';
import style from './WelcomeWindow.module.scss';
import Text from '@components/Text';

const WelcomeWindow = () => {
  return (
    <Window>
      <div className={style['welcome-window']}>
        <div className={style['welcome-window__left-column']}>
          <Title className={style['welcome-window__title']}>Значит ты мне понравилась</Title>
          <Text>
            <>
              <p>И я хотел бы побольше пообщаться</p> <br />
              <p>Ты мне показалась достаточно</p>
              <ul>
                <li>Красивой</li>
                <li>Умной</li>
                <li>Доброй</li>
                <li>Предприимчивой, раз ты тут оказалась :)</li>
                <li>И в целом, приятным человеком</li>
              </ul>
              <p>Извините, но абы кому такие ссылки не даются.</p> <br />
              <p>
                Поэтому, если ты заинтересована, то читай дальше. Там будет еще информация обо мне, еще фотографии и
                если захочешь, то как со мной связаться)
              </p>
            </>
          </Text>
        </div>
        <div className={style['welcome-window__right-column']}>
          <div className={style['welcome-window__photo']} />
        </div>
      </div>
    </Window>
  );
};

export default WelcomeWindow;
