import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import { Wrapper, Grid, Item, Content } from "./styles";

const Certification = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="projects">
      <h2>CERTIFICATIONS</h2>
      <Grid>
        <Item theme={theme}>
          <Card theme={theme}>
            <Content theme={theme}>
              <div>
                <h4>Amazon Web Services Solutions Architect Associate</h4>
                <p>
                  It is for professionals who run enterprise architecture
                  programs, as well as solutions architects. It covers
                  deployment of AWS systems, skills for working with the Amazon
                  Cloud and other services, including:
                  <ul>
                    <li>Identity access management (IAM)</li>
                    <li>Amazon Elastic Compute Cloud (EC2) </li>
                    <li>Simple Storage Service (S3) </li>
                    <li>Autoscaling and Load balancing</li>
                    <li>Serverless Websites</li>
                    <li>Relational Database Service (RDS)</li>
                    <li>DynamoDB</li>
                    <li>Virtual Private Cloud (VPC)</li>
                  </ul>
                </p>
                <br />
                <h5>
                  <a
                    href="https://drive.google.com/file/d/10cOkg0qaNTeWP5JnEd-tQY1Nf0_PDMYn/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content__link"
                  >
                    CERTIFICATE
                  </a>
                </h5>
                <h5>
                  <a
                    href="http://aws.amazon.com/verification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content__link"
                  >
                    VALIDATE
                  </a>
                </h5>
              </div>
            </Content>
          </Card>
        </Item>
        <Item theme={theme}>
          <Card theme={theme}>
            <Content theme={theme}>
              <div>
                <h4>
                  Automation Anywhere Certified Advanced RPA Professional
                  (version 11)
                </h4>
                <p>
                  Automation Anywhere is an RPA tool which empowers
                  organizations to automate the processes which are executed by
                  the humans.
                </p>
                <br />
                <h5>
                  <a
                    href="https://drive.google.com/file/d/1xLGtLV7aACUMWrhW27NyHw9xNhiJUjcM/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content__link"
                  >
                    CERTIFICATE
                  </a>
                </h5>
              </div>
            </Content>
          </Card>
        </Item>
      </Grid>
    </Wrapper>
  );
};

export default Certification;
