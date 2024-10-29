import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
const SettingIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="#eee" d="M9 7h16v16H9z" data-name="Rectangle 535" />
      </ClipPath>
    </Defs>
    <G
      clipPath="url(#a)"
      data-name="Mask Group 131"
      transform="translate(-9 -7)"
    >
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        transform="translate(9 7)"
      >
        <Circle
          cx={2}
          cy={2}
          r={2}
          data-name="Ellipse 34"
          transform="translate(6 6)"
        />
        <Path
          d="M12.933 10a1.1 1.1 0 0 0 .22 1.213l.04.04a1.334 1.334 0 1 1-1.887 1.887l-.04-.04a1.109 1.109 0 0 0-1.88.787V14a1.333 1.333 0 1 1-2.666 0v-.06A1.1 1.1 0 0 0 6 12.933a1.1 1.1 0 0 0-1.213.22l-.04.04a1.334 1.334 0 1 1-1.887-1.886l.04-.04a1.109 1.109 0 0 0-.787-1.88H2A1.333 1.333 0 0 1 2 6.72h.06A1.1 1.1 0 0 0 3.067 6a1.1 1.1 0 0 0-.22-1.213l-.04-.04A1.334 1.334 0 1 1 4.693 2.86l.04.04a1.1 1.1 0 0 0 1.213.22H6a1.1 1.1 0 0 0 .667-1.007V2a1.333 1.333 0 0 1 2.666 0v.06a1.109 1.109 0 0 0 1.88.787l.04-.04a1.334 1.334 0 1 1 1.887 1.886l-.04.04a1.1 1.1 0 0 0-.22 1.213V6a1.1 1.1 0 0 0 1.007.667H14a1.333 1.333 0 1 1 0 2.667h-.06a1.1 1.1 0 0 0-1.007.666Z"
          data-name="Path 826"
        />
      </G>
    </G>
  </Svg>
);
export default SettingIcon;
