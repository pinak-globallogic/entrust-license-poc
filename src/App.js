import Router from "./Routes/index";
import LayoutWrapper from "./Layouts/Main/index";
import { createContext, useState } from "react";

export const AppContext = createContext();

const App = () => {
  const [state, setState] = useState({
    customer: {
      name: "Company ABC",
    },
    product: {
      name: "KMS Key Manager Site License",
      salesOrderNo: "12345",
      lineItemNo: "1.1",
      productItemNo: "654123879",
    },
    feature: {
      edition: "Professional",
    },
    limitation: {
      limitCount: "Site License",
      expiration: "365 days",
    },
    user: {
      name: "",
      role: "",
    },
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      <LayoutWrapper>
        <Router />
      </LayoutWrapper>
    </AppContext.Provider>
  );
};

export default App;
