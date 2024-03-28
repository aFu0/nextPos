import { Menu } from 'antd/lib';
import type { GetProp, MenuProps } from 'antd';

import styles from './LayoutMenu.module.css';

type MenuItem = GetProp<MenuProps, 'items'>[number];

const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const items: MenuItem[] = [
  getItem('test', 'sub1', null),
  getItem('test', 'sub2', null),
];

// export interface LayoutMenuProps {
//   sampleTextProp: string;
// }

const LayoutMenu = () => {
  return (
    <>
      <Menu
        style={{ width: 240 }}
        defaultSelectedKeys={['sub1']}
        defaultOpenKeys={['sub1']}
        items={items}
      />
      {/* <div className={styles.component}>Hello world </div> */}
    </>
  );
};

export default LayoutMenu;
