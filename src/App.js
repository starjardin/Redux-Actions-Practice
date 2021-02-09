import React from 'react';

// containers
import Users from "./containers/Users";
import CounterButton from "./containers/CounterButton";
import Counter from "./containers/Counter";
import Modal from "./containers/Modal";
import ChangeTemperature from "./containers/ChangeTemperature";
import CityDropDown from "./containers/CityDropDown";
import CurrentCity from "./containers/CurrentCity";
import SearchTextBox from "./containers/SearchTextBox";
import ShowModal from "./containers/ShowModal";
import SortUsers from "./containers/SortUsers";
import SpecialText from "./containers/SpecialText";
import SpecialTextBox from "./containers/SpecialTextBox";
import Thermostat from "./containers/Thermostat";
import UserButtons from "./containers/UserButtons";
import ImagePreview from "./containers/ImagePreview";
import ImageUrlTextBox from "./containers/ImageUrlTextBox";

// components
import ScaleImage from "./containers/ScaleImage";


function App() {
  return (
      <div className="App">
        <div className="container">
          <h2>Inputs</h2>
          <CounterButton />
          <br />
          <SpecialTextBox />
          <br/>
          <SearchTextBox />
          <br/>
          <SortUsers />
          <br />
          <UserButtons />
          <br />
          <CityDropDown />
           <br />
          <ChangeTemperature />
          <br />
          <ImageUrlTextBox />
          <br />
          <ScaleImage />
          <br />
          <ShowModal />
        </div>
        <div className="container">
          <h2>Outputs</h2>
          <Counter />
          <br />
          <SpecialText />
          <br />
          <CurrentCity />
          <br />
          <Thermostat />
          <br />
          <ImagePreview />
          <br />
          
          
        </div>
        <div className="container">
          <h2>Users</h2>
          <Users />
        </div>
        <Modal />
      </div>
  );
}
export default App;