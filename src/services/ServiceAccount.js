import Request from "./request";

const getAccount = ()  => Request('/accounts').then((res) => res.data);


export default {
    getAccount
}