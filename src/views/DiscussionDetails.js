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
import Seo from 'layouts/Seo';



export default function DiscussionDetails() {

    const params = useParams()
    const [loading, setLoader] = useState(true);
    const [item, setItem] = useState([]);


    useEffect(() => {


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

                 <Note />

                 <Footer />
            </div>
        )
    }else{
        return (
            <>

            <Seo 
              
              title={item.title.rendered} 
              description={item.title.rendered}  
            
            />

            <IndexNavbar fixed />

            <section className="header relative mb-8 pt-24 items-center text-center justify-center flex max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full iitems-center justify-center px-4">
                        <div className="post-title">
                            <h1 className="font-bold text-4xl text-blueGray-600">
                                <span dangerouslySetInnerHTML={{__html: item.title.rendered}}></span>  
                            </h1>
                        </div>
                        <p>Published on: {Moment(item.date).format('D MMM YYYY')}  </p>
                    </div>
                </div>
            </section>

            <section className="relative bg-blueGray-100 pt-8">

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

    
            </section>
            
            <section className="mt-14 md:mt-14 pb-40 bg-blueGray-100 ">
                <Excerpt />
            </section>

         


            <section className="pb-40  relative bg-blueGray-100">
                

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
