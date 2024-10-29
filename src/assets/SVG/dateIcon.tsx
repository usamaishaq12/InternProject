import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Rect } from "react-native-svg";
const DateIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#e4e4e4"
          d="M475 3394h14v14h-14z"
          data-name="Rectangle 689"
        />
      </ClipPath>
    </Defs>
    <G
      clipPath="url(#a)"
      data-name="Mask Group 122"
      transform="translate(-475 -3394)"
    >
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.273}
        transform="translate(474.364 3393.364)"
      >
        <Rect
          width={11.455}
          height={11.455}
          data-name="Rectangle 694"
          rx={1.273}
          transform="translate(1.909 2.545)"
        />
        <Path d="M10.182 1.273v2.545" data-name="Line 64" />
        <Path d="M5.091 1.273v2.545" data-name="Line 65" />
        <Path d="M1.909 6.364h11.455" data-name="Line 66" />
      </G>
    </G>
  </Svg>
);
export default DateIcon;
