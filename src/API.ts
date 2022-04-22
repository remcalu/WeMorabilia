/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  image?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateImageEntryInput = {
  id?: string | null,
  image: string,
  description?: string | null,
  date?: string | null,
};

export type ModelImageEntryConditionInput = {
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelImageEntryConditionInput | null > | null,
  or?: Array< ModelImageEntryConditionInput | null > | null,
  not?: ModelImageEntryConditionInput | null,
};

export type ImageEntry = {
  __typename: "ImageEntry",
  id: string,
  image: string,
  description?: string | null,
  date?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateImageEntryInput = {
  id: string,
  image?: string | null,
  description?: string | null,
  date?: string | null,
};

export type DeleteImageEntryInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelImageEntryFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelImageEntryFilterInput | null > | null,
  or?: Array< ModelImageEntryFilterInput | null > | null,
  not?: ModelImageEntryFilterInput | null,
};

export type ModelImageEntryConnection = {
  __typename: "ModelImageEntryConnection",
  items:  Array<ImageEntry | null >,
  nextToken?: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateImageEntryMutationVariables = {
  input: CreateImageEntryInput,
  condition?: ModelImageEntryConditionInput | null,
};

export type CreateImageEntryMutation = {
  createImageEntry?:  {
    __typename: "ImageEntry",
    id: string,
    image: string,
    description?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateImageEntryMutationVariables = {
  input: UpdateImageEntryInput,
  condition?: ModelImageEntryConditionInput | null,
};

export type UpdateImageEntryMutation = {
  updateImageEntry?:  {
    __typename: "ImageEntry",
    id: string,
    image: string,
    description?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteImageEntryMutationVariables = {
  input: DeleteImageEntryInput,
  condition?: ModelImageEntryConditionInput | null,
};

export type DeleteImageEntryMutation = {
  deleteImageEntry?:  {
    __typename: "ImageEntry",
    id: string,
    image: string,
    description?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImageEntryQueryVariables = {
  id: string,
};

export type GetImageEntryQuery = {
  getImageEntry?:  {
    __typename: "ImageEntry",
    id: string,
    image: string,
    description?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListImageEntriesQueryVariables = {
  filter?: ModelImageEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImageEntriesQuery = {
  listImageEntries?:  {
    __typename: "ModelImageEntryConnection",
    items:  Array< {
      __typename: "ImageEntry",
      id: string,
      image: string,
      description?: string | null,
      date?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateImageEntrySubscription = {
  onCreateImageEntry?:  {
    __typename: "ImageEntry",
    id: string,
    image: string,
    description?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateImageEntrySubscription = {
  onUpdateImageEntry?:  {
    __typename: "ImageEntry",
    id: string,
    image: string,
    description?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteImageEntrySubscription = {
  onDeleteImageEntry?:  {
    __typename: "ImageEntry",
    id: string,
    image: string,
    description?: string | null,
    date?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
