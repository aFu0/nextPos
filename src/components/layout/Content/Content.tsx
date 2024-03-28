import type { AppProps } from 'next/app';

import style from './Content.module.scss';

const Content = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={style.content}>
      <Component {...pageProps} />
    </div>
  );
};

export default Content;
