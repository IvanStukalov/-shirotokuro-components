import {pkg} from "../../consts/pkg.js";

const style = (color) => {
  return {
    backgroundColor: color,
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "medium",
    cursor: "pointer",
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
