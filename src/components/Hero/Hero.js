import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Joseph Waweru (JW)
      </SectionTitle>
      <SectionText>
        I am a Software developer dedicated to improving skills through hands-on
        learning and development work. Proficient in mobile and desktop
        development environments. Adept at using HTML 5, JavaScript, Node.js,
        CSS and other programming languages to produce clean code.
        Well-organized and collaborative team player with strong communication
        and analytical abilities.
      </SectionText>
      <Button onClick={() => window.open("https://github.com/", "_blank")}>
        GitHub
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
