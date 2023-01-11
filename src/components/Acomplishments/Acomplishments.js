import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Boxes } from "./AcomplishmentsStyles";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
} from "../../components/Projects/ProjectsStyles";

const data = [
  {
    title: "freecodecamp",
    description: "Responsive Web Design",
    visit:
      "https://www.freecodecamp.org/certification/JOSEPH_WAWERU/responsive-web-design",
  },
  {
    title: "freecodecamp",
    description: "JavaScript Algorithms and Data Structures",
    visit:
      "https://www.freecodecamp.org/certification/JOSEPH_WAWERU/javascript-algorithms-and-data-structures",
  },
  {
    title: "freecodecamp",
    description: "Front End Development Libraries",
    visit:
      "https://www.freecodecamp.org/certification/JOSEPH_WAWERU/front-end-development-libraries",
  },
  {
    title: "freecodecamp",
    description: "Data Visualization",
    visit:
      "https://www.freecodecamp.org/certification/JOSEPH_WAWERU/data-visualization",
  },
  {
    title: "freecodecamp",
    description: "Back End Development and APIs",
    visit:
      "https://www.freecodecamp.org/certification/JOSEPH_WAWERU/back-end-development-and-apis",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Certification</SectionTitle>
    <Boxes>
      {data.map(({ title, description, visit }) => (
        <BlogCard>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <UtilityList>
            <ExternalLinks href={visit} target="_blank">
              Certificate
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
