import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const setClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">MAESTRO POKEMON</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink className={setClass} to={"/"}>Home</NavLink>
            <NavLink className={setClass} to={"/consult"}>Pokemones</NavLink>
          </Nav>
      </Container>
    </Navbar>
  )
}

