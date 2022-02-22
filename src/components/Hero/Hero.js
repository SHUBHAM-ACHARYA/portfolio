import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi <br />
        I'm SHUBHAM ACHARYA
      </SectionTitle>
      <SectionText>
        I build attractive web application base on MERN Stack Technology
        <br />I'm also familiar with Front End Languages like php and database
        like SQL and MongoDB
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
