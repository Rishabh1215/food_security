import React from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export const SliderComponent = (props) => {
  const [value, setValue] = React.useState([1990, 2000]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const step = 5;
  const defaultValue = [1990, 2000];

  const temp = (e) => {
    props.updateLS(value);
    console.log(value);
  };
  return (
    <>
      <div class="w3-container w3-padding-32">
        <div class="slider">
          <div
            style={{
              margin: 'auto',
              display: 'block',
              width: '100%',
            }}
          >
            <Typography id="range-slider" gutterBottom>
              Select Year Range:
            </Typography>
            <Slider
              aria-label="Small steps"
              value={value}
              defaultValue={defaultValue}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
              min={1990}
              max={2020}
              step={step}
            />
          </div>
          <button class="w3-btn w3-blue w3-round-large" onClick={temp}>
            {' '}
            Update Graphs
          </button>
        </div>
      </div>
    </>
  );
};
