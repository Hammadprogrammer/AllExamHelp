"use client";
import TrustedBy from "@/container/All-props-comp/trusted_by/trusted_by";

const TrustedByHome = () => {
  const logos = [
    { src: "/lg1.png", alt: "Berkeley" },
    { src: "/lg2.png ", alt: "Cornell University" },
    { src: "/lg3.png", alt: "MIT" },
    { src: "/lg4.png", alt: "Washington University" },
    { src: "/lg5.png", alt: "Harvard University" }

  ];

  return (
    <TrustedBy
      heading="Trusted By Top Companies"
      logos={logos}
    />
  );
};

export default TrustedByHome;
