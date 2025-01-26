import React from "react";
import Card from "../general/Card";
import TextStack from "../general/TextStack";

function DesignPrinciple({ id, src, alt, title, p }) {
  return (
    <Card>
      <span>Design Principle {id}</span>
      <img src={src} alt={alt} />
      <TextStack header={title} className="font-medium text-text-a11y">
        <p className="font-normal text-text-default">{p}</p>
      </TextStack>
    </Card>
  );
}

export default DesignPrinciple;
