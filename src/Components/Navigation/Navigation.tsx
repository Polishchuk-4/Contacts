import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';
import cn from 'classnames';

const cnNavLink = ({ isActive }: { isActive: boolean }) =>
  cn(style.link, { [style.active]: isActive });

export default function Navigation() {
  return (
    <nav className={style.navigation}>
      <NavLink to="/" className={cnNavLink}>
        Home
      </NavLink>
      <NavLink to="/" className={cnNavLink}>
        Contacts
      </NavLink>
    </nav>
  );
}
