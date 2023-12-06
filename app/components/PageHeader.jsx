import React from "react";
import { pressStart2P, instrumentSans } from "../styles/fonts";
import { sourceCodePro } from "../styles/fonts";
const PageHeader = ({ heading, boldText, description }) => {
  return (
    <>
      <h1 className={`${sourceCodePro.className} mb-10  uppercase`}>
        {heading}
      </h1>
      <p className={`${instrumentSans.className} mb-10`}>
        <strong>{boldText}</strong> {description}
      </p>{" "}
    </>
  );
};

export default PageHeader;
