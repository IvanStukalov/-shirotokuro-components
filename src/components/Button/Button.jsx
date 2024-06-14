import {pkgName} from "../../consts/pkg.js";

export const Button = ({label, color, onClick}) => {
  return (
    <button className={`${pkgName}--button`}
            style={{
              backgroundColor: color,
            }}
            onClick={onClick}
    >
      {label}
    </button>
  )
}
