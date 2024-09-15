import Image from "next/image";
import Link from "next/link";
import logoSrc from "./img/template-logo.png";

export function FooterContact({ title, addres, phone, email, emailHref }) {
  return (
    <div className="w-full sm:w-2/6 px-4 mb-8 text-center lg:text-left">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p>
        <Image
          src={logoSrc}
          width={188}
          height={60}
          alt="Logo"
          className="mb-4 mx-auto lg:mx-0"
        />
      </p>
      <p className="max-w-52 mx-auto lg:mx-0">{addres}</p>
      <p className="text-xl font-bold my-4">Телефон: {phone}</p>
      <Link href={emailHref} className="underline">
        Email: {email}
      </Link>
    </div>
  );
}
