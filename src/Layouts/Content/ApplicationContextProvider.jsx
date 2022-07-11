import { createContext, useState } from "react";
import Sidenav from "Layouts/Nav";
import Content from "./Content";

// creating context to manage state between side navigation bar and the main content
export const AppContext = createContext();

const ApplicationContextProvider = (props) => {
  const [adminComponent, setAdminComponent] = useState(0);

  return (
    <AppContext.Provider
      value={[adminComponent, setAdminComponent]}
    >
      <Sidenav xs={1.7} />
      <Content xs pt={0} {...props} />
    </AppContext.Provider>
  );
};

export default ApplicationContextProvider;
