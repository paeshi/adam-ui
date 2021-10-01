import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MySlider, { ISliderProps, SliderSize } from "./MySlider";

export default {
  title: "Example/MySlider",
  component: MySlider,
} as ComponentMeta<typeof MySlider>;

// const Template: ComponentStory<ISliderProps> = (args) => <MySlider {...args}></MySlider></MySlider>;

export const Default = () => (
  <MySlider>
    <div className="slider-container">
      <div className="slider-inner">
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
  </MySlider>
);
