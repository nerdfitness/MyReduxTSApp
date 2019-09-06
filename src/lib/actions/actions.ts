/*
 * action types
 */

export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
}

/*
 * other constants
 */

export enum VisibilityFilters {
  SHOW_ALL = "SHOW_ALL",
  SHOW_COMPLETED = "SHOW_COMPLETED",
  SHOW_ACTIVE = "SHOW_ACTIVE"
}

/*
 * action creators
 */

export function addTodo(text: string) {
  return { type: TodoActions.ADD_TODO, text };
}

export function toggleTodo(index: number) {
  return { type: TodoActions.TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter: boolean) {
  return { type: TodoActions.SET_VISIBILITY_FILTER, filter };
}
