import {
  FooterBotomLinks,
  FooterMenuAccount,
  FooterMenuPages,
  FooterMenuShop,
  FooterMenuSocials,
} from "./constants.jsx";
import { FooterCopyrights } from "./footer-bottom-copyright";
import { FooterContact } from "./footer-contact";
import { FooterImgMenu } from "./footer-img-menu";
import { FooterLayout } from "./footer-layout";
import { FooterMenu } from "./footer-menu";
import { FooterPayments } from "./footer-payments";
import { PayPalIcon } from "./icons/paypal";
import { StripeIcon } from "./icons/stripe";
import { VisaIcon } from "./icons/visa";

export function Footer() {
  return (
    <FooterLayout>
      <FooterLayout.Top>
        <FooterMenu title="Shop" menuArray={FooterMenuShop} />
        <FooterMenu title="Pages" menuArray={FooterMenuPages} />
        <FooterMenu title="Account" menuArray={FooterMenuAccount} />
        <FooterImgMenu title="Follow Us" menuArray={FooterMenuSocials} />
        <FooterContact
          title="Контакты"
          addres="Республика Коми, Красный затон, ул. Щучья, д.43"
          email="pike@mail.ru"
          phone="+7 999 333 22 11"
          emailHref="#"
        />
      </FooterLayout.Top>
      <FooterLayout.Bottom>
        <FooterCopyrights
          title="LexShop. Все права защищены"
          description="AlexCompany. Разрабатываем качественный продукт!"
          links={FooterBotomLinks}
        />
        <FooterPayments>
          <VisaIcon className="inline-block w-8 h-8 mr-2" />
          <StripeIcon className="inline-block w-8 h-8 mr-2" />
          <PayPalIcon className="inline-block w-8 h-8" />
        </FooterPayments>
      </FooterLayout.Bottom>
    </FooterLayout>
  );
}
