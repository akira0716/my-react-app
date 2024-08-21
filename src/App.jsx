import { useAuth0 } from "@auth0/auth0-react";
import Card from "./components/Card";
import { useState } from "react";
import TestLayout from "./page/TestLayout";

function App() {
  const [pageNo, setPageNo] = useState(0);

  switch (pageNo) {
    case 1:
      return (
        <div>
          <Card />
          <button onClick={() => setPageNo(0)}>戻る</button>
        </div>
      );

    case 2:
      return (
        <div>
          <TestLayout />
          <button onClick={() => setPageNo(0)}>戻る</button>
        </div>
      );

    default:
      break;
  }

  const { isAuthenticated, user, logout } = useAuth0();

  if (isAuthenticated == false) {
    return (
      <div>
        {/* Hello {user.name}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
        <pre>{JSON.stringify(user, null, 2)}</pre> */}
        <div>
          <button onClick={() => setPageNo(1)}>カードをひっくり返そう！</button>
        </div>
        <div>
          <button onClick={() => setPageNo(2)}>レイアウトの実験</button>
        </div>
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
