import React from 'react';
import { ChartDiv } from '../components/ChartDiv';
import { Header } from '../components/Header';
import Sidebar from '../components/Sidebar';
// import { Slider, RangeSlider } from 'rsuite';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import StepRangeSlider from 'react-step-range-slider';
import { SliderComponent } from '../components/SliderComponent';
import { getAllData } from '../data/data';
import { NewSideBar } from '../components/NewSideBar';
export const ResearcherView = () => {
  const [xvalues, setXvalues] = React.useState();
  const [yvalues, setYvalues] = React.useState();
  const [chartTitle, setChartTitle] = React.useState();
  const [countryId, setCountryId] = React.useState(0);
  const [graphType, setGraphType] = React.useState('GDP');

  const changeCountry = (countryId) => {
    console.log('***********', countryId);
    setCountryId(countryId);
    console.log(graphType, countryId);
    sidebarButtonClick(graphType, countryId);
  };

  const sidebarButtonClick = (x, y) => {
    if (!y) {
      y = countryId;
    }
    console.log(x, y);
    let allData = getAllData();
    let data = allData[y];
    setGraphType(x);
    // console.log(allData);
    console.log(data);
    // console.log('CLicked', x);
    if (x === 'GDP') {
      setXvalues(data['GDP']['x']);
      setYvalues(data['GDP']['y']);
      setChartTitle('GDP');
    } else if (x === 'FDI_INFLOW') {
      setXvalues(data['fdi_inflow']['x']);
      setYvalues(data['fdi_inflow']['y']);
      setChartTitle('FDI_INFLOW');
    } else if (x === 'FDI_OUTFLOW') {
      setXvalues(data['fdi_outflow']['x']);
      setYvalues(data['fdi_outflow']['y']);
      setChartTitle('FDI_OUTFLOW');
    } else if (x === 'AGRI') {
      setXvalues(data['contribution_agri']['x']);
      setYvalues(data['contribution_agri']['y']);
      setChartTitle('Contribution Agri');
    } else if (x === 'CREDIT') {
      setXvalues(data['credit']['x']);
      setYvalues(data['credit']['y']);
      setChartTitle('CREDIT');
    } else if (x === 'FERTILIZERS') {
      setXvalues(data['fertilizer']['x']);
      setYvalues(data['fertilizer']['y']);
      setChartTitle('Fertilizer');
    } else if (x === 'FERTILIZERS_PROD') {
      setXvalues(data['fertilizer_prod']['x']);
      setYvalues(data['fertilizer_prod']['y']);
      setChartTitle('Fertilizer Prod');
    } else if (x === 'RESERVES') {
      setXvalues(data['RESERVES']['x']);
      setYvalues(data['RESERVES']['y']);
      setChartTitle('RESERVES');
    } else if (x === 'GNI') {
      setXvalues(data['GNI']['x']);
      setYvalues(data['GNI']['y']);
      setChartTitle('GNI');
    } else if (x === 'TOTAL_DEBT') {
      setXvalues(data['TOTAL_DEBT']['x']);
      setYvalues(data['TOTAL_DEBT']['y']);
      setChartTitle('TOTAL DEBT');
    }
  };

  return (
    <>
      <Header />
      <nav class="w3-sidebar" style={{ width: '300px' }}>
        {/* <Sidebar sidebarButtonClick={sidebarButtonClick} /> */}
        <NewSideBar
          sidebarButtonClick={sidebarButtonClick}
          changeCountry={changeCountry}
        />
      </nav>
      <div class="w3-main" style={{ marginLeft: '350px', marginTop: '170px' }}>
        <div class="w3-panel">
          <SliderComponent />
          <h1>Graphs</h1>{' '}
          <div class="w3-container w3-padding-32">
            <ChartDiv
              xvalues={xvalues}
              yvalues={yvalues}
              chartTitle={chartTitle}
            ></ChartDiv>
          </div>
        </div>
      </div>
    </>
  );
};
