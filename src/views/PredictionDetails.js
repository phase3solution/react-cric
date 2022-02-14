import React,  { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom';
import { DiscussionEmbed } from 'disqus-react';


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import "assets/styles/custom.css";
import LoadGif  from "assets/img/loader.gif"
import Note from "../layouts/Note";
import Moment from 'moment';
import Excerpt from './Excerpt';




export default function PredictionDetails() {
    const params = useParams()
    const [loading, setLoader] = useState(true);
    const [item, setItem] = useState([]);


    useEffect(() => {

        // document.getElementsByTagName("img").removeAttribute("srcset");

        const url = "https://www.cricdiction.com/wp-json/wp/v2/posts?slug="+params.slug;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setItem(json[0]);
                setLoader(false);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
        
    }, []);


 

    if(loading){

        return (
            <div>
                <IndexNavbar fixed />
                <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">

                    <div className="container mx-auto overflow-hidden pb-20">
                        <div className="flex flex-wrap items-center justify-center pt-32">
                        <div className="w-full px-4 mr-auto ml-auto mt-8">
                            <div className="justify-center flex flex-wrap relative">
                                <img src={LoadGif}></img>
                                
                            </div>
                           
                        </div>
                        <h1>Loading...</h1>
                    </div> 
                    </div>
                 </section>
                 {/* Start::Footer Section */}
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
                    Who will win ? You have just arrived at the #1 portal of FREE cricket match predictions and tips on the web. At CRICDICTION, you will find Free cricket match prediction, tips, live sessions and reviews from our expert tipsters. We cover all major cricket tournaments and matches – ODI Cricket World Cup, T20 World Cup, IPL, Big Bash, CPL, BPL, Asia Cup, England Blast, Africa T20 and much more. Wondering !! Who will win the match today? We got you covered ☺. Also please don’t forget to join our official  Telegram Channel of CRICDICTION. Looking for Football prediction? Keep eye on GOALDICTION
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
            {/* End::Footer Section */}
            </div>
        )
    }else{
        return (
            <>
            <IndexNavbar fixed />

            <section className="header relative mb-8 pt-24 items-center text-center justify-center flex max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full iitems-center justify-center px-4">
                        <div className="post-title">
                            <h1 className="font-bold text-4xl text-blueGray-600">
                                <span dangerouslySetInnerHTML={{__html: item.title.rendered}}></span>  
                            </h1>
                        </div>
                        <small>Published on: {Moment(item.date).format('D MMM YYYY')}  </small>
                    </div>
                </div>
            </section>

            <section className="pb-40 relative bg-blueGray-100 py-16">

                <div className="container bg-white mx-auto overflow-hidden">
                    <div className="flex flex-wrap items-center justify-center py-10">
                        <div className="w-full  px-4 mr-auto ml-auto">
                           <div className="justify-center flex flex-wrap relative">
                                <div>
                                    <div dangerouslySetInnerHTML={{__html: item.content.rendered}} ></div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="container  mx-auto p-8 "></div>
    
            </section>
   
            <Excerpt />


            <section className="pb-40 relative bg-blueGray-100 py-16">
                
                <div className="container  mx-auto p-8 "></div>

                <div className="container bg-white mx-auto p-8 ">
                    <div className="flex flex-wrap  py-4">
                        
                        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12 lg:text-left md:text-left sm:text-center ">
                            Share this story
                        </div>

                        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12 lg:text-right md:text-right sm:text-center ">
                            <a href={'https://www.facebook.com/sharer.php?u=https://www.cricdiction.com/'+params.slug} target="_blank">
                                <button
                                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                                >
                                <i className="fab fa-facebook-square"></i>
                                </button>
                            </a>

                            <a href={'https://twitter.com/share?url=https://www.cricdiction.com/'+params.slug} target="_blank" >
                            <button
                                className="bg-white text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                            </a>

                            <a href={'https://pinterest.com/pin/create/button/?url=https://www.cricdiction.com/'+params.slug} target="_blank" >
                            <button
                                className="bg-white text-red-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-pinterest"></i>
                            </button>
                            </a>

                            <a href={'mailto:?body=https://www.cricdiction.com/'+params.slug} target="_blank" >
                            <button
                                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-google"></i>
                            </button>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="container  mx-auto p-8 "></div>

                <div className="container bg-white mx-auto p-8 ">
                    <DiscussionEmbed
                        shortname='cricdiction'
                        config={
                            {
                                url: 'https://www.cricdiction.com/'+params.slug,
                                identifier: ""+item.id+"",
                                title: item.title.rendered,
                            }
                        }
                    />  
                </div>
    
            </section>

            <Note />

            <Footer />
        </>
        )

    }
}
