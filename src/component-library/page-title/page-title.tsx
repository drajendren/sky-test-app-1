import React from 'react';
import styles from './page-title.module.scss';

export interface PageTitleProps  {
  title: string;
}
export const PageTitle = (props: PageTitleProps) => {
  const {title} = props;
  return (
    <h1 className={styles.pageTitle}>{title}</h1>
  );
};

export default PageTitle;
