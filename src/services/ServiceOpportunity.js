import Request from "./request";

const getOpportunity = ()  => Request('/opportunities').then((res) => res.data);

const getOpportunityDetail = (id) =>
  Request(`/opportunities/${id}`).then((res) => res.data);


  const create = (data) =>
  Request(`/opportunities`, {
    method: "POST",
    data,
  }).then((res) => res.data);

  const remove = (id) =>
  Request(`/opportunities/${id}`, {
    method: "DELETE",
  }).then((res) => res.data);


export default {
    getOpportunity,
    getOpportunityDetail,
    create,
    remove,
}