import React,  { useEffect, useState }  from 'react'
import LoadGif  from "assets/img/loader.gif"
import Slider from "react-slick";

export default function Excerpt() {

    const [cricdictionAds, setAds] = useState([]);

    useEffect(() => {
        let headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','https://www.cricdiction.com/');
    
            fetch("https://www.cricdiction.com/wp-json/wp/v2/posts?categories=1031&per_page=6")
            .then(res => res.json())
            .then(
              (result) => {
                setAds(result);
              },
              (error) => {
                console.log(error);
                
              }
            )
    
    
    
        }, [])


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div>
            {/* Start::Cricket Match Preview */}
                <section className="mt-14 md:mt-14 pb-40  bg-blueGray-100">
            
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
                    className="text-blueGray-100 fill-current"
                    points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
                </div>


                <div className="container mx-auto">

            


                    <div className="w-full mr-auto ml-auto py-4">
                        <div className="justify-center flex flex-wrap relative">
                        <i></i>
                        </div>
                    </div>

                    <div className={cricdictionAds.length ? 'hidden': '' }>
                    <div className="w-full mr-auto ml-auto py-4">
                        <div className="justify-center flex flex-wrap relative">
                            <img src={LoadGif}></img>
                        </div>
                    </div>
                    <div className="w-full mr-auto ml-auto">
                        <div className="justify-center flex flex-wrap relative">
                            <i>Loading...</i>
                        </div>
                    </div>
                    </div>


                <div className="">


                

            <div>
                <Slider {...settings}>


                {cricdictionAds.map(sliderItem => (
                <div key={sliderItem.id} className="my-4  px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg  bg-lightBlue-500">
                        <div>
                            <span  dangerouslySetInnerHTML={{__html: sliderItem.excerpt.rendered}}></span>
                        </div>
                    </div>
                </div>
                ))}
                </Slider>
            </div>


                </div>
            
                </div>
            

            </section>
            {/* End::Cricket Match Preview */}
        </div>
    )
}
