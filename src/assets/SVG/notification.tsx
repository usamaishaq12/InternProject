import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const Notification = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="#eee" d="M331 62h16v16h-16z" data-name="Rectangle 535" />
      </ClipPath>
    </Defs>
    <G
      clipPath="url(#a)"
      data-name="Mask Group 28"
      transform="translate(-331 -62)"
    >
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.455}
      >
        <Path
          d="M343.364 67.092a4.364 4.364 0 1 0-8.729 0c0 5.092-2.182 6.547-2.182 6.547h13.093s-2.182-1.455-2.182-6.547"
          data-name="Path 641"
        />
        <Path
          d="M340.258 76.548a1.455 1.455 0 0 1-2.517 0"
          data-name="Path 642"
        />
      </G>
    </G>
  </Svg>
);
export default Notification;
