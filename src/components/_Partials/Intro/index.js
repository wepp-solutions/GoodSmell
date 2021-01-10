import Image from "next/image";
import { Container, Header, Footer, Texts } from "./styles";

export default function Intro() {
  return (
    <Container>
      <Header>
        <p>Aproveite</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolore
          distinctio voluptatum asperiores ducimus deserunt repellendus
          inventore. Adipisci et corporis accusantium at dolorem, illo fugit!
        </p>
      </Header>

      <Footer>
        <Image
          src="https://images.pexels.com/photos/3692875/pexels-photo-3692875.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="img"
        />

        <Texts>
          <p>Reserve sua mesa</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa,
            autem necessitatibus reprehenderit iste est!
          </p>

          <button>Reservar Mesa</button>
        </Texts>
      </Footer>
    </Container>
  );
}
