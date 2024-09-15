import { UiButton } from "../ui-kit/ui-button";

export function Banner({ title, id }) {
  return (
    <section id={id} className="relative my-16">
      <div className="container mx-auto px-4 py-20 rounded-lg relative bg-cover bg-center bg-banner">
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white py-20">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 items-center justify-center">
            <UiButton linkHref="#" className="px-4 py-2" variant="transparent">
              К товарам!
            </UiButton>
            <UiButton linkHref="#" className="px-4 py-2" variant="transparent">
              Новое поступление
            </UiButton>
            <UiButton linkHref="#" className="px-4 py-2" variant="transparent">
              Акция
            </UiButton>
          </div>
        </div>
      </div>
    </section>
  );
}
