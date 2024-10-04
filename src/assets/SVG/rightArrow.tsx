import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
const RightArrow = (props: any) => (
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
      data-name="Mask Group 121"
      transform="translate(-475 -3394)"
    >
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.167}
        transform="translate(475 3394)"
      >
        <Path
          d="M12.25 5.833c0 4.084-5.25 7.584-5.25 7.584s-5.25-3.5-5.25-7.583a5.25 5.25 0 1 1 10.5 0Z"
          data-name="Path 820"
        />
        <Circle
          cx={1.75}
          cy={1.75}
          r={1.75}
          data-name="Ellipse 32"
          transform="translate(5.25 4.083)"
        />
      </G>
    </G>
  </Svg>
);
export default RightArrow;
