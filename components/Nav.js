import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/list">
      <a>List</a>
    </Link>
    <Link href="/add">
      <a>Add</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;