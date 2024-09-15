import { DropMenuItem, LiItemMenu, NavLinks } from "./nav-links";
import { CardDrop } from "./card-drop";
import { SearchField } from "./seacrh-field";
import { LinkLogo } from "./link-logo";
import { HeaderLayout } from "./header-layout";
import { HeaderButtonsLine } from "./header-buttons-line";
import { HeaderMobileLayout } from "./header-mobile-layout";
import { HeaderMobileMenu } from "./mobile-menu";
import { useState } from "react";
import { UiButton } from "../ui-kit/ui-button";
import Image from "next/image";
import logoSrc from "./img/template-white-logo.png";
import { menLinks, womenLinks } from "./constants";

export function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <>
      <HeaderLayout>
        <LinkLogo>
          <Image
            src={logoSrc}
            alt="Logo"
            width={175}
            height={56}
            className="mr-4"
          />
        </LinkLogo>
        <HeaderMobileLayout onClick={() => setMobileMenuIsOpen((s) => !s)} />
        <NavLinks>
          <LiItemMenu>Главная</LiItemMenu>
          <DropMenuItem name="Мужчины" links={menLinks} />
          <DropMenuItem name="Женщины" links={womenLinks} />
          <LiItemMenu>Магазин</LiItemMenu>
          <LiItemMenu>Товары</LiItemMenu>
          <LiItemMenu>Акция!</LiItemMenu>
        </NavLinks>
        <HeaderButtonsLine>
          <UiButton variant="transparent" className="px-4 py-2" linkHref="#">
            Регистрация
          </UiButton>
          <UiButton variant="transparent" className="px-4 py-2" linkHref="#">
            Вход
          </UiButton>
          <CardDrop />
          <SearchField />
        </HeaderButtonsLine>
      </HeaderLayout>
      {mobileMenuIsOpen && <HeaderMobileMenu />}
    </>
  );
}
