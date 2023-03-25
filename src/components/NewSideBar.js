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
            <i class="fa fa-users fa-fw"></i>  GDP
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('FDI_INFLOW')}
          >
            <i class="fa fa-users fa-fw"></i>  FDI Inflows
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('FDI_OUTFLOW')}
          >
            <i class="fa fa-users fa-fw"></i>  FDI OutFlows
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
            <i class="fa fa-users fa-fw"></i>  Contributions of Agri (%GDP)
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('CREDIT')}
          >
            <i class="fa fa-users fa-fw"></i>  Credit
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('FERTILIZERS')}
          >
            <i class="fa fa-users fa-fw"></i>  Fertilizers
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('FERTILIZERS_PROD')}
          >
            <i class="fa fa-users fa-fw"></i>  Fertilizers PROD
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
            <i class="fa fa-users fa-fw"></i>  Reserves
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('GNI')}
          >
            <i class="fa fa-users fa-fw"></i>  GNI
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('TOTAL_DEBT')}
          >
            <i class="fa fa-users fa-fw"></i>  Total Debt (%)
          </div>
          <br />
          <br />

        <div class="w3-container">
        <h5>Crops</h5>
        </div>
        <div class="w3-bar-block">
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('BANANA')}
          >
            <i class="fa fa-users fa-fw"></i>  Bananas
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('MANGO')}
          >
            <i class="fa fa-users fa-fw"></i>  Mangos
          </div>
          <div
            class="w3-bar-item w3-button w3-padding "
            onClick={() => props.sidebarButtonClick('WALNUT')}
          >
            <i class="fa fa-users fa-fw"></i>  Walnuts
          </div>
          </div>


          <div class="w3-container">
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
          </div>
        </div>
      </nav>
    </>
  );
};
