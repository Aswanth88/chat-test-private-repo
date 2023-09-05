import { supabase } from './supabase'; // Import your supabase instance
import { useRouter } from 'next/router';



export async function signInWithGoogle(router) {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })

    if (error) {
      console.error("Sign-in error:", error.message);
    } else {
      // Handle successful sign-in
      router.push('/Main'); // Redirect to the Main page after successful sign-in
    }
  } catch (e) {
    console.error("Error during sign-in:", e.message);
  }
}

export async function signInWithGitHub(router) {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    });
    if (error) {
      console.error("Sign-in error:", error.message);
    } else {
      // Handle successful sign-in
      router.push('/Main'); // Redirect to the Main page after successful sign-in
    }
  } catch (e) {
    console.error("Error during sign-in:", e.message);
  }
}
