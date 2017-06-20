import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
    FETCH_JOBS
} from './types';

const JOB_QUERY_PARAMS = {
    publisher: '9816109954481802',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
};

const buildJobsUrl = (zip) =>{
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip})
};

export const fetchJobs = (region) => async (dispatch) => {
        try {
            let zip = await reverseGeocode(region);
        } catch(e) {
            console.error(e);
        }

    };
