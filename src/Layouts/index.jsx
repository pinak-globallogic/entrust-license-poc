import ContentLayout from "./Content/ContentLayout";
import Header from "./Header";
import Router from "Routes";

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
