import React from "react";

import { Container, Icons, IconFace, IconInsta, IconTwitter } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Icons>
        <IconTwitter />
        <IconFace />
        <IconInsta />
      </Icons>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic?
      </p>
    </Container>
  );
}
