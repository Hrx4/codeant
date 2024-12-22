import React from "react";
import SigninOptions from "./SigninOptions";
import sso from "../assets/key.png";
import gitlab from "../assets/gitlab.png";
const SelfHosted = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center h-3/5">
        <SigninOptions signIn="Self Hosted GitLab" image={gitlab} />
        <SigninOptions signIn="Sign in with SSO" image={sso} />
      </div>
    </>
  );
};

export default SelfHosted;
