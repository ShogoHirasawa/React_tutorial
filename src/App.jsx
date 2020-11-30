import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert("テストアラート");
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか </ColorfulMessage>

      <ColorfulMessage color="pink">ごきげんよう</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
export default App;
