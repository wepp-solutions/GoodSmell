import Image from "next/image";
import { Container, Texts, IconArrowDown } from "./styles";

export default function Initial() {
  return (
    <Container>
      <Image
        src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        priority
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="img"
      />

      <Texts>
        <p>O melhor da comida Brasileira</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          corporis tempore autem reiciendis dignissimos natus.
        </p>
      </Texts>

      <IconArrowDown />
    </Container>
  );
}
