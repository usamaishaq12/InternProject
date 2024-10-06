import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const RightArrow = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#e4e4e4"
          d="M337 408h12v12h-12z"
          data-name="Rectangle 703"
        />
      </ClipPath>
    </Defs>
    <G
      clipPath="url(#a)"
      data-name="Mask Group 127"
      transform="translate(-337 -408)"
    >
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.426}
      >
        <Path d="M338.008 414h9.983" data-name="Line 67" />
        <Path d="m343 409.008 4.992 4.992-4.992 4.992" data-name="Path 822" />
      </G>
    </G>
  </Svg>
);

export default RightArrow;
