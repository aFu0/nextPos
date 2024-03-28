import { ConfigProvider } from 'antd/lib';
import type { AppProps } from 'next/app';

import theme from '@/theme/themeConfig';

import LayoutHeader from '@/components/layout/Header/LayoutHeader';
import LayoutMenu from '@/components/layout/Menu/LayoutMenu';
import Content from '@/components/layout/Content/Content';

import '@/styles/reset.css';
import '@/pages/app.css';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ConfigProvider theme={theme}>
      <div className="layout">
        <div className="layout-header">
          <LayoutHeader />
        </div>
        <div className="layout-content">
          <LayoutMenu />
          <Content
            Component={Component}
            pageProps={pageProps}
            router={router}
          />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default App;
