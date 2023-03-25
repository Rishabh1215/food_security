import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  margin-top: 170px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return (
                <SubMenu
                  sidebarButtonClick={props.sidebarButtonClick}
                  item={item}
                  key={index}
                />
              );
            })}
            <br></br>
            <br></br>
            <button
              class="w3-btn w3-blue w3-round-large"
              style={{ width: '100%' }}
            >
              <Link to="/import" style={{ textDecoration: 'None' }}>
                Import Data
              </Link>
            </button>
            <br></br>
            <br></br>
            <button
              class="w3-btn w3-blue w3-round-large"
              style={{ width: '100%' }}
            >
              <Link to="/govtrepresentative" style={{ textDecoration: 'None' }}>
                Predict
              </Link>
            </button>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
