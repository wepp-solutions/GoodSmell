import Image from "next/image";
import { Container, Texts, IconArrowDown } from "./styles";

export default function Initial() {
  return (
    <Container>
      <Image
        src="https://images.pexels.com/photos/5253574/pexels-photo-5253574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        priority
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="img"
      />
      <Texts>
        <p>Prego E Arte</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          corporis tempore autem reiciendis dignissimos natus.
        </p>
      </Texts>
      <IconArrowDown />
    </Container>
  );
}
