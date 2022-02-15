import React,  { useEffect, useState }  from 'react'
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Note from "../layouts/Note"
import Moment from 'moment';


export default function Prediction() {

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



    
        <section className="pb-40 pt-12 relative bg-blueGray-100">
   
      <div className="container mx-auto overflow-hidden pb-20">

        <div className="flex flex-wrap items-center justify-center pt-32">
              <div className="w-full  px-4 mr-auto ml-auto mt-8">
            
                <div className="justify-center flex flex-wrap relative">
              
                {cricketMatchPredictions.map(item => (

                  <div key={item.id} className="my-4 w-full lg:w-4/12 px-4">
                  
                      <div className={ Moment(item.date).isSame(Moment(), 'day')? 'bg-lightBlue-500   shadow-lg  p-8':'bg-blueGray-700   shadow-lg  p-8'} >
                        <h1 className="text-lg text-yellow-300 font-bold">{Moment(item.date).format('D MMM YYYY')} <span> {Moment(item.date).isSame(Moment(), 'day')? ' / Live':'' } </span> </h1>
                        

                      <Link
                          to={'/prediction/'+item.slug }
                          params={{ slug: item.slug }}
                      >
                        <p className="text-lg text-white my-4 font-bold hover-text " >
                          <span  dangerouslySetInnerHTML={{__html: item.title.rendered.substring(0, 130)}}></span>...
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
        {/* END::Cricket Match Prediction */}



        {/* Start::Footer Section */}
                    <Note />
        {/* End::Footer Section */}
         
          <Footer />
        </>
      );
}
