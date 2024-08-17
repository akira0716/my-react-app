import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{" "}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    );
  }

  return <LoginButton />;
}

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      connection: "google-oauth2",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Log in with Google</button>
    </div>
  );
}

export default App;
