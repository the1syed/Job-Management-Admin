import * as React from "react";
import { styled, alpha, Box } from "@mui/system";
import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";

// Props: salary = [min, max], setSalary = function to update salary range
export default function RangeSlider({ salary, setSalary }) {
  const handleChange = (event, newValue) => {
    setSalary(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <StyledSlider
        value={salary}
        onChange={handleChange}
        getAriaLabel={() => "Salary range"}
        getAriaValueText={valueText}
        min={10000}
        max={500000}
        step={10000}
        valueLabelDisplay="auto"
        disableSwap={false}
      />
    </Box>
  );
}

// Show value as ₹ in K or L
function valueText(value) {
  return value >= 100000
    ? `₹${(value / 100000).toFixed(1)}L`
    : `₹${value / 1000}K`;
}

// ---- STYLING ----

const StyledSlider = styled(BaseSlider)(
  ({ theme }) => `
  color: #000;
  height: 2px;
  width: 100%;
  padding: 16px 0;
  display: inline-flex;
  position: relative;
  touch-action: none;

  &.${sliderClasses.disabled} {
    opacity: 0.4;
    pointer-events: none;
  }

  & .${sliderClasses.rail} {
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #ccc;
  }

  & .${sliderClasses.track} {
    height: 4px;
    border-radius: 4px;
    background-color: #CCC2C2;
  }

  & .${sliderClasses.thumb} {
    width: 16px;
    height: 16px;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    cursor: grab;

    &:hover {
      box-shadow: 0 0 0 6px ${alpha("#007FFF", 0.2)};
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      background-color: white;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 8px ${alpha("#007FFF", 0.3)};
      cursor: grabbing;
    }
  }

  & .${sliderClasses.mark} {
    display: none;
  }
`
);
