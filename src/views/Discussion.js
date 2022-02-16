import React,  { useEffect, useState }  from 'react'
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Note from "../layouts/Note"
import Moment from 'moment';
import LoadGif  from "assets/img/loader.gif"
import Seo from 'layouts/Seo';


export default function Discussion() {

    const [cricketMatchPredictions, setItems] = useState([]);

    useEffect(() => {
        fetch("https://www.cricdiction.com/wp-json/wp/v2/posts?categories=476&per_page=3")
          .then(res => res.json())
          .then(
            (result) => {
             console.log(result);
              setItems(result);
            },
            (error) => {
              console.log(error);
              
            }
          )
    }, [])



    return (
        <>

            <Seo 
            
                title="Cricket Prediction, Who Will Win Today? Free Prediction Tips." 
                description="Live cricket match prediction, Who will win , Today Match Prediction, Today Live Toss prediction, Live Cricket Match Scorecard Auto refresh Update." 
            
            />

            <IndexNavbar fixed />

            <section className="header relative mb-8 pt-24 items-center text-center justify-center flex max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full iitems-center justify-center px-4">
                        <div className="post-title">
                            <h1 className="font-bold text-4xl text-blueGray-600">
                               Discussion
                            </h1>
                        </div>
                        <p>Cricket Match Prediction</p>
                    </div>
                </div>
            </section>



    
            <section className="pb-40 pt-8 relative bg-blueGray-100">
    
                <div className="container mx-auto overflow-hidden pb-20">

                    <div className="flex flex-wrap items-center justify-center ">

                        <div className={cricketMatchPredictions.length ? 'hidden': '' }>
                            <div className="w-full mr-auto ml-auto mt-8">
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
                  
                        <div className="w-full   mr-auto ml-auto ">
                    
                            <div className="justify-center flex flex-wrap relative">
                    
                                {cricketMatchPredictions.map(item => (

                                    <div key={item.id} className="my-4 w-full lg:w-4/12 px-4">
                                    
                                        <div className={ Moment(item.date).isSame(Moment(), 'day')? 'bg-lightBlue-500   shadow-lg  p-8':'bg-blueGray-700   shadow-lg  p-8'} >
                                            <h1 className="text-lg text-yellow-300 font-black ">{Moment(item.date).format('D MMM YYYY')} <span> {Moment(item.date).isSame(Moment(), 'day')? ' / Live':'' } </span> </h1>
                                            

                                            <Link
                                                to={'/discussion/'+item.slug }
                                                params={{ slug: item.slug }}
                                            >
                                                <p className="text-lg text-white my-4 font-black hover-text " >
                                                <span  dangerouslySetInnerHTML={{__html: item.title.rendered.substring(0, 150)}}></span>...
                                                </p>
                                            </Link>

                                            <i className="text-white ">Who will win today?</i>
                                        </div>
                                        
                                    </div>

                                ))}
                    
                            </div>

                        </div>
                    </div>
                </div>

            </section>



            <Note />
         
            <Footer />
        </>
      );
}
