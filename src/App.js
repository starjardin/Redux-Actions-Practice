import React from 'react';

// containers
import Users from "./containers/Users";
import CounterButton from "./containers/CounterButton";
import SpecialTextBox from "./containers/SpecialTextBox";
import Counter from "./containers/Counter";
import SpecialText from "./containers/SpecialText";
import Thermostat from "./containers/Thermostat";
import ChangeTemperature from "./containers/ChangeTemperature";
import CurrentCity from "./containers/CurrentCity";
import CityDropDown from "./containers/CityDropDown";
import Modal from "./containers/Modal";
import ShowModal from "./containers/ShowModal";

// components
import UserButtons from "./components/UserButtons";
import ImagePreview from "./components/ImagePreview";
import ImageUrlTextBox from "./components/ImageUrlTextBox";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./containers/SortUsers";
import ScaleImage from "./components/ScaleImage";


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