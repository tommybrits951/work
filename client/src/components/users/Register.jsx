import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
const initForm = {
  first_name: "",
  last_name: "",
  gender: "",
  dob: "",
  phone: "",
  email: "",
  username: "",
  password: "",
  role_id: "",
};
export default function Register() {
  const [formData, setFormData] = useState(initForm);

  function clear() {
    return setFormData(initForm);
  }

  function change(e) {
    const { name, value } = e.target;
    return setFormData({ ...formData, [name]: value });
  }

  function submit(e) {
    e.preventDefault();
    const user = formData;
    axios
      .post("http://localhost:9000/users", user)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err.result.data));
  }

  return (
    <section className="absolute h-full w-full bg-slate-600">
      <form
        onSubmit={submit}
        className="relative text-center bg-slate-800 rounded-xl w-3/6 left-1/4 top-16 w-3/46"
      >
        <h2 className="text-red-600 text-center text-4xl underline font-mono font-bold">
          Register New Employee
        </h2>
        <h3 className="text-white text-xl">First Name</h3>
        <input
          className="text-lg p-1 rounded-lg w-3/4"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={change}
          required
        />
        <h3 className="text-white text-xl">Last Name</h3>
        <input
          className="text-lg p-1 rounded-lg w-3/4"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={change}
          required
        />
        <div>
          <h3 className="text-white text-xl">Gender</h3>
          <label className="text-white m-2">
            Private
            <input
              className="text-lg p-1 rounded-lg scale-150 m-1"
              type="radio"
              name="gender"
              onChange={change}
              value={"Private"}
            />
          </label>
          <label className="text-white m-2">
            Male
            <input
              className="text-lg p-1 rounded-lg scale-150 m-1"
              type="radio"
              name="gender"
              onChange={change}
              value={"Male"}
              required
            />
          </label>
          <label className="text-white m-2">
            Female
            <input
              className="text-lg p-1 rounded-lg scale-150 m-1"
              type="radio"
              name="gender"
              onChange={change}
              value={"Female"}
              required
            />
          </label>
        </div>
        <h3 className="text-white text-xl">Date of Birth</h3>
        <input
          className="text-lg p-1 rounded-lg w-3/4"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={change}
          required
        />
        <h3 className="text-white text-xl">Phone</h3>
        <input
          className="text-lg p-1 rounded-lg w-3/4"
          name="phone"
          value={formData.phone}
          onChange={change}
        />
        <h3 className="text-white text-xl">Email</h3>
        <input
          className="text-lg p-1 rounded-lg w-3/4"
          name="email"
          type="email"
          value={formData.email}
          onChange={change}
          required
        />
        <h3 className="text-white text-xl">Username</h3>
        <input
          className="text-lg p-1 rounded-lg w-3/4"
          name="username"
          type="text"
          value={formData.username}
          onChange={change}
          required
        />
        <h3 className="text-white text-xl">Password</h3>
        <input
          className="text-lg p-1 rounded-lg w-3/4"
          name="password"
          type="password"
          value={formData.password}
          onChange={change}
          required
        />
        <br />
        <div className="flex justify-around p-3">
          <button className="bg-rose-500 py-2 px-3 rounded-2xl" onClick={clear}>
            Clear
          </button>
          <button className="bg-cyan-500 py-2 px-3 rounded-2xl" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
