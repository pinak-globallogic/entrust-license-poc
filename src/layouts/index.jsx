import ContentLayout from "./main";
import Header from "./header";
import Router from "routes";

const LayoutWrapper = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <Router />
      </ContentLayout>
    </>
  );
};

export default LayoutWrapper;
