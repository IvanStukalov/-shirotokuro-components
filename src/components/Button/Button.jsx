import {pkg} from "../../consts/pkg.js";
import "./Button.css";

const style = (color) => {
  return {
    backgroundColor: color,
  }
}

export const Button = ({label, color, onClick, className, id}) => {
  return (
    <button className={`${pkg}--button ${className ?? ""}`}
            style={style(color)}
            onClick={onClick}
            id={id}
    >
      {label}
    </button>
  )
}
