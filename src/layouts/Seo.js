import React from 'react'
import { Helmet } from 'react-helmet';
import Moment from 'moment';


export default function Seo(props) {
    return (
        <div>
             <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props.description}/>
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="article:modified_time" content={Moment().format()} />
                <meta name="twitter:title" content={props.title} />
                <meta name="twitter:description" content={props.description} />
            </Helmet>
        </div>
    )
}
