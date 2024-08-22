import { useState } from "react";
import "../css/test-layout.css";
import { Login, Logout, getData } from "../utils/supabase";
import { useEffect } from "react";

const TestLayout = () => {
  const [data3, setData3] = useState([]);

  const Login2 = () => {
    console.log(Login());
  };

  const Logout2 = () => {
    console.log(Logout());
    setData3([]);
  };

  const ClickEvent = () => {
    getData().then((books) => setData3(books));
  };

  useEffect(() => {
    console.log(data3);
  }, [data3]);

  return (
    <div>
      <div>
        <button onClick={Login2}>ログイン</button>
      </div>
      <div>
        <button onClick={Logout2}>ログアウト</button>
      </div>
      <div>
        <button onClick={ClickEvent}>取得</button>
      </div>
    </div>
  );
};

export default TestLayout;
