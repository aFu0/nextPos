import { ConfigProvider } from 'antd/lib';
import type { AppProps } from 'next/app';

import theme from '@/theme/themeConfig';

import LayoutHeader from '@/components/layout/Header/LayoutHeader';
import LayoutMenu from '@/components/layout/Menu/LayoutMenu';

import '@/styles/reset.css';
import '@/pages/app.css';

const App = ({ Component, pageProps }: AppProps) => {
  console.log(pageProps, 'pageProps');
  return (
    <ConfigProvider theme={theme}>
      <div className="layout">
        <div className="layout-header">
          <LayoutHeader />
        </div>
        <div className="layout-content">
          <LayoutMenu />
          <Component {...pageProps} />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default App;
