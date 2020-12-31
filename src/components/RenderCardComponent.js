import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

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
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );

    }
    
}

export default RenderCard;