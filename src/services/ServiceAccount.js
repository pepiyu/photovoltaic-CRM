import Request from "./request";
import RequestForm from "./requestForm";
const getAccount = ()  => Request('/accounts').then((res) => res.data);

const getAccountDetail = (id) =>
  Request(`/accounts/${id}`).then((res) => res.data);

  const create = (data) =>
  RequestForm(`/accounts`, {
    method: "POST",
    data,
  }).then((res) => res.data);

  const remove = (id) =>
  Request(`/accounts/${id}`, {
    method: "DELETE",
  }).then((res) => res.data);


export default {
    getAccount,
    getAccountDetail,
    create,
    remove,
}