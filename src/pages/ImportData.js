import React from "react";
import { Header } from "../components/Header";
import { ImportSideBar } from "../components/ImportSideBar";
import { getImportData } from "../data/data";

export const ImportData = () => {
  const [country, setCountry] = React.useState();
  const [year, setYear] = React.useState();
  const [type, setType] = React.useState();
  // eslint-disable-next-line no-unused-vars
  const [_, setPieData] = React.useState();

  const changeCountry = (countryName) => {
    console.log("***********", countryName);
    setCountry(countryName);
  };
  const changeType = (type) => {
    console.log("***********", type);
    setType(type);
  };
  const changeYear = (year) => {
    console.log("***********", year);
    setYear(year);
  };

  const updatePie = () => {
    let allImportData = getImportData();
    console.log(allImportData);
    if (country === "egypt") {
      if (type === "Wheat") {
        setPieData(allImportData[1][year]);
      } else if (type === "Rice") {
        setPieData(allImportData[0][year]);
      }
    } else if (country === "sa") {
      if (type === "Wheat") {
        setPieData(allImportData[3][year]);
      } else if (type === "Rice") {
        setPieData(allImportData[2][year]);
      }
    }
  };

  return (
    <>
      <Header />
      <nav class="w3-sidebar" style={{ width: "300px" }}>
        <ImportSideBar
          changeCountry={changeCountry}
          changeType={changeType}
          changeYear={changeYear}
          updatePie={updatePie}
        />
      </nav>
      <div class="w3-main" style={{ marginLeft: "350px", marginTop: "170px" }}>
        <div class="w3-panel">
          <h1>Graphs</h1> <div class="w3-container w3-padding-32"></div>
        </div>
      </div>
    </>
  );
};
