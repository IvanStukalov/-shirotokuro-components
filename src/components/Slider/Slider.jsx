import {pkg} from "../../consts/pkg.js";
import {colors} from "../../colors/colors.js";

const style = {
  background: colors.backgroundSecondary,
  '&::-webkit-slider-thumb': {
    background: colors.primary,
  },
  '&::-moz-range-thumb': {
    background: colors.primary,
  }
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
