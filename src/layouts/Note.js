import React from 'react'

export default function Note() {
    return (
        <div>
            
      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Cricket Match Prediction and Discussion
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Who will win? You have just arrived at the number 1 portal of free cricket match predictions and tips on the web. On this site you will find free cricket match prediction, tips, live sessions and reviews from our expert tipsters. 
              </p>
              <div className="sm:block flex flex-col mt-10">
                    <a
                      href="https://www.cricdiction.com/login/"
                      target="_blank"
                      className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Predict Now
                    </a>
                    <a
                      href="https://www.cricdiction.com/live-scores/"
                      target="_blank"
                      className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                    >
                    
                      <span>Live Score</span>
                    </a>
                  </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      
        </div>
    )
}
