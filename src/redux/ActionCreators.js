import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers:{
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response =>{
        if (response.ok){
            return response;
        }
        else{
            var error = new Error('Error '+response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errorMessage = new Error(error.message);
        throw errorMessage;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('Post comments ',error.message)
        alert('Your comment could not be posted\nError: '+ error.message)})
}

//Este es el Redux Thunk que retorna una funcion y hace dispatch de varias acciones
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl+'dishes')
            .then(response =>{
                if (response.ok){
                    return response;
                }
                else{
                    var error = new Error('Error '+response.status + ':' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, 
            error => {
                var errorMessage = new Error(error.message);
                throw errorMessage;
            })
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)));
    
};

export const dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING
});


export const dishesFailed = (errorMessage)=>({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMessage
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const fetchComments = () => (dispatch) => {
            return fetch(baseUrl+'comments')
            .then(response =>{
                if (response.ok){
                    return response;
                }
                else{
                    var error = new Error('Error '+response.status + ':' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, 
            error => {
                var errorMessage = new Error(error.message);
                throw errorMessage;
            })
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)));
    
    
};

export const commentsFailed = (errorMessage)=>({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errorMessage
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
                return fetch(baseUrl+'promotions')
                .then(response =>{
                    if (response.ok){
                        return response;
                    }
                    else{
                        var error = new Error('Error '+response.status + ':' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                }, 
                error => {
                    var errorMessage = new Error(error.message);
                    throw errorMessage;
                })
            .then(response => response.json())
            .then(promos => dispatch(addPromos(promos)))
            .catch(error => dispatch(promosFailed(error.message)));
    
    
};

export const promosLoading = () =>({
    type: ActionTypes.PROMOS_LOADING
});


export const promosFailed = (errorMessage)=>({
    type: ActionTypes.PROMOS_FAILED,
    payload: errorMessage
});

export const addPromos = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
});


export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));						  
		return fetch(baseUrl+'leaders')
            .then(response =>{
                if (response.ok){
                    return response;
                }
                else{
                    var error = new Error('Error '+response.status + ':' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, 
            error => {
                var errorMessage = new Error(error.message);
                throw errorMessage;
            })
            .then(response => response.json())
            .then(leaders => dispatch(addLeaders(leaders)))
            .catch(error => dispatch(leadersFailed(error.message)));
	
    
};

export const leadersLoading = () =>({
    type: ActionTypes.LEADERS_LOADING
});


export const leadersFailed = (errorMessage)=>({
    type: ActionTypes.LEADERS_FAILED,
    payload: errorMessage
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});



export const postFeedback = (values) => {
    const newFeedback = {
        firstname: values.firstname,
        lastname: values.lastname,
        telnum: values.telnum,
        email: values.email,
        agree: values.agree,
        contactType: values.contactType,
        message: values.message
    };
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers:{
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response =>{
        if (response.ok){
            console.log(response);
            alert('Thank you for your feedback\n' + JSON.stringify(newFeedback));
            return response;
        }
        else{
            var error = new Error('Error '+response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errorMessage = new Error(error.message);
        throw errorMessage;
    })
    .then(response => response.json())
    .catch(error => { console.log('Post feedback ',error.message)
        alert('Your feedback could not be posted\nError: '+ error.message)})
}

