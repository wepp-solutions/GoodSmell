import { Container } from "./styles";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function NavBar() {
  return (
    <Container>
      <a href="#works">Trabalhos</a>
      <p>Prego E Arte</p>

      <div>
        <a href="https://www.instagram.com/pregoeartes/" target="_blank">
          <AiOutlineInstagram size={30} />
        </a>
        <a
          href="https://www.facebook.com/cilene.oliveira.319452"
          target="_blank"
        >
          <AiOutlineFacebook size={30} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511961383139"
          target="_blank"
        >
          <AiOutlineWhatsApp size={30} />
        </a>
      </div>
    </Container>
  );
}
