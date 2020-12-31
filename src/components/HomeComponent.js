import React from 'react';
import RenderCard  from './RenderCardComponent';
import { baseUrl } from '../shared/baseUrl';

function Home(props){
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                    isLoading={props.dishesLoading} 
                    errorMessage={props.dishesErrorMessage}/>


                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                            isLoading={props.promoLoading} 
                            errorMessage={props.promoErrorMessage}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;