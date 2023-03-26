import React, { useState } from "react";
import { ChartDiv } from "../components/ChartDiv";
import { ChartDiv2 } from "../components/ChartDiv2";
import { Header } from "../components/Header";

import { SliderComponent } from "../components/SliderComponent";
import {
  getAllData,
  prodIran,
  areaIran,
  yieldYears,
  areaPhil,
  prodPhil,
} from "../data/data";
import { NewSideBar } from "../components/NewSideBar";

import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Circle } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "400px",
  width: "800px",
};

const iran = {
  lat: 32.4279,
  lng: 53.688,
};

const phillipines = {
  lat: 13,
  lng: 122,
};

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

export const ResearcherView = () => {
  const [xvalues, setXvalues] = React.useState();
  const [yvalues, setYvalues] = React.useState();
  const [yvalues2, setYvalues2] = React.useState();
  const [name1, setName1] = React.useState();
  const [name2, setName2] = React.useState();
  const [chartTitle, setChartTitle] = React.useState();
  const [countryId, setCountryId] = React.useState(0);
  const [graphType, setGraphType] = React.useState("GDP");
  const [coordinates, setCoordinates] = React.useState(iran);
  const [showGraph, setShowGraph] = useState(true);
  const [showGraph2, setShowGraph2] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const changeCountry = (countryId) => {
    console.log("***********", countryId);
    setCountryId(countryId);
    console.log(graphType, countryId);
    sidebarButtonClick(graphType, countryId);
  };

  const graphVisible = () => {
    setShowGraph(true);
    setShowGraph2(false);
    setShowMap(false);
  };

  const graph2Visible = () => {
    setShowGraph(false);
    setShowGraph2(true);
    setShowMap(false);
  };

  const mapVisible = () => {
    setShowGraph(false);
    setShowGraph2(false);
    setShowMap(true);
  };

  const sidebarButtonClick = (x, y) => {
    if (!y) {
      y = countryId;
    }
    console.log(x, y);
    let allData = getAllData();
    let data = allData[y];
    setGraphType(x);

    console.log(data);

    if (x === "IRAN") {
      setXvalues(yieldYears);
      setYvalues(prodIran);
      setYvalues2(areaIran);
      setName1("Walnuts, in shells, Production (tonnes)");
      setName2("Area Harvested (ha)");
      graph2Visible();
    } else if (x === "PHIL") {
      setXvalues(yieldYears);
      setYvalues(prodPhil);
      setYvalues2(areaPhil);
      setName1("Walnuts, in shells, Production (tonnes)");
      setName2("Area Harvested (ha)");
      graph2Visible();
    } else if (x === "WALNUTS") {
      setCoordinates(iran);
      mapVisible();
    } else if (x === "MANGOES") {
      setCoordinates(phillipines);
      mapVisible();
    } else {
      graphVisible();
      if (x === "GDP") {
        setXvalues(data["GDP"]["x"]);
        setYvalues(data["GDP"]["y"]);
        setChartTitle("GDP");
      } else if (x === "FDI_INFLOW") {
        setXvalues(data["fdi_inflow"]["x"]);
        setYvalues(data["fdi_inflow"]["y"]);
        setChartTitle("FDI_INFLOW");
      } else if (x === "FDI_OUTFLOW") {
        setXvalues(data["fdi_outflow"]["x"]);
        setYvalues(data["fdi_outflow"]["y"]);
        setChartTitle("FDI_OUTFLOW");
      } else if (x === "AGRI") {
        setXvalues(data["contribution_agri"]["x"]);
        setYvalues(data["contribution_agri"]["y"]);
        setChartTitle("Contribution Agri");
      } else if (x === "CREDIT") {
        setXvalues(data["credit"]["x"]);
        setYvalues(data["credit"]["y"]);
        setChartTitle("CREDIT");
      } else if (x === "FERTILIZERS") {
        setXvalues(data["fertilizer"]["x"]);
        setYvalues(data["fertilizer"]["y"]);
        setChartTitle("Fertilizer");
      } else if (x === "FERTILIZERS_PROD") {
        setXvalues(data["fertilizer_prod"]["x"]);
        setYvalues(data["fertilizer_prod"]["y"]);
        setChartTitle("Fertilizer Prod");
      } else if (x === "RESERVES") {
        setXvalues(data["RESERVES"]["x"]);
        setYvalues(data["RESERVES"]["y"]);
        setChartTitle("RESERVES");
      } else if (x === "GNI") {
        setXvalues(data["GNI"]["x"]);
        setYvalues(data["GNI"]["y"]);
        setChartTitle("GNI");
      } else if (x === "TOTAL_DEBT") {
        setXvalues(data["TOTAL_DEBT"]["x"]);
        setYvalues(data["TOTAL_DEBT"]["y"]);
        setChartTitle("TOTAL DEBT");
      }
    }
  };

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyA8iE3bEmlzWw2N1k_boRhOqA1bQBeCTVo"></LoadScript>

      <Header countryId={countryId} />
      <hr/>

      <nav class="w3-sidebar" style={{ width: "300px" }}>
        <NewSideBar
          sidebarButtonClick={sidebarButtonClick}
          changeCountry={changeCountry}
        />
      </nav>

      <div class="w3-main" style={{ marginLeft: "350px" }}>
        {showGraph ? (
          <div class="w3-panel">
            <SliderComponent />
            <h1>Graphs</h1>{" "}
            <div class="w3-container w3-padding-32">
              <ChartDiv
                xvalues={xvalues}
                yvalues={yvalues}
                chartTitle={chartTitle}
              ></ChartDiv>
            </div>
          </div>
        ) : null}

        {showGraph2 ? (
          <div class="w3-panel">
            <SliderComponent />
            <h1>Graphs</h1>{" "}
            <div class="w3-container w3-padding-32">
              <ChartDiv2
                xvalues={xvalues}
                name1={name1}
                name2={name2}
                yvalues1={yvalues}
                yvalues2={yvalues2}
                chartTitle={chartTitle}
              ></ChartDiv2>
            </div>
          </div>
        ) : null}

        {showMap ? (
          <div className="crops">
            <GoogleMap
              id="circle-example"
              mapContainerStyle={mapContainerStyle}
              zoom={7}
              center={coordinates}
            >
              <Circle
                // required
                center={coordinates}
                // required
                options={options}
              />
            </GoogleMap>
          </div>
        ) : null}

        <br></br>
        <br></br>

        <br></br>
        <br></br>
      </div>
    </>
  );
};
