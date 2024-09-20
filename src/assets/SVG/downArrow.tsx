import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const DownArrow = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="#444" d="M0 0h8v8H0z" data-name="Rectangle 540" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)" data-name="Mask Group 20">
      <Path
        fill="#444"
        d="M7.851 1.9a.48.48 0 0 0-.351-.15h-7a.48.48 0 0 0-.352.15.491.491 0 0 0 0 .7l3.5 3.5a.49.49 0 0 0 .7 0l3.5-3.5a.49.49 0 0 0 0-.7Z"
        data-name="Path 170"
      />
    </G>
  </Svg>
);
export default DownArrow;
