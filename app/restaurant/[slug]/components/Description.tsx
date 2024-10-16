import React from "react";

const Description = ({ description }: { description: string }) => (
  <div className="mt-4">
    <p className="text-lg font-light">{description}</p>
  </div>
);

export default Description;
