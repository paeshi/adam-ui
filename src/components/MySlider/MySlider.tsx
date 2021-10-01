import React, { ReactNode } from "react";
import genClassName from "../../util/genClassName";

// export enum SliderType {
//   Default = "default",
// }

export enum SliderSize {
  Large = "lg",
  Small = "sm",
}
export interface ISliderProps {
  children: ReactNode;
  sliderSize?: SliderSize;
  //   sliderType: SliderType;
}

const MySlider: React.FC<ISliderProps> = (props) => {
  const { children, sliderSize } = props;
  let classNameList: string[] = ["slider"];
  if (sliderSize === SliderSize.Large) {
    classNameList.push("slider-lg");
  }
  if (sliderSize === SliderSize.Small) {
    classNameList.push("slider-sm");
  }

  const classNames = classNameList.join(" ");
  return <div className={classNames}>{children}</div>;
};

export default MySlider;
