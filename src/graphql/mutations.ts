/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createImageEntry = /* GraphQL */ `
  mutation CreateImageEntry(
    $input: CreateImageEntryInput!
    $condition: ModelImageEntryConditionInput
  ) {
    createImageEntry(input: $input, condition: $condition) {
      id
      image
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const updateImageEntry = /* GraphQL */ `
  mutation UpdateImageEntry(
    $input: UpdateImageEntryInput!
    $condition: ModelImageEntryConditionInput
  ) {
    updateImageEntry(input: $input, condition: $condition) {
      id
      image
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const deleteImageEntry = /* GraphQL */ `
  mutation DeleteImageEntry(
    $input: DeleteImageEntryInput!
    $condition: ModelImageEntryConditionInput
  ) {
    deleteImageEntry(input: $input, condition: $condition) {
      id
      image
      description
      date
      createdAt
      updatedAt
    }
  }
`;
