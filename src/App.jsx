import Router from "./Routes/index";
import LayoutWrapper from "./Layouts/index";

const App = () => {
  return (
    <LayoutWrapper>
      <Router />
    </LayoutWrapper>
  );
};

export default App;
