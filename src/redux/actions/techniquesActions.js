import {RECEIVE_TECHNIQUES} from './actionTypes';
import * as TechniquesAPI  from '../../api/TechniquesAPI';

export const getTechniques = (techniques) => ({
    type: RECEIVE_TECHNIQUES,
    techniques
})
export const getTechniquesAsync = () => (dispatch) =>(
    TechniquesAPI.getAll()
        .then((techniques) => dispatch(getTechniques(techniques)))
)