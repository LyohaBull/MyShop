import Link from "next/link";
import Image from "next/image";
import { UiButton } from "../../ui-kit/ui-button";

export function ProductBanners({ productArray }) {
  return (
    <section id="product-banners">
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap -mx-4">
          {productArray.map((product) => {
            return <ProductBanner key={product.id} ProductInfo={product} />;
          })}
        </div>
      </div>
    </section>
  );
}

function ProductBanner({ ProductInfo }) {
  const { title, imageSrc, imageAlt, linkHref } = ProductInfo;
  return (
    <div className="w-full sm:w-1/3 px-4 mb-8">
      <div className="category-banner relative overflow-hidden rounded-lg shadow-lg group">
        <Image src={imageSrc} alt={imageAlt} sizes="100vw" />
        <div className="absolute inset-0 bg-gray-light bg-opacity-50"></div>
        <div className="category-text absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 transition duration-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <UiButton variant="borderWhite" href={linkHref} className="px-4 py-2">
            Купить сейчас
          </UiButton>
        </div>
      </div>
    </div>
  );
}
