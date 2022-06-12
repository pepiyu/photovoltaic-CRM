import Request from "./request";

const getOpportunity = ()  => Request('/opportunities').then((res) => res.data);


export default {
    getOpportunity
}