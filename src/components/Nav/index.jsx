import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Screen from '..';
import { SNav, SButton } from './style';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <Screen onClick={toggle} />}
      <SNav className={isOpen && 'open'}>
        <nav>
          <h2>Welcome, Stranger !</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/parallax">Parallax</NavLink>
            </li>
            <li>
              <NavLink to="/qdfgkljdllgkqdg">404</NavLink>
            </li>
            <li>
              <NavLink to="/searchOne">SearchOne</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/toasts">Toasts</NavLink>
            </li>
            <li>
              <NavLink to="/form">Forms</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <aside>
          <h3>Todo</h3>
          <ul>
            <li>Modals (need Redux/reducers)</li>
            <li>Drawings</li>
            <li>Private routes (need login)</li>
            <li>Login (need Redux/reducers)</li>
            <li>Accessibility</li>
            <li>Code refactoring</li>
            <li>API centralization</li>
          </ul>
        </aside>
      </SNav>
      <SButton type="button" onClick={toggle}>
        <img src="/img/amarok.png" alt="" />
      </SButton>
    </>
  );
}
