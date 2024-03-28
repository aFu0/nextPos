import style from './LayoutHeader.module.css';

// import { MessageOutlined } from '@ant-design/icons';
const LayoutHeader = () => {
  return (
    <div className={style.layout_header}>
      <div>LOGO</div>
      <div>
        {/* <MessageOutlined /> */}
      </div>
    </div>
  );
};

export default LayoutHeader;
