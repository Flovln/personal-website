import {
   FETCH_COLLECTION_LOADING,
   FETCH_COLLECTION_SUCCEED,
   FETCH_COLLECTION_FAILED,
} from './constants';
import collection from '../collection';

export const fetchCollectionLoading = () => {
   return {
      type: FETCH_COLLECTION_LOADING
   }
}

export const fetchCollectionSucceed = () => {
   return {
      type: FETCH_COLLECTION_SUCCEED,
      payload: collection //obj.payload
   }
}

export const fetchCollectionFailed = error => {
   return {
      type: FETCH_COLLECTION_FAILED,
      error,
   }
}

export const fetchCollection = () => async(dispatch) => {
   // const url = 'http://localhost:5000/api/collection/';

	try {
      // dispatch(fetchCollectionLoading());
      // const res = await fetch(url);
      // const obj = await res.json();

      return dispatch(fetchCollectionSucceed(/*obj*/));
   } catch (e) {
      dispatch(fetchCollectionFailed(e));
   }
}