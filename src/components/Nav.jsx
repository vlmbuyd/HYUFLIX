import { useNavigate } from "react-router-dom";
import { Context } from "./App";
import { useContext, useEffect, useState } from "react";
import { getUserInfo } from "../api/api";
import Styled from "../styles/nav";
import sidebarIcon from "../assets/side-bar.png";

function handleActive({ isActive }) {
  return {
    color: isActive ? "#e8af10" : "white",
    fontWeight: isActive ? "700" : "400",
  };
}

function handleLogin({ isActive }) {
  return {
    color: isActive ? "#473c6d" : "white",
    fontWeight: isActive ? "700" : "400",
  };
}

function Nav() {
  const { token, setToken } = useContext(Context);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const handleSession = async () => {
    if (token) {
      const response = await getUserInfo(token);
      setToken("");
      localStorage.removeItem(response.username);
      alert("로그아웃 되었습니다");
      navigate("/");
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closedSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Styled.NavContainer>
      <h1 onClick={closedSidebar}>
        <Styled.TitleNavLink to="/">SMUFLIX</Styled.TitleNavLink>
      </h1>
      <ul className="menu">
        <li>
          <Styled.LiNavLink style={handleActive} to="popular">
            Popular
          </Styled.LiNavLink>
        </li>
        <li>
          <Styled.LiNavLink style={handleActive} to="now_playing">
            Now Playing
          </Styled.LiNavLink>
        </li>
        <li>
          <Styled.LiNavLink style={handleActive} to="top_rated">
            Top Rated
          </Styled.LiNavLink>
        </li>
        <li>
          <Styled.LiNavLink style={handleActive} to="upcoming">
            Upcoming
          </Styled.LiNavLink>
        </li>
        <li>
          {token ? (
            <Styled.LiNavLink style={handleLogin} onClick={handleSession}>
              로그아웃
            </Styled.LiNavLink>
          ) : (
            <Styled.LiNavLink
              style={handleActive}
              to="login"
              onClick={handleSession}
            >
              로그인
            </Styled.LiNavLink>
          )}
        </li>
        {token ? null : (
          <li>
            <Styled.LiNavLink style={handleActive} to="signup">
              회원가입
            </Styled.LiNavLink>
          </li>
        )}
      </ul>
      <Styled.SidebarIcon onClick={toggleSidebar}>
        <img src={sidebarIcon} alt="sidebar-icon" />
      </Styled.SidebarIcon>
      {sidebarOpen && (
        <Styled.SidebarMenu>
          <ul className="sidebar-menu">
            <li onClick={toggleSidebar}>
              <Styled.SidebarLink style={handleActive} to="popular">
                Popular
              </Styled.SidebarLink>
            </li>
            <li onClick={toggleSidebar}>
              <Styled.SidebarLink style={handleActive} to="now_playing">
                Now Playing
              </Styled.SidebarLink>
            </li>
            <li onClick={toggleSidebar}>
              <Styled.SidebarLink style={handleActive} to="top_rated">
                Top Rated
              </Styled.SidebarLink>
            </li>
            <li onClick={toggleSidebar}>
              <Styled.SidebarLink style={handleActive} to="upcoming">
                Upcoming
              </Styled.SidebarLink>
            </li>
            <li onClick={toggleSidebar}>
              {token ? (
                <Styled.SidebarLink style={handleLogin} onClick={handleSession}>
                  로그아웃
                </Styled.SidebarLink>
              ) : (
                <Styled.SidebarLink
                  style={handleActive}
                  to="login"
                  onClick={handleSession}
                >
                  로그인
                </Styled.SidebarLink>
              )}
            </li>
            {token ? null : (
              <li onClick={toggleSidebar}>
                <Styled.SidebarLink style={handleActive} to="signup">
                  회원가입
                </Styled.SidebarLink>
              </li>
            )}
          </ul>
        </Styled.SidebarMenu>
      )}
    </Styled.NavContainer>
  );
}

export default Nav;
