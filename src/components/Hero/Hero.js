import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there, I'm<br />
          Shivam pandey.
        </SectionTitle>
        <SectionText>
        <h6>A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.</h6>
        </SectionText>
        {/* <Button onClick={props.handleClick}>Download CV</Button> */}
        <Button>
          <a href="https://drive.google.com/file/d/1X0-t1Ub88asQ_qYf3ANHnwML34YxYeTm/view?usp=sharing" download="CV.pdf" style={{color: "white"}}>
            Download CV
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;