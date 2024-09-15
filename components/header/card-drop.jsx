import Image from "next/image";
import { cards } from "./constants";
import Link from "next/link";
import { CardIcon } from "./card-icon";
import { useState } from "react";
import clsx from "clsx";

export function CardDrop() {
  const [cardIsDropped, setCardIsDropped] = useState(false);
  return (
    <div
      className="relative group cart-wrapper"
      onMouseEnter={() => setCardIsDropped(true)}
      onMouseLeave={() => setCardIsDropped(false)}
    >
      <Link href="#">
        <CardIcon className={clsx(cardIsDropped && "group-hover:scale-120")} />
      </Link>
      {cardIsDropped && (
        <>
          <div className="absolute right-0 w-80 h-full"></div>
          <div className="absolute right-0 mt-5 w-80 bg-white shadow-lg p-4 rounded group-hover:block">
            <div className="space-y-4">
              {cards.map((card, index) => {
                return <CardItem key={index} card={card} />;
              })}
            </div>
            <a
              href="/cart.html"
              className="block text-center mt-4 border border-primary bg-primary hover:bg-transparent text-white hover:text-primary py-2 rounded-full font-semibold"
            >
              Go to Cart
            </a>
          </div>
        </>
      )}
    </div>
  );
}
function CardItem({ card }) {
  const { name, quantity, price, src } = card;
  let formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 2,
  });
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center">
        <Image
          width={48}
          height={48}
          src={src}
          alt="Product"
          className="object-cover rounded mr-2"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm">Quantity: {quantity}</p>
        </div>
      </div>
      <p className="font-semibold">{formatter.format(price)}</p>
    </div>
  );
}
