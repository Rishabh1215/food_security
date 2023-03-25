import React from 'react';
import { Link } from 'react-router-dom';
export const ImportSideBar = (props) => {
  const selectCountry = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.changeCountry(e.target.value);
  };
  const selectYear = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.changeYear(e.target.value);
  };
  const selectType = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.changeType(e.target.value);
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
            <option label="Egypt" value="egypt"></option>
            <option label="Saudi Arabia" value="sa"></option>
          </select>
          <br />
          <br />
        </div>
        <br />

        <div class="w3-bar-block">
          <select
            class="w3-bar-item w3-button w3-padding "
            onChange={selectType}
          >
            <option label="Wheat" value="Wheat"></option>
            <option label="Rice" value="Rice"></option>
          </select>
          <br />
          <br />
        </div>
        <br />

        <div class="w3-bar-block">
          <select
            class="w3-bar-item w3-button w3-padding "
            onChange={selectYear}
          >
            <option label="2018" value="2018"></option>
            <option label="2017" value="2017"></option>
            <option label="2016" value="2016"></option>
          </select>
          <br />
          <br />
        </div>
        <br />

        <div class="w3-bar-block">
          <br />
          <br />

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
