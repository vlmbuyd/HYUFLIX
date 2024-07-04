import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "./App";
import { useContext } from "react";
import { getUserInfo } from "../api/api";
import styled from "styled-components";

const NavContainer = styled.div`
  height: 60px;
  background-color: #0e0f36;
`;

const Ul = styled.ul`
  display: flex;
  position: absolute;
  top: 20px;
  right: 5px;

  & li {
    margin-right: 15px;
  }
`;

const TitleNavLink = styled(NavLink)`
  display: inline-block;
  margin: 12px 0 0 15px;
  font-size: 22px;
  color: white;
  font-weight: 400;
`;

const LiNavLink = styled(NavLink)`
  font-size: 13px;
  color: white;

  &:hover {
    font-size: 14px;
    font-weight: 700;
  }
`;

function handleActive({ isActive }) {
  return {
    color: isActive ? "#e8af10" : "white",
    fontWeight: isActive ? "700" : "400",
  };
}

function handleLogin({ isActive }) {
  return {
    color: isActive ? "#3d2a7e" : "white",
    fontWeight: isActive ? "700" : "400",
  };
}

function Nav() {
  const { token, setToken } = useContext(Context);

  const navigate = useNavigate();

  const handleSession = async () => {
    if (token) {
      // 로그아웃
      const response = await getUserInfo(token);
      setToken("");
      localStorage.removeItem(response.username);
      alert("로그아웃 되었습니다");
      navigate("/");
    }
  };

  return (
    <NavContainer>
      <h1>
        <TitleNavLink to="/">SMUFLIX</TitleNavLink>
      </h1>
      <Ul>
        <li>
          <LiNavLink style={handleActive} to="popular">
            Popular
          </LiNavLink>
        </li>
        <li>
          <LiNavLink style={handleActive} to="now_playing">
            Now Playing
          </LiNavLink>
        </li>
        <li>
          <LiNavLink style={handleActive} to="top_rated">
            Top Rated
          </LiNavLink>
        </li>
        <li>
          <LiNavLink style={handleActive} to="upcoming">
            Upcoming
          </LiNavLink>
        </li>
        <li>
          {token ? (
            <LiNavLink style={handleLogin} onClick={handleSession}>
              로그아웃
            </LiNavLink>
          ) : (
            <LiNavLink style={handleActive} to="login" onClick={handleSession}>
              로그인
            </LiNavLink>
          )}
        </li>
        {token ? null : (
          <li>
            <LiNavLink style={handleActive} to="signup">
              회원가입
            </LiNavLink>
          </li>
        )}
      </Ul>
    </NavContainer>
  );
}

export default Nav;
