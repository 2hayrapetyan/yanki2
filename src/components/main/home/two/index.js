import React from "react";
import "./section2.css";
import { Section } from "./../../../../Repeat";
import CategoryText from "./CategoryText";
import CategoryImg from "./CategoryImg";

export default function Section2() {
  return (
    <Section className='two'>
      <CategoryText />
      <CategoryImg />
    </Section>
  );
}
