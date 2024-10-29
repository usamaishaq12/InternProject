import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const TickCheckGreen = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 20 20" {...props}>
    <Path
      fill="#7ED957"
      d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm5.12 7.236-6.428 6.457a.868.868 0 0 1-.558.264.842.842 0 0 1-.563-.274L4.875 10.99a.192.192 0 0 1 0-.274l.856-.856a.186.186 0 0 1 .269 0l2.135 2.135L14 6.086a.19.19 0 0 1 .135-.061.175.175 0 0 1 .135.058l.841.87a.19.19 0 0 1 .014.283Z"
      data-name="Icon ionic-ios-checkmark-circle"
    />
  </Svg>
);
export default TickCheckGreen;
