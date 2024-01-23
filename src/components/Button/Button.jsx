import { useEffect } from "react";
import "./Button.scss";

const Button = (props) => {
    const { onClick, color, disabled } = props;

    useEffect(() => {
        return () => {
            console.log("MOUNT AND UNMOUNT BUTTON");
        };
    }, []);

    return (
        <button
      type="button"
      disabled={disabled}
      className="button"
      onClick={onClick}
      style={{ [`--btn-bg`]: color }}
    >
      Vos ingredients
    </button>
    );
};

export default Button;
