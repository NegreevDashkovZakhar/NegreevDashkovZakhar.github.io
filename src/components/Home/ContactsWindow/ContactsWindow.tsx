import Window from '@components/Window';
import Title from '@components/Title';
import style from './ContactsWindow.module.scss';
import Text from '@components/Text';

const WelcomeWindow = () => {
  return (
    <Window>
      <div className={style['welcome-window']}>
        <Title className={style['welcome-window__title']}>Как со мной связаться</Title>
        <Text>
          <>
            <p>
              Сразу скажу, что я не умею определять “на глаз”, занят ли человек, ищет ли он отношения. Поэтому, если ты
              никого не ищешь, то просто закинь бумажку, которую я тебя дал куда-нибудь, и можешь не вспоминать, that’s
              cool, как говорится.
            </p>
            <br />
            <p>Если ты хотела бы пообщаться, может прогуляться когда-нибудь, то напиши мне) </p>
            <p>Жду твоего сообщения)</p>
          </>
        </Text>
      </div>
    </Window>
  );
};

export default WelcomeWindow;
