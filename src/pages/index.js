import React from "react";
import { Layout } from "components/common";
import { Intro, Contact, Projects } from "components/landing";
import Certification from "../components/landing/Certification/index";

export default () => (
  <Layout>
    <Intro />
    <Projects />
    <Certification />
    <Contact />
  </Layout>
);
