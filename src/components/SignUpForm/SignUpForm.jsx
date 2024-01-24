import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./SignUpForm.scss";

const SignUpForm = (props) => {
  // const [email, setEmail] = useState("");
  // const [pseudo, setPseudo] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPass, setConfirmPass] = useState("");
  const [form, setForm] = useState({
    email: "",
    pseudo: "",
    password: "",
    confirmPass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log("email =", form.email);
    console.log("pseudo =", form.pseudo);
    console.log("password =", form.password);
    console.log("confirm password =", form.confirmPass);
  };

  const updateForm = (value, inputName) => {
    setForm({
      ...form,
      [inputName]: value,
    });

    // if (inputName === "email") {
    //   setForm({
    //     ...form,
    //     email: value,
    //   });
    // } else if (inputName === "pseudo") {
    //   setForm({
    //     ...form,
    //     pseudo: value,
    //   });
    // }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sign-up-form"
    >
      <Input
        label="Email"
        value={form.email}
        onChange={(value) => updateForm(value, "email")}
      />
      <Input
        label="Pseudo"
        value={form.pseudo}
        onChange={(value) => updateForm(value, "pseudo")}
      />
      <Input
        label="Mot de passe"
        value={form.password}
        onChange={(value) => updateForm(value, "password")}
      />
      <Input
        label="Confirmation du mot de passe"
        value={form.confirmPass}
        onChange={(value) => updateForm(value, "confirmPass")}
      />

      <Button
        type={"submit"}
        text={"Valider"}
        color={"var(--green-light)"}
      />
    </form>
  );
};

export default SignUpForm;
