import React from "react";
import Image from "next/image";

import { Container, Header, WrapperCards, Card } from "./styles";

export default function Team() {
  return (
    <Container>
      <WrapperCards>
        <Card>
          <p>Laura Martins</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            cumque earum cupiditate harum? Hic vel voluptatibus maiores
            explicabo exercitationem placeat.
          </p>
        </Card>
        <Card>
          <p>Alberto Valentim</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            cumque earum cupiditate harum? Hic vel voluptatibus maiores
            explicabo exercitationem placeat.
          </p>
        </Card>
        <Card>
          <p>Lúcio Magno</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            cumque earum cupiditate harum? Hic vel voluptatibus maiores
            explicabo exercitationem placeat.
          </p>
        </Card>
      </WrapperCards>
    </Container>
  );
}
