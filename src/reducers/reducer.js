import {
   FETCH_COLLECTION_LOADING,
   FETCH_COLLECTION_SUCCEED,
   FETCH_COLLECTION_FAILED,
} from '../actions/constants';

const initialState = {
   collection: [],
   error: false,
   isFetching: false
}

export default (state = initialState, action) => {
	switch (action.type) {
      case FETCH_COLLECTION_LOADING:
         return {
            ...state,
            isFetching: true
         }
      case FETCH_COLLECTION_SUCCEED:
         return {
            ...state,
            isFetching: false,
            collection: action.payload
         }
      case FETCH_COLLECTION_FAILED:
         return {
            ...state,
            isFetching: false,
            error: true
         }
		default:
			return state
	}
}