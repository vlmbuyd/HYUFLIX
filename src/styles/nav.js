import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.div`
  height: 60px;
  background-color: #0e0f36;

  .menu {
    display: flex;
    position: absolute;
    top: 20px;
    right: 5px;

    & li {
      margin-right: 15px;
    }
  }

  @media screen and (max-width: 767px) {
    .menu {
      display: none;
    }
  }
`;

const TitleNavLink = styled(NavLink)`
  display: inline-block;
  margin: 14px 0 0 15px;
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

const SidebarIcon = styled.button`
  display: none;
  position: absolute;
  top: 12px;
  right: 5px;
  padding: 0;
  width: 32px;
  height: 32px;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const SidebarMenu = styled.div`
  display: none;
  position: relative;
  top: 4px;
  left: 0;
  width: 100%;
  z-index: 1;

  .sidebar-menu {
    display: flex;
    flex-direction: column;
    width: inherit;
    height: 90vh;
    padding: 15px 20px;
    background-color: rgba(36, 37, 73, 0.98);
  }

  li {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const SidebarLink = styled(NavLink)`
  font-size: 17px;
  font-weight: 300;

  &:hover {
    font-size: 20px;
    font-weight: 700;
  }
`;

export default {
  NavContainer,
  TitleNavLink,
  LiNavLink,
  SidebarIcon,
  SidebarMenu,
  SidebarLink,
};
