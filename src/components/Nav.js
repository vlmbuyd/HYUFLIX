import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  & ul {
    display: flex;
    list-style: none;
    padding-left: 0;
  }
`;

function Nav() {
  return (
    <NavContainer>
      <h1>
        <NavLink to="/">UMC Movie</NavLink>
      </h1>

      <ul>
        <li>
          <NavLink to="/">회원가입</NavLink>
        </li>
        <li>
          <NavLink to="popular">Popular</NavLink>
        </li>
        <li>
          <NavLink to="now-playing">Now Playing</NavLink>
        </li>
        <li>
          <NavLink to="top-rated">Top Rated</NavLink>
        </li>
        <li>
          <NavLink to="upcoming">Upcoming</NavLink>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;
