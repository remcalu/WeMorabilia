/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
