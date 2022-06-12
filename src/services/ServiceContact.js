import Request from "./request";

const getContact = ()  => Request('/contacts').then((res) => res.data);

const getContactDetail = (id) =>
  Request(`/contacts/${id}`).then((res) => res.data);


export default {
    getContact,
    getContactDetail
}