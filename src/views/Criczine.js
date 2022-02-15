import React,  { useEffect, useState }  from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Note from "../layouts/Note";
import LoadGif  from "assets/img/loader.gif"
import Seo from 'layouts/Seo';




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


        return (
            <>

            <Seo 
              
              title="CRICZINE - Today Match Prediction" 
              description="Get cricket news, schedules, match, team stats, fixtures, series results, video highlights, news, and more on CRICDICTION." 
            
            />

            <IndexNavbar fixed />

            <section className="header relative mb-8 pt-24 items-center text-center justify-center flex max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full iitems-center justify-center px-4">
                        <div className="post-title">
                            <h1 className="font-bold text-4xl text-blueGray-600">
                                Criczine 
                            </h1>
                        </div>
                        <p>Recent Cricket News</p>
                    </div>
                </div>
            </section>
  


            

            <section className="pb-40 pt-12 relative bg-blueGray-100">
   
              

                <div className="container mx-auto">

                
                    <div className={items.length ? 'hidden': '' }>
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

                    <div className="flex flex-wrap items-center">


                        {items.map(item => (

                            <div key={item.id} className="my-4 w-full lg:w-4/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg  bg-lightBlue-500">
                                <img
                                alt="..."
                                
                                src={item.yoast_head_json.og_image ? item.yoast_head_json.og_image[0].url  : 'https://www.cricdiction.com/wp-content/uploads/2022/02/2022-02-02-00.45.05.jpg'}
                                className="w-full align-middle cricket-news-img"
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
                                    <h4 className="text-xl font-bold text-white hover-text">
                                    <span  dangerouslySetInnerHTML={{__html: item.title.rendered.substring(0, 55)}}></span>...
                                    </h4>
                                </a>
                                <p className="text-md font-light mt-2 text-white">
                                    <span  dangerouslySetInnerHTML={{__html: item.yoast_head_json.description.substring(0, 80)}}></span>
                                </p>
                                </blockquote>
                            </div>
                            </div>

                        ))}

                    </div>

                </div>
 
            </section>

            <Note />
    
            <Footer />
          </>
        )
    

    
}
