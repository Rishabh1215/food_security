import React from 'react';
import { Link } from 'react-router-dom';
export const NewSideBar = (props) => {
  const selectCountry = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.changeCountry(e.target.value);
  };
  return (
    <>
      <nav
        class="w3-sidebar w3-collapse w3-white w3-animate-left"
        style={{ zIndex: '3', width: '300px', color: '#aaa' }}
        id="mySidebar"
      >
        <br />
        <div class="w3-container">
          <h5>Country</h5>
        </div>
        <div class="w3-bar-block">
          <select
            class="w3-bar-item w3-button w3-padding "
            onChange={selectCountry}
          >
            <option label="India" value="0"></option>
            <option label="China" value="1"></option>
            <option label="USA" value="2"></option>
          </select>
          <br />
          <br />
        </div>
        <br />
        <div class="w3-container">
          <h5>MacroEconomic</h5>
        </div>
        <div class="w3-bar-block">
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('GDP')}
          >
            <i class="fa fa-users fa-fw"></i> GDP
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('FDI_INFLOW')}
          >
            <i class="fa fa-users fa-fw"></i> FDI Inflows
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('FDI_OUTFLOW')}
          >
            <i class="fa fa-users fa-fw"></i> FDI OutFlows
          </div>
          <br />
          <br />
        </div>
        <div class="w3-container">
          <h5>Agricultural</h5>
        </div>
        <div class="w3-bar-block">
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('AGRI')}
          >
            <i class="fa fa-users fa-fw"></i> Contributions of Agri (%GDP)
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('CREDIT')}
          >
            <i class="fa fa-users fa-fw"></i> Credit
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('FERTILIZERS')}
          >
            <i class="fa fa-users fa-fw"></i> Fertilizers
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('FERTILIZERS_PROD')}
          >
            <i class="fa fa-users fa-fw"></i> Fertilizers PROD
          </div>
          <br />
          <br />
        </div>


        <div class="w3-container">
          <h5>MacroEconomic</h5>
        </div>
        <div class="w3-bar-block">
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('RESERVES')}
          >
            <i class="fa fa-users fa-fw"></i> Reserves
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('GNI')}
          >
            <i class="fa fa-users fa-fw"></i> GNI
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('TOTAL_DEBT')}
          >
            <i class="fa fa-users fa-fw"></i> Total Debt (%)
          </div>
          <br />
          <br />

        <div class="w3-container">
        <h5>Crops</h5>
        </div>
        <div class="w3-bar-block">
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('WALNUTS')}
          >
            <i class="fa fa-users fa-fw"></i> Walnuts
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('MANGOES')}
          >
            <i class="fa fa-users fa-fw"></i> Mangoes
          </div>
          </div>

        </div>
      </nav>
    </>
  );
};
