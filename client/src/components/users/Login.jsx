import { useState } from "react";

const initForm = {
  username: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = useState(initForm);
  function change(e) {
    const { name, value } = e.target;
    return setFormData({ ...formData, [name]: value });
  }
  function submit(e) {
    e.preventDefault();
  }

  return (
    <section>
      <form onSubmit={submit}>
        <h3>Username</h3>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={change}
        />
        <h3>Password</h3>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={change}
        />
      </form>
    </section>
  );
}
