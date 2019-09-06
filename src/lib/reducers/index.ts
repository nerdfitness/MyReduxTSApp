import ActionsEnum from "../actions/actionsEnum";

const initialState = {
  articles: []
};
function rootReducer(state = initialState, action: any) {
  if (action.type === ActionsEnum.add_article) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
