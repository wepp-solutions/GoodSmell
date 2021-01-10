import Image from "next/image";

import {
  Container,
  WrapperCards,
  WrapperTexts,
  Card,
  TextsContent,
  Button,
} from "./styles";

export default function Menu() {
  return (
    <Container>
      <WrapperCards>
        <Card>
          <Image
            src="https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            priority
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="img"
          />
        </Card>
        <Card>
          <Image
            src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            priority
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="img"
          />
        </Card>
        <Card>
          <Image
            src="https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            priority
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="img"
          />
        </Card>
      </WrapperCards>
      <WrapperTexts>
        <TextsContent one>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem optio doloremque modi mollitia maiores, animi
            consectetur nisi nesciunt quas eveniet rem possimus sapiente cumque
            esse vel a aperiam.
          </p>
        </TextsContent>
        <TextsContent two>
        <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem corrupti animi nisi quod, ex tempora neque odit porro
            fugit iure.
          </p>
        </TextsContent>
      </WrapperTexts>
      <Button>Menu completo</Button>
    </Container>
  );
}
