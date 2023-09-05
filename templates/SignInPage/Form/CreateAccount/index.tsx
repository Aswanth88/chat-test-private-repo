import React, { useState } from 'react';
import Field from '@/components/Field';
import { supabase } from '@/utils/supabase';
import Link from 'next/link';

type CreateAccountProps = {};

const CreateAccount = ({}: CreateAccountProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const createAccountWithSupabase = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
      } else {
        // Registration successful, you can redirect to another page or show a success message
        console.log('User registered successfully!');
      }
    } catch (error) {
      setError('An error occurred during registration.');
    }
  };

  return (
    <form onSubmit={createAccountWithSupabase}>
      <input
        className="mb-4 dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent" // Apply the class directly here
        placeholder="Fullname"
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <input
        className="mb-4 dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent" // Apply the class directly here
        placeholder="Email"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className="mb-6 dark:bg-n-7 dark:border-n-7 dark:focus:bg-transparent" // Apply the class directly here
        placeholder="Password"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <button className="btn-blue btn-large w-full mb-6" type="submit">
        Create Account
      </button>
      <div className="text-center caption1 text-n-4">
        By creating an account, you agree to our{' '}
        <Link
          className="text-n-5 transition-colors hover:text-n-7 dark:text-n-3 dark:hover:text-n-1"
          href="/"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          className="text-n-5 transition-colors hover:text-n-7 dark:text-n-3 dark:hover:text-n-1"
          href="/"
        >
          Privacy & Cookie Statement
        </Link>
        .
      </div>
    </form>
  );
};

export default CreateAccount;
