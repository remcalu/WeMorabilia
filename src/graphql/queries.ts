/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImageEntry = /* GraphQL */ `
  query GetImageEntry($id: ID!) {
    getImageEntry(id: $id) {
      id
      image
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const listImageEntries = /* GraphQL */ `
  query ListImageEntries(
    $filter: ModelImageEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        description
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
