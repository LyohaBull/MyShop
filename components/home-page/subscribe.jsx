import { UiButton } from "../ui-kit/ui-button";

export function SubscribeSection({ id, children }) {
  return (
    <section
      id={id}
      className="py-6 lg:py-24 bg-white border-t border-gray-line"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center rounded-lg p-4 sm:p-0 ">
          <div className="mb-8">
            <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-left lg:text-3xl">
              {children}
            </h2>
          </div>
          <div className="flex flex-col items-center w-96 ">
            <form className="flex gap-4 lg:gap-2 lg:flex-row flex-col max-w-96 items-center">
              <input
                type="text"
                placeholder="Enter your email address"
                className="flex-1 w-full rounded-full px-3 py-2 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
              />
              <UiButton variant="borderRed" className="py-2 px-4">
                Подписаться
              </UiButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
