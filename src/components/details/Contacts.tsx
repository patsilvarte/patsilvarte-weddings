import { Typography } from "@mui/material";
import { ContactForm } from "../ContactForm";
import { SocialContacts } from "../general/SocialContacts";
import { Title } from "../general/Title";
import "./Contacts.scss";

export const Contacts = () => {
  return (
    <div className="contacts" id="contactos">
      <Title title="Como te podemos ajudar?" />
      <div className="contacts__description">
        <Typography variant="body1" gutterBottom align="center">
          Se queres obter mais informações sobre um dos nossos serviços ou
          discutir como podemos contribuir para o teu dia especial, estamos aqui
          para te ajudar!
        </Typography>
        <SocialContacts />
        {/* <Typography variant="body1" gutterBottom align="center">
          Podes entrar em contacto connosco através do formulário abaixo, enviar
          um email diretamente para nós para patsilvarte.weddings.info@gmail.com
          ou enviar mensagem diretamente no Instagram.
        </Typography> */}
      </div>
      <ContactForm />
    </div>
  );
};
