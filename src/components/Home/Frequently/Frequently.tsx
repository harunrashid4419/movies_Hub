import React from "react";

const Frequently = () => {
  return (
    <div className="container">
      <h1 className="md:text-3xl text-2xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <div className="md:justify-between pb-12">
        <div className="flex flex-col  gap-5 md:py-8 py-3">
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-neutral-content shadow-2xl"
            >
              <div className="collapse-title text-xl font-medium bg-[#151A2F]">
                How much does MoviesHub charge?
              </div>
              <div className="collapse-content bg-[#151A2F]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sit amet dapibus mauris, vel imperdiet lectus. Nunc elementum
                  sollicitudin nisi, vitae molestie enim. Donec ac pharetra
                  erat. Nunc mollis porttitor ultrices.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-neutral-content shadow-2xl"
            >
              <div className="collapse-title text-xl font-medium bg-[#151A2F]">
                What can I watch on my phone?
              </div>
              <div className="collapse-content bg-[#151A2F]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sit amet dapibus mauris, vel imperdiet lectus. Nunc elementum
                  sollicitudin nisi, vitae molestie enim. Donec ac pharetra
                  erat. Nunc mollis porttitor ultrices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-neutral-content shadow-2xl"
            >
              <div className="collapse-title text-xl font-medium bg-[#151A2F]">
                How do I cancel my membership?
              </div>
              <div className="collapse-content bg-[#151A2F]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sit amet dapibus mauris, vel imperdiet lectus. Nunc elementum
                  sollicitudin nisi, vitae molestie enim. Donec ac pharetra
                  erat. Nunc mollis porttitor ultrices.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-neutral-content shadow-2xl"
            >
              <div className="collapse-title text-xl font-medium bg-[#151A2F]">
                Which payment options does Aztec support?
              </div>
              <div className="collapse-content bg-[#151A2F]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sit amet dapibus mauris, vel imperdiet lectus. Nunc elementum
                  sollicitudin nisi, vitae molestie enim. Donec ac pharetra
                  erat. Nunc mollis porttitor ultrices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
