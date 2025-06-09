import React from "react";
import Section from "../general/Section";
import ProjectSummary from "../ProjectSummary";
import Callout from "../general/Callout";

function TLDR() {
  return (
    <Section tagText="tl;dr" project="mochi">
      <p>
        I spearheaded the rebrand of{" "}
        <span className="text-text-mochi font-medium">joinmochi.com</span>,
        driving a full redesign of the Mochi patient portal to refresh its UI
        and streamline user workflows. To achieve this,{" "}
        <span className="text-text-mochi font-medium">
          I built the Bento Design System from the ground up
        </span>
        , collaborating closely with engineers to create scalable components
        that enhanced both patient experience and development speed. This system
        now supports a platform serving over 100,000 patients.
      </p>
      <ProjectSummary />
      <Callout title="Components I Designed">
        <p>
          Alert, Blanket, Button, Card, Checkbox, Code Input, Date Picker,
          Drawer, Dropdown, Modal, Notification, Password Input, Radio, Tag,
          Text Area, Text FIeld, Time Picker, and Toast
        </p>
      </Callout>
      <Callout title="Tokens I Defined">
        <p>Color, Spacing, and Typography</p>
      </Callout>
    </Section>
  );
}

export default TLDR;
