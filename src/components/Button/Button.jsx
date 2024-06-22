import {pkg} from "../../consts/pkg.js";

const style = (color) => {
  return {
    backgroundColor: color,
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "medium",
  }
}

export const Button = ({label, color, onClick}) => {
  return (
    <button className={`${pkg}--button`}
            style={style(color)}
            onClick={onClick}
    >
      {label}
    </button>
  )
}
