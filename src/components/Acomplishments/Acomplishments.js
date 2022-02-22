import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Subs on LWDWS" },
  { number: 230, text: "Subs On Shubham Acharya" },
  { number: 5, text: "MERN Stack Projects" },
  { number: 1, text: "Year Experience In React" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxNum>{card.text}</BoxNum>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
