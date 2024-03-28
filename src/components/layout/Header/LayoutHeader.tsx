import style from './LayoutHeader.module.scss';
import SvgIcon from '@/components/SvgIcon/SvgIcon';

// import { MessageOutlined } from '@ant-design/icons';
const LayoutHeader = () => {
  return (
    <div className={style.layout_header}>
      <div>LOGO</div>
      <div>
        <SvgIcon className={style.svg} iconName="user1" />
      </div>
    </div>
  );
};

export default LayoutHeader;
