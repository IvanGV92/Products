import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function RenderCard({ item, isLoading, errorMessage }){
    if(item==null){
        return(
            <div></div>
        );
    }else if(isLoading){
        return(
            <Loading></Loading>
        );
    }
    else if(errorMessage){
        return(
            <h4>{errorMessage}</h4>
        );
    }
    else {
    
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );

    }
    
}

export default RenderCard;