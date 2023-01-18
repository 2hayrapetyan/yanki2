
import React from "react";
import { Section } from "../../../../Repeat";
import Button from "./Button";

import Header3 from "./Header3";
import "./section3.css"
import Submit from "./Submit";
import Text from "./Text";

export default function Section3() {
    return(
        <Section className="sec3">
            <Header3 />
            <Submit />
            <Button />
            <Text />
        </Section>
    )
}