/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export type ModelImageEntryFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelImageEntryFilterInput | null > | null,
  or?: Array< ModelImageEntryFilterInput | null > | null,
  not?: ModelImageEntryFilterInput | null,
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

export type ModelImageEntryConnection = {
  __typename: "ModelImageEntryConnection",
  items:  Array<ImageEntry | null >,
  nextToken?: string | null,
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
