import useKakaoLoader from "./hooks/useKakaoLoader";
import Router from "./router/Router";

function App() {
  useKakaoLoader();

  return (
    <>
      <Router />
    </>
  );
}

export default App;
