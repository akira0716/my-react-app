import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://ztclrwbrgzxmgqxayrio.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0Y2xyd2JyZ3p4bWdxeGF5cmlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0NjA3ODgsImV4cCI6MjAzOTAzNjc4OH0.Gnt1cTpi5zUaK_BnDcrwEre8lTSetxiWMj1IDUmYdXc"
);

export const Login = async () => {
  const { data, error } = await supabase.auth
    .signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5500",
      },
    })
    .then(({ data, error }) => {
      console.log(data);
    });

  return data;
};

export const Logout = async () => {
  const { error } = await supabase.auth.signOut();
};

export const getData = async () => {
  let { data: books, error } = await supabase.from("books").select("*");

  return books;
};
