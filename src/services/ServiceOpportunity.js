import Request from "./request";

const getOpportunity = ()  => Request('/opportunities').then((res) => res.data);

const getOpportunityDetail = (id) =>
  Request(`/opportunities/${id}`).then((res) => res.data);

export default {
    getOpportunity,
    getOpportunityDetail
}