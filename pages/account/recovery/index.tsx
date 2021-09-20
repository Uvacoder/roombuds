import type { NextPage } from "next";
import SidebBarDarkModeBtn from "../../../components/UI/Sidebar/SideBarDarkModeBtn";
import AccountLayout from "../../../components/Account/AccountLayout";
import AccountBackgroundImage from "../../../components/Account/AccountBackgroundImage";
import AccountBodyWrapper from "../../../components/Account/AccountBodyWrapper";
import AccountHeaderTitle from "../../../components/Account/AccountHeaderTitle";
import AccountMainWrapper from "../../../components/Account/AccountMainWrapper";
import AccountBottom from "../../../components/Account/AccountBottom";
import AccountForms from "../../../components/Account/AccountForms";

const Recovery: NextPage = () => {
  return (
    <>
      <AccountLayout title="Password Recovery">
        <AccountBackgroundImage />

        <AccountBodyWrapper>
          <AccountHeaderTitle title="Recovery for " />

          <AccountMainWrapper>
            <input
              placeholder="Your name"
              className="border-2 border-headline dark:border-btn_dark bg-background dark:bg-background_dark rounded-lg p-4 m-5 w-full"
            />
            <AccountForms title="Recovery" />

            <AccountBottom
              title="Sign In"
              supportNavigation="Already have an account ? &nbsp;"
              page="Password Recovery"
            />
            <SidebBarDarkModeBtn />
          </AccountMainWrapper>
        </AccountBodyWrapper>
      </AccountLayout>
    </>
  );
};

export default Recovery;
