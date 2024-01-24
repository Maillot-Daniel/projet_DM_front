import "./Input.scss";

const Input = (props) => {
  const { id, type, label, value, required, onChange } = props;

  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div className="input__container">
      <label
        className="input__label"
        htmlFor={id}
      >
        {label || "Input label"}
      </label>

      <input
        id={id}
        name={id}
        className="input"
        value={value || ""}
        required={required}
        type={type || "text"}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};


export default Input;





// import "./input.scss";

// const Input = (props) => {
//     const { id, type, label, value, required, onChange } = props;

//     return (
//         <div className="input__container">
//       <label
//         className="input__label"
//         htmlFor={id}
//       >
//         {label || "Input label"}
//       </label>

//       <input
//         id={id}
//         name={id}
//         className="input"
//         value={value || ""}
//         required={required}
//         onChange={onChange}
//         type={type || "text"}
//       />
//     </div>
//     );
// };

// export default Input;
