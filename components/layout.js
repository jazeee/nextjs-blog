import classes from './layout.module.scss';

export default function Layout({ children }) {
  return <div className={classes.Layout}>{children}</div>
}