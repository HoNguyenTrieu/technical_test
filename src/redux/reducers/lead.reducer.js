import * as types from "../constants/lead.constant";

const initialState = {
  leads: [],
  newLead: null,
  loading: false,
};

const leadReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LEADS_REQUEST:
      return { ...state, loading: true };
    case types.GET_LEADS_SUCCESS:
      return {
        ...state,
        leads: payload,
        loading: false,
      };
    case types.GET_LEADS_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_LEAD_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_LEAD_SUCCESS:
      return {
        ...state,
        newLead: payload,
        loading: false,
      };
    case types.CREATE_LEAD_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default leadReducer;
