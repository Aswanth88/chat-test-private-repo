import React, { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/utils/supabase";
import Link from "next/link";


const SignIn = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error("Sign-in error:", error.message);
      } else {
        router.push("/Main");
      }
    } catch (error) {
      console.error("Network request error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="email"
          required
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
          <button className="btn-blue btn-large w-full" type="submit">
        Sign in with OpenAgent
      </button>
    </form>
    </div>
  );
};
export default SignIn;
