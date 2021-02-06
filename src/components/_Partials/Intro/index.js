import Image from "next/image";
import {
  Container,
  Header,
  Footer,
  Card,
  TextsHeader,
  ImageBox,
} from "./styles";

export default function Intro() {
  return (
    <Container>
      <Header>
        <ImageBox>
          <Image
            src="/pessoa.jpg"
            priority
            quality={100}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="img"
          />
        </ImageBox>
        <TextsHeader>
          <p>Cilene Oliveira</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo dolore
            distinctio voluptatum asperiores ducimus deserunt repellendus
            inventore. Adipisci et corporis accusantium at dolorem, illo fugit!
          </p>
        </TextsHeader>
      </Header>

      <Footer id="works">
        <div>
          <Card>
            <Image
              src="https://images.pexels.com/photos/3692875/pexels-photo-3692875.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              priority
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img"
            />
          </Card>
          <Card>
            <Image
              src="https://images.pexels.com/photos/6577901/pexels-photo-6577901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              priority
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img"
            />
          </Card>
          <Card>
            <Image
              src="https://images.pexels.com/photos/6677449/pexels-photo-6677449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              priority
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img"
            />
          </Card>
          <Card>
            <Image
              src="https://images.pexels.com/photos/2053887/pexels-photo-2053887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              priority
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img"
            />
          </Card>
        </div>
        <div>
          <Card>
            <Image
              src="https://images.pexels.com/photos/3692875/pexels-photo-3692875.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              priority
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img"
            />
          </Card>
          <Card>
            <Image
              src="https://images.pexels.com/photos/6577901/pexels-photo-6577901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              priority
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img"
            />
          </Card>
          <Card>
            <Image
              src="https://images.pexels.com/photos/6677449/pexels-photo-6677449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              priority
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img"
            />
          </Card>
          <Card>
            <Image
              src="https://images.pexels.com/photos/2053887/pexels-photo-2053887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              priority
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="img"
            />
          </Card>
        </div>
      </Footer>
    </Container>
  );
}
