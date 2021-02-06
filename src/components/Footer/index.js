import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { Container, Icons } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Icons>
        <a
          href="https://api.whatsapp.com/send?phone=5511961383139"
          target="_blank"
        >
          <AiOutlineWhatsApp size={30} />
        </a>
        <a
          href="https://www.facebook.com/cilene.oliveira.319452"
          target="_blank"
        >
          <AiOutlineFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/pregoeartes/" target="_blank">
          <AiOutlineInstagram size={30} />
        </a>
      </Icons>
      <div>
        <p>Quer criar um site profissional para seu negócio?</p>
        <p>Não perca mais tempo, acesse o link abaixo para marcar seu orçamento</p>
        <h3>
        Acesse:{" "}
          <a href="https://humbertodev.vercel.app/" target="_blank">
            WEPP Soluções
          </a>
        </h3>
      </div>
    </Container>
  );
}
