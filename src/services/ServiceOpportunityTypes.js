import Request from "./request";

const getOpportunity = () => Request('/opportunity-types').then((res) => res.data);

const getOpportunityDetail = (id) =>
  Request(`/opportunity-types/${id}`).then((res) => res.data);

export default {
  getOpportunity,
  getOpportunityDetail,
}