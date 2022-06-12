import Request from "./request";

const getAccount = ()  => Request('/accounts').then((res) => res.data);

const getAccountDetail = (id) =>
  Request(`/accounts/${id}`).then((res) => res.data);


export default {
    getAccount,
    getAccountDetail
}