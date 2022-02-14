import React,  { useEffect, useState }  from 'react'

import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Note from "../layouts/Note";


export default function Criczine() {

    const [loading, setLoader] = useState(true);
    const [items, setItems] = useState([]);


    useEffect(() => {


        const url = "https://www.cricdiction.com/wp-json/wp/v2/posts?categories=1061&per_page=6";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setItems(json);
                setLoader(false);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
        
    }, []);

    // if(loading){
    //     return (
    //         <div>
    //             <h1>Loading...</h1>
    //         </div>
    //     )
    // }
        return (
            <>
            <IndexNavbar fixed />
  

            <section className="header relative pt-24 items-center text-center justify-center flex max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full iitems-center justify-center px-4">
                        <div className="">
                        <h2 className="font-semibold text-4xl text-blueGray-600">
                            Recent Cricket News
                        </h2>

                       
                        
                        </div>
                    </div>
                </div>
            </section>
      

              {/* Start::Cricket Match Prediction */}
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">

        
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

        <div className="flex flex-wrap items-center">

            {items.map(item => (

            <div key={item.id} className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto mt-28">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                    alt="..."
                
                    src={item.yoast_head_json.og_image ? item.yoast_head_json.og_image[0].url  : 'https://www.cricdiction.com/wp-content/uploads/2022/02/2022-02-02-00.45.05.jpg'}
                    className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                    <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                    <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                    ></polygon>
                    </svg>
                    <a href={'https://www.cricdiction.com/'+item.slug } target="_blank" >
                    <h4 className="text-xl font-bold text-white">
                        <span  dangerouslySetInnerHTML={{__html: item.title.rendered}}></span>
                    </h4>
                    </a>
                    <p className="text-md font-light mt-2 text-white">
                    <span  dangerouslySetInnerHTML={{__html: item.yoast_head_json.description}}></span>
                    </p>
                </blockquote>
                </div>
            </div>

            ))}


            

        </div>

        {/* <div className="sm:block flex flex-col mt-10">
            <Link
            to="/criczine"
            target="_blank"
            className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightGray-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
            See More
            </Link>
        
        </div> */}
        </div>


        </section>
        {/* End::Cricket Match Prediction */}



          {/* Start::Footer Section */}
          <Note />
         {/* End::Footer Section */}
           
            <Footer />
          </>
        )
    

    
}
