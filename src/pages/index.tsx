// pages/index.tsx
import MainLayout from "../components/Layout/MainLayout";
import SharingOptions from "../components/SharingOptions/SharingOptions";
import IndividualInboxSharing from "../components/UserSharing/IndividualInboxSharing";
import Tabs from "../components/Tabs/Tabs";

const Home: React.FC = () => {
  return (
    <MainLayout>
      {/* Tabs Component */}
      <div style={{ margin: "20px 0" }}></div>
      <Tabs />
      <div style={{ margin: "20px 0" }}></div>
      {/* Existing Components */}
      <SharingOptions />
      <div
        style={{ borderBottom: "1px solid #4a4a4a", margin: "20px 0" }}
      ></div>

      <IndividualInboxSharing />
    </MainLayout>
  );
};

export default Home;
