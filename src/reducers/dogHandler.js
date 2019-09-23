import {DOG_FETCHED_SUCCESSFULLY, DOG_REQUESTED, DOG_FETCH_FAILED} from '../actions/dogRequests';

export default function dogHandler(state = {loading: false, url: ''}, action) {
  switch(action.type) {
    case DOG_REQUESTED:
      return {loading: true, url: ''};
    case DOG_FETCHED_SUCCESSFULLY:
      return {loading: false, url: action.url};
    case DOG_FETCH_FAILED:
      return state;
    default:
      return state;
  }
}