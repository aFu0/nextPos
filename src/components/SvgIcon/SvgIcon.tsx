import style from './Svgicon.module.scss';

export interface SvgIconProps {
  iconName: string;
  className?: string;
}

const SvgIcon = (props: SvgIconProps) => {
  const { className, iconName } = props;

  return (
    <i aria-hidden="true">
      <svg className={`${style['svg-class']} ${className}`}>
        <use xlinkHref={`#${iconName}`}></use>
      </svg>
    </i>
  );
};

export default SvgIcon;
