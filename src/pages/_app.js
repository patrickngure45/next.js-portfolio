import Theme from '../styles/theme';
import '../styles/Background.css';
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
};

export default MyApp;
