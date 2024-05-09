import DefaultContainer from "@/components/DefaultContainer";
import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import OrganizationChart from "./components/OrganizationChart";

const OrganizationStructurePage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.organizationalStructure} />
      <DefaultContainer>
        <Header />
        <Toolbar />
        <div className="mx-10">
          <OrganizationChart />
        </div>
      </DefaultContainer>
    </div>
  );
};

export default OrganizationStructurePage;
