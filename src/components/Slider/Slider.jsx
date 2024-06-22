import {pkg} from "../../consts/pkg.js";
import {colors} from "../../colors/colors.js";
import "./Slider.css";

const style = {
  background: colors.backgroundSecondary,
}

export const Slider = ({className, id}) => {
  return (
    <input type="range"
           className={`${pkg}--slider ${className}`}
           style={style}
           id={id}
    />
  );
}
