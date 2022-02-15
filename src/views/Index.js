import React,  { useEffect, useState }  from 'react'
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Moment from 'moment';
import Note from "../layouts/Note"
import LoadGif  from "assets/img/loader.gif"
import Excerpt from './Excerpt';

import Seo from 'layouts/Seo';

export default function Index() {

 
  const [items, setItems] = useState([]);
  const [cricketMatchPredictions, setPredictions] = useState([]);


  useEffect(() => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','https://www.cricdiction.com/');

      fetch("https://www.cricdiction.com/wp-json/wp/v2/posts?categories=1061&per_page=3")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          },
          (error) => {
            console.log(error);
            
          }
        )


        fetch("https://www.cricdiction.com/wp-json/wp/v2/posts?categories=476&per_page=3")
        .then(res => res.json())
        .then(
          (result) => {
           setPredictions(result);
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
    <>

  
      <Seo 
      
        title="Today Cricket Match Prediction. Who Will Win Today&#039;s Match?" 
        description="Today Cricket Match Prediction, Who Will Win today? Live Cricket score, Today Match, Predictions Who Will Win, Live Cricket Match Scorecard." 
      
      />


      <IndexNavbar fixed />

 

      <section className="pb-12 relative bg-white">
   
        <div className="container mx-auto overflow-hidden pb-20">

          <div className="flex flex-wrap items-center justify-center pt-20">

            <div className="w-full mr-auto ml-auto mt-8">
                <div className="justify-center flex flex-wrap relative">
                  <i>Cricket Match Prediction</i>
                </div>
            </div>

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
                  

                <div className="w-full  px-4 mr-auto ml-auto mt-8">
             
                  <div className="justify-center flex flex-wrap relative">
                
                  {cricketMatchPredictions.map(item => (

                    <div key={item.id} className="my-4 w-full lg:w-4/12 px-4">
                    
                        <div className={ Moment(item.date).isSame(Moment(), 'day')? 'bg-lightBlue-500   shadow-lg  p-8':'bg-blueGray-700   shadow-lg  p-8'} >
                          <h1 className="text-lg text-yellow-300 font-black">{Moment(item.date).format('D MMM YYYY')} <span> {Moment(item.date).isSame(Moment(), 'day')? ' / Live':'' } </span> </h1>
                         

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
  

      <section className="pb-12 relative bg-blueGray-100">
   
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
                  <i>Cricket News</i>
                </div>
            </div>

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
          <Excerpt/>
      </section>

      

      <Note />
     
      <Footer />
    </>
  );
}
