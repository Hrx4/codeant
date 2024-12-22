import React from "react";
import SigninOptions from "./SigninOptions";
import git from "../assets/git.png";
import gitlab from "../assets/gitlab.png";
import bucket from "../assets/bucket.png";
import azure from "../assets/azure.png";
const Saas = () => {
  return (
    <>
      <div className=" flex flex-col justify-evenly items-center h-3/5">
        <SigninOptions signIn="Sign in with Github" image={git} />
        <SigninOptions signIn="Sign in with Bitbucket" image={bucket} />
        <SigninOptions signIn="Sign in with Azure Devops" image={azure} />
        <SigninOptions signIn="Sign in with GitLab" image={gitlab} />
      </div>
    </>
  );
};

export default Saas;
