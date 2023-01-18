import React from "react";
import "./footer.css";
import { Section } from "../../Repeat";
import Contacts from "./Contacts";
import Company from "./Company";
import Useful from "./Useful";
import Buyer from "./Buyer";

export default function Footer() {
  return (
    <Section className='footer'>
      <Company />
      <Useful />
      <Buyer />
      <Contacts />
    </Section>
  );
}
