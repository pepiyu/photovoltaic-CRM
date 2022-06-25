import Request from "./request";

const getActivity = ()  => Request('/activities').then((res) => res.data);

const getActivityDetail = (id) =>
  Request(`/activities/${id}`).then((res) => res.data);

export default {
    getActivity,
    getActivityDetail,
}