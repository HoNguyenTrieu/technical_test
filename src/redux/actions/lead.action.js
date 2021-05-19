import * as types from "../constants/lead.constant";
import axios from "axios";
import api from "../api";

const getLeads = () => async (dispatch) => {
  dispatch({ type: types.GET_LEADS_REQUEST, payload: null });
  try {
    const res = await axios.get(
      `https://bitna-senior-test.herokuapp.com/api/leads`
    );
    // console.log(res);
    dispatch({ type: types.GET_LEADS_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_LEADS_FAILURE, payload: error });
  }
};

const createLead = (leadData) => async (dispatch) => {
  dispatch({ type: types.CREATE_LEAD_REQUEST, payload: null });
  try {
    const res = await api.post(`/api/leads`, leadData);
    dispatch({ type: types.CREATE_LEAD_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.CREATE_LEAD_FAILURE, payload: error });
  }
};

export const leadActions = {
  getLeads,
  createLead,
};
