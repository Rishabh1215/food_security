import React from "react";
import Collapsible from "react-collapsible";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/newSideBar.css";

export const NewSideBar = (props) => {
  const selectCountry = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.changeCountry(e.target.value);
  };

  const MacroeconomicHeader = () => {
    return (
      <div className="header">
        <h5>
          <span style={{ marginRight: "1rem" }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          Macroeconomic (USD){" "}
        </h5>
      </div>
    );
  };

  const AgriculturalHeader = () => {
    return (
      <div className="header">
        <h5>
          {" "}
          <span style={{ marginRight: "1rem" }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          Agricultural
        </h5>
      </div>
    );
  };

  const DebtServicesHeader = () => {
    return (
      <div className="header">
        <h5>
          {" "}
          <span style={{ marginRight: "1rem" }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          Debt Services
        </h5>
      </div>
    );
  };

  const CropsHeader = () => {
    return (
      <div className="header">
        <h5>
          {" "}
          <span style={{ marginRight: "1rem" }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          Crops
        </h5>
      </div>
    );
  };

  const YieldHeader = () => {
    return (
      <div className="header">
        <h5>
          {" "}
          <span style={{ marginRight: "1rem" }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          Yield
        </h5>
      </div>
    );
  };

  const SensorHeader = () => {
    return (
      <div className="header">
        <h5>
          {" "}
          <span style={{ marginRight: "1rem" }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          Sensor
        </h5>
      </div>
    );
  };

  return (
    <>
      <nav
        class="w3-sidebar w3-collapse w3-white w3-animate-left"
        style={{ zIndex: "3", width: "300px", color: "#aaa" }}
        id="mySidebar"
      >
        <br />
        <div class="w3-container">
          <h5 style={{ marginBottom: '0px', color: '#2196F3', fontWeight: 'bold' }}>Country</h5>
        </div>
        <div class="w3-bar-block" style={{ marginLeft: "1rem" }}>
          <select
            class="w3-bar-item w3-button w3-padding "
            onChange={selectCountry}
          >
            <option label="India" value="0"></option>
            <option label="China" value="1"></option>
            <option label="USA" value="2"></option>
            <option label="Ecuador" value="3"></option>
          </select>
        </div>
        <br />

        <Collapsible trigger={<MacroeconomicHeader />}>
          <div class="w3-bar-block">
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("GDP")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                GDP (USD)
            </div>
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("FDI_INFLOW")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                FDI Inflows (USD)
            </div>
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("FDI_OUTFLOW")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                FDI OutFlows (USD)
            </div>
          </div>
        </Collapsible>

        <Collapsible trigger={<AgriculturalHeader />}>
          <div class="w3-bar-block">
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("AGRI")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                Contributions of Agri (%GDP)
            </div>
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("CREDIT")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                Credit
            </div>
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("FERTILIZERS")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                Fertilizers
            </div>
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("FERTILIZERS_PROD")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                Fertilizers PROD
            </div>
          </div>
        </Collapsible>

        <Collapsible trigger={<DebtServicesHeader />}>
          <div class="w3-bar-block">
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("RESERVES")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                Reserves
            </div>
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("GNI")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                GNI
            </div>
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("TOTAL_DEBT")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                Total Debt (%)
            </div>
          </div>
        </Collapsible>

        <Collapsible trigger={<CropsHeader />}>
          <div class="w3-bar-block">
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("BANANA")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                Banana
            </div>
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("MANGO")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                Mangos
            </div>
            <div
              class="w3-bar-item w3-button w3-padding "
              onClick={() => props.sidebarButtonClick("WALNUT")}
            >
              <span style={{ marginLeft: "1rem" }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
                Walnuts
            </div>
          </div>
        </Collapsible>

        <Collapsible trigger={<YieldHeader />}></Collapsible>

        <Collapsible trigger={<SensorHeader />}></Collapsible>
      </nav>
    </>
  );
};
