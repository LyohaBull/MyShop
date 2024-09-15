import Link from "next/link";
import Image from "next/image";
import { UiButton } from "../../ui-kit/ui-button";

export function ProductLine({ name, id, productArray }) {
  return (
    <section id={id}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{name}</h2>
        <div className="flex flex-wrap -mx-4">
          {productArray.map((productInfo) => {
            return (
              <ProductLineItem key={productInfo.id} productInfo={productInfo} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductLineItem({ productInfo }) {
  const {
    imageAlt,
    imageSrc,
    linkHref,
    linkName,
    price,
    lowerPrice,
    highPrice,
    title,
  } = productInfo;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
      <div className="bg-white p-3 rounded-lg shadow-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          sizes="100vw"
          className="object-cover mb-4 rounded-lg"
        />
        <Link href={linkHref} className="text-lg font-semibold">
          {linkName}
        </Link>
        <p className="my-2">{title}</p>
        <div className="flex items-center mb-4">
          {lowerPrice && (
            <span className="text-lg font-bold text-primary">{lowerPrice}</span>
          )}
          {highPrice && (
            <span className="text-sm line-through ml-2">{highPrice}</span>
          )}
          {price && (
            <span className="text-lg font-bold text-gray-900">{price}</span>
          )}
        </div>
        <UiButton variant="borderRed" className="py-2 px-4 w-full">
          В корзину
        </UiButton>
      </div>
    </div>
  );
}
