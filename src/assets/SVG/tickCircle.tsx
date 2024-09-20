import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const TickCircle = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={68}
    style={{ marginVertical: 25 }}
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          stroke="#707070"
          d="M150 444h75v75h-75z"
          data-name="Rectangle 550"
        />
      </ClipPath>
    </Defs>
    <G
      clipPath="url(#a)"
      data-name="Checkmark"
      transform="translate(-150 -444)"
    >
      <Path
        fill="#7ed957"
        d="M187.5 452.823a28.676 28.676 0 1 0 28.676 28.677 28.676 28.676 0 0 0-28.676-28.677Z"
        data-name="Path 171"
      />
      <Path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4.412}
        d="m175.771 484.064 7.224 6.4 16.233-18.661"
        data-name="Path 173"
      />
    </G>
  </Svg>
);
export default TickCircle;
