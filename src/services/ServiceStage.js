import Request from "./request";

const getStages = ()  => Request('/stages').then((res) => res.data);

const getActivityDetail = (id) =>
  Request(`/stages/${id}`).then((res) => res.data);

export default {
  getStages,
    getActivityDetail,
}