import Request from "./request";

const getContact = ()  => Request('/contacts').then((res) => res.data);

const getContactDetail = (id) =>
  Request(`/contacts/${id}`).then((res) => res.data);

  const create = (data) =>
  Request(`/contacts`, {
    method: "POST",
    data,
  }).then((res) => res.data);

  const remove = (id) =>
  Request(`/contacts/${id}`, {
    method: "DELETE",
  }).then((res) => res.data);



export default {
    getContact,
    getContactDetail,
    create,
    remove,
}