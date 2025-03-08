import { Header } from "~/component/Header/Header";
import { Works } from "./Works/Works";
import { Services } from "./Services/Services";
import { Skills } from "./Skills/Skills";
import { useRef } from "react";
import { useIsVisible } from "~/utils/useIsVisible";

export const Welcome = () => {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="bg-gray-100">
      <Header />
      <div
        ref={ref1}
        className="bg-gray-300 rounded-b-[100px] relative text-white p-10 before:absolute before:inset-0 before:bg-[url('/assets/noise-light.png')]"
      >
        <div className="relative px-6 py-24 sm:py-32 lg:px-8 z-10">
          <div
            className={`mx-auto max-w-2xl text-center transition-opacity ease-in-out delay-200 duration-640 ${
              isVisible1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2
              className={`text-3xl sm:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent`}
            >
              Building fast, user-friendly
              <br />
              web experiences
              <br />
              with clean code.
            </h2>
            <p className="mt-6 text-md text-gray-500">
              <a href="https://github.com/myktsk" target="_blank">
                @myktsk
              </a>
            </p>
            <a
              href="#works"
              className="inline-block mt-10 rounded-full bg-gray-900 px-10 py-4 text-sm text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              See Works
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
