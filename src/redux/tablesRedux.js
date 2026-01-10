// selectors
export const getAllTables = state => state.tables.data;
export const getTablesLoading = state => state.tables.loading;
export const getTableById = (state, id) =>
  state.tables.data.find(table => table.id === id);

// actions
const createActionName = actionName => `app/tables/${actionName}`;

const SET_TABLES = createActionName('SET_TABLES');
const START_LOADING = createActionName('START_LOADING');
const STOP_LOADING = createActionName('STOP_LOADING');

// action creators
const setTables = payload => ({
  type: SET_TABLES,
  payload,
});

const startLoading = () => ({ type: START_LOADING });
const stopLoading = () => ({ type: STOP_LOADING });

// thunk
export const fetchTablesFromAPI = () => {
  return dispatch => {
    dispatch(startLoading());

    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(data => {
        dispatch(setTables(data));
        dispatch(stopLoading());
      });
  };
};

// reducer
const initialState = {
  data: [],
  loading: false,
};

const tablesReducer = (statePart = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...statePart, loading: true };

    case STOP_LOADING:
      return { ...statePart, loading: false };

    case SET_TABLES:
      return { ...statePart, data: action.payload };

    default:
      return statePart;
  }
};

export default tablesReducer;
