import React from "react";
import ProfileNav from "../elements/navs/profileNav";

const ProfileLayout = (props) => {
  console.log("--==ProfileLayout ", props);
  return (
    <>
      <ProfileNav />
      {props.children}
    </>
  );
};

export default ProfileLayout;
