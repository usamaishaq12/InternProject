import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
const CameraIcon = ({ color = "black" }) => (
  <Svg width={25} height={25}>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h25v25H0z" data-name="Rectangle 665" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)" data-name="Mask Group 97">
      <G
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        transform="translate(1.042 3.125)"
      >
        <Path
          d="M22.916 16.667a2.083 2.083 0 0 1-2.083 2.083H2.083A2.083 2.083 0 0 1 0 16.667V5.208a2.083 2.083 0 0 1 2.083-2.083H6.25L8.333 0h6.25l2.083 3.125h4.167a2.083 2.083 0 0 1 2.083 2.083Z"
          data-name="Path 783"
        />
        <Circle
          cx={4.167}
          cy={4.167}
          r={4.167}
          data-name="Ellipse 26"
          transform="translate(7.292 6.25)"
        />
      </G>
    </G>
  </Svg>
);
export default CameraIcon;
