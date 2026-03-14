import css from './SharedLayout.module.css';
import clsx from 'clsx';

const SharedLayout = ({ children, header }) => {
  const objClasses = {
    [css.header]: header,
  };

  const classNames = clsx(css.container, objClasses);

  return <div className={classNames}>{children}</div>;
};

export default SharedLayout;
