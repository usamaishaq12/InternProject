import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
const MapPin = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={35} height={43} {...props}>
    <G
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      transform="translate(-.5 .833)"
    >
      <Path
        fill="#7ed957"
        d="M34 17.03c0 12.727-16 23.636-16 23.636S2 29.758 2 17.03A16.185 16.185 0 0 1 18 .667 16.185 16.185 0 0 1 34 17.03Z"
        data-name="Path 712"
      />
      <Circle
        cx={5}
        cy={5}
        r={5}
        fill="#fff"
        data-name="Ellipse 16"
        transform="translate(13 11.962)"
      />
    </G>
  </Svg>
);
export default MapPin;
