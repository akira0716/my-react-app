import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN_URL}
      clientId={import.meta.env.VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_AUTHORIZATIONPARAMS_URL,
      }}
    >
      <LoginButton />
      <br />
      <LogoutButton />
    </Auth0Provider>
  );
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

function LogoutButton() {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: "http://localhost:5500", // ログアウト後にリダイレクトするURLを指定
    });
  };

  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default App;
