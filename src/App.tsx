import React from "react";
import "./styles/index.scss";
import MyButton, {
  ButtonSize,
  ButtonType,
} from "./components/MyButton/MyButton";
import MySlider, { SliderSize } from "./components/MySlider/MySlider";

function App() {
  return (
    <div className="App">
      <h1>Adam UI</h1>
      <h4>Default</h4>
      <MyButton>Default</MyButton>
      <MyButton disabled>Disabled</MyButton>
      <MyButton isDark>Dark Button</MyButton>
      <MyButton className="btn-red">Additional Class Name</MyButton>
      <h4>Sizes</h4>
      <MyButton buttonSize={ButtonSize.Small}>Small Button</MyButton>
      <MyButton buttonSize={ButtonSize.Large}>Large Button</MyButton>
      <h4>Types</h4>
      <MyButton>Default Button</MyButton>
      <MyButton buttonType={ButtonType.Primary}>Primary Button</MyButton>
      <MyButton buttonType={ButtonType.Secondary}>Secondary Button</MyButton>
      <MyButton buttonType={ButtonType.Danger}>Danger Button</MyButton>
      <MyButton href={"https://www.google.com"} buttonType={ButtonType.Link}>
        Link Button
      </MyButton>
      <MyButton
        href={"https://www.google.com"}
        buttonType={ButtonType.Link}
        disabled
      >
        Link Button
      </MyButton>

      <h2>Slider</h2>
      <MySlider sliderSize={SliderSize.Large}>
        <div className="slider-container">
          <div className="slider-inner">
            <div className="slider-item">
              <img
                src="https://source.unsplash.com/collection/190727/1600x900"
                alt=""
              />

              <img
                src="https://source.unsplash.com/collection/190728/1600x900"
                alt=""
              />

              <img
                src="https://source.unsplash.com/collection/190726/1600x900"
                alt=""
              />

              <img
                src="https://source.unsplash.com/collection/190725/1600x900"
                alt=""
              />

              <img
                src="https://source.unsplash.com/collection/190723/1600x900"
                alt=""
              />
            </div>
          </div>
        </div>
      </MySlider>
    </div>
  );
}

export default App;
