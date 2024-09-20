import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
const DeleteIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M47 47h12v12H47z" data-name="Rectangle 762" />
      </ClipPath>
    </Defs>
    <G transform="translate(-41 -41)">
      <Circle
        cx={12}
        cy={12}
        r={12}
        fill="red"
        data-name="Ellipse 36"
        transform="translate(41 41)"
      />
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.619}
        clipPath="url(#a)"
        data-name="Mask Group 132"
      >
        <Path d="m57.856 48.145-9.711 9.711" data-name="Line 71" />
        <Path d="m48.145 48.145 9.711 9.711" data-name="Line 72" />
      </G>
    </G>
  </Svg>
);
export default DeleteIcon;
