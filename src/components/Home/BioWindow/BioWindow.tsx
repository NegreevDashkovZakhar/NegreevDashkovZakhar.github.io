import Window from '@components/Window';
import Title from '@components/Title';
import style from './BioWindow.module.scss';
import Text from '@components/Text';

const WelcomeWindow = () => {
  return (
    <Window>
      <div className={style['welcome-window']}>
        <Title className={style['welcome-window__title']}>Немного обо мне</Title>
        <Text>
          <>
            <p>Меня зовут Захар, мне 21 и я учусь в ОмГТУ</p>
            <p>Работаю программистом (как можно догадаться, всё это я сам и делал)</p>
            <br />
            <p>В свободное время люблю</p>
            <ul>
              <li>Прогулки</li>
              <li>Кофе</li>
              <li>Играть на гитаре</li>
              <li>Настольные игры</li>
              <li>Читать, время от времени</li>
              <li>Заниматься спортом, в почти любых его проявлениях</li>
              <li>Да и еще кучу всего</li>
            </ul>
            <br />

            <p>Сам достаточно позитивный, с чувством юмора, по мнению друзей</p>
            <p>Ростом около 172</p>
          </>
        </Text>
      </div>
    </Window>
  );
};

export default WelcomeWindow;
