import styles from './BaseTemplate.module.css';

export interface BaseTemplateProps {
  sampleTextProp: string;
}

const BaseTemplate = ({ sampleTextProp }: BaseTemplateProps) => {
  return <div className={styles.component}>Hello world {sampleTextProp}</div>;
};

export default BaseTemplate;
