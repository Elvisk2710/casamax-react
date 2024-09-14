import { TbSearch } from "react-icons/tb";
import "./SearchCard.css";
import { Slider } from "@mui/material";
import { useState } from "react";
import Dropdown from "../dropDown/DropDown";
const SearchCard = () => {
  const [inputValue, setValue] = useState(100);
  function valuetext(value) {
    setValue(value);
  }
  const searchOptions = [
    'University of Zimbabwe',
    'Africa University',
    'National University of Science and Technology',
    'Midlands State University',
    'Great Zimbabwe University',
    'Harare Institute of Technology',
    'Bindura University of Science and Education',
    'Chinhoyi University of Technology'
  ]
  return (
    <div className="container">
      <h3 className="heading">
        Search
      </h3>
      <div className="dropdown">
        <Dropdown options={searchOptions} defaultValue={'Choose A University'}/>
      </div>
      <div className="input">
        <Slider
          onChange={() => setValue()}
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={50}
          max={250}
        />
      </div>
      <div className="button">
        <button>
          <TbSearch size={20} color="white"/>
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
