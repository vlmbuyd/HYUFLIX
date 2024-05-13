import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  height: 60px;
  background-color: #0e0f36;

  & ul {
    display: flex;
    list-style: none;
    padding-left: 0;
  }
`;

const Ul = styled.ul`
  height: 60px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 20px;
  right: 5px;

  & li {
    margin-right: 10px;
  }
`;

const TitleNavLink = styled(NavLink)`
  margin-top: 20px;
  font-size: 20px;
  color: white;
  font-weight: 400;
`;

const LiNavLink = styled(NavLink)`
  font-size: 13px;
  color: white;

  &:hover {
    font-weight: 700;
  }

  &:active {
    color: yellow;
  }
`;

function Nav() {
  return (
    <NavContainer>
      <h1>
        <TitleNavLink to="popular">UMC Movie</TitleNavLink>
      </h1>

      <Ul>
        <li>
          <LiNavLink to="login">로그인</LiNavLink>
        </li>
        <li>
          <LiNavLink to="join">회원가입</LiNavLink>
        </li>
        <li>
          <LiNavLink to="popular">Popular</LiNavLink>
        </li>
        <li>
          <LiNavLink to="now-playing">Now Playing</LiNavLink>
        </li>
        <li>
          <LiNavLink to="top-rated">Top Rated</LiNavLink>
        </li>
        <li>
          <LiNavLink to="upcoming">Upcoming</LiNavLink>
        </li>
      </Ul>
    </NavContainer>
  );
}

export default Nav;
