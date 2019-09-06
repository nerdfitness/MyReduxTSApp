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

export type TodoAction = {
  type: TodoActions;
  text: string;
};

export type VisibilityAction = {
  type: VisibilityFilters;
  filter: VisibilityFilters;
};

export interface Todo {
  text: string;
  index: number;
  completed: boolean;
}

export type TodoState = {
  visibilityFilter: VisibilityFilters;
  todos: Todo[];
};
