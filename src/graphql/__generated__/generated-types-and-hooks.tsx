import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  timetable: Timetable;
  timetables: Array<Timetable>;
  todos?: Maybe<Array<Maybe<Todo>>>;
};


export type QueryTodosArgs = {
  input: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: Auth;
  updateLoginUser: Auth;
  deleteLoginUser: Scalars['Boolean'];
  login: Auth;
  refreshToken: Scalars['String'];
  createTimetable: Timetable;
  updateTimetable: Timetable;
  deleteTimetable: Scalars['Boolean'];
  createClass: Class;
  updateClass: Class;
  deleteClass: Scalars['Boolean'];
  createClassTime: ClassTime;
  updateClassTime: ClassTime;
  createTodo: Todo;
  updateTodo: Todo;
  deleteTodo: Scalars['Boolean'];
  createUrl: Url;
  updateUrl: Url;
  deleteUrl: Scalars['Boolean'];
};


export type MutationSignupArgs = {
  input: NewUser;
};


export type MutationUpdateLoginUserArgs = {
  input: UpdateUser;
};


export type MutationDeleteLoginUserArgs = {
  input: DeleteUser;
};


export type MutationLoginArgs = {
  input: Login;
};


export type MutationCreateTimetableArgs = {
  input: NewTimetable;
};


export type MutationUpdateTimetableArgs = {
  input: UpdateTimetable;
};


export type MutationDeleteTimetableArgs = {
  input: Scalars['ID'];
};


export type MutationCreateClassArgs = {
  input: NewClass;
};


export type MutationUpdateClassArgs = {
  input: UpdateClass;
};


export type MutationDeleteClassArgs = {
  input: Scalars['ID'];
};


export type MutationCreateClassTimeArgs = {
  input: NewClassTime;
};


export type MutationUpdateClassTimeArgs = {
  input: UpdateClassTime;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodo;
};


export type MutationDeleteTodoArgs = {
  input: Scalars['ID'];
};


export type MutationCreateUrlArgs = {
  input: NewUrl;
};


export type MutationUpdateUrlArgs = {
  input: UpdateUrl;
};


export type MutationDeleteUrlArgs = {
  input: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  school: Scalars['String'];
  name: Scalars['String'];
  timetables?: Maybe<Array<Maybe<Timetable>>>;
};

export type Auth = {
  __typename?: 'Auth';
  user: User;
  token: Scalars['String'];
};

export type Timetable = {
  __typename?: 'Timetable';
  id: Scalars['ID'];
  name: Scalars['String'];
  days: Scalars['Int'];
  periods: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  isDefault: Scalars['Boolean'];
  classes?: Maybe<Array<Maybe<Class>>>;
  classtimes?: Maybe<Array<Maybe<ClassTime>>>;
  rowData?: Maybe<Array<Maybe<TimetableRowData>>>;
};

export type ClassTime = {
  __typename?: 'ClassTime';
  id: Scalars['ID'];
  period: Scalars['Int'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
};

export type Class = {
  __typename?: 'Class';
  id: Scalars['ID'];
  name: Scalars['String'];
  day: Scalars['Int'];
  period: Scalars['Int'];
  color: Scalars['String'];
  style: Scalars['String'];
  teacher: Scalars['String'];
  credit?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  roomOrUrl: Scalars['String'];
  todos?: Maybe<Array<Maybe<Todo>>>;
  urls?: Maybe<Array<Maybe<Url>>>;
};

export type TimetableRowData = {
  __typename?: 'TimetableRowData';
  periods: Scalars['Int'];
  Classes?: Maybe<Array<Maybe<Class>>>;
  startTime: Scalars['String'];
  endTime: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  kind: Scalars['String'];
  deadline: Scalars['String'];
  isDone: Scalars['Boolean'];
  memo?: Maybe<Scalars['String']>;
  isRepeated: Scalars['Boolean'];
};

export type Url = {
  __typename?: 'Url';
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type NewUser = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  school: Scalars['String'];
};

export type UpdateUser = {
  email?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<UpdatePassword>;
};

export type UpdatePassword = {
  new: Scalars['String'];
  current: Scalars['String'];
};

export type DeleteUser = {
  password: Scalars['String'];
};

export type Login = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RefreshTokenInput = {
  token: Scalars['String'];
};

export type NewTimetable = {
  name: Scalars['String'];
  days: Scalars['Int'];
  periods: Scalars['Int'];
};

export type UpdateTimetable = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  days?: Maybe<Scalars['Int']>;
  periods?: Maybe<Scalars['Int']>;
  isDefault?: Maybe<Scalars['Boolean']>;
};

export type NewClassTime = {
  period: Scalars['Int'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  timetableId: Scalars['ID'];
};

export type UpdateClassTime = {
  id: Scalars['ID'];
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
};

export type NewClass = {
  name: Scalars['String'];
  day: Scalars['Int'];
  period: Scalars['Int'];
  style?: Maybe<Scalars['String']>;
  teacher?: Maybe<Scalars['String']>;
  roomOrUrl?: Maybe<Scalars['String']>;
  timetableId: Scalars['ID'];
};

export type UpdateClass = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  teacher?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['Int']>;
  memo?: Maybe<Scalars['String']>;
  roomOrUrl?: Maybe<Scalars['String']>;
};

export type NewTodo = {
  kind: Scalars['String'];
  deadline: Scalars['String'];
  isRepeated: Scalars['Boolean'];
  classId: Scalars['ID'];
};

export type UpdateTodo = {
  id: Scalars['ID'];
  kind?: Maybe<Scalars['String']>;
  deadline?: Maybe<Scalars['String']>;
  isDone?: Maybe<Scalars['Boolean']>;
  memo?: Maybe<Scalars['String']>;
  isRepeated?: Maybe<Scalars['Boolean']>;
};

export type NewUrl = {
  name: Scalars['String'];
  url: Scalars['String'];
  classId: Scalars['ID'];
};

export type UpdateUrl = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SignupMutationVariables = Exact<{
  input: NewUser;
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name' | 'school'>
      & { timetables?: Maybe<Array<Maybe<(
        { __typename?: 'Timetable' }
        & Pick<Timetable, 'id'>
      )>>> }
    ) }
  ) }
);

export type LoginMutationVariables = Exact<{
  input: Login;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name' | 'school'>
      & { timetables?: Maybe<Array<Maybe<(
        { __typename?: 'Timetable' }
        & Pick<Timetable, 'id'>
      )>>> }
    ) }
  ) }
);

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'refreshToken'>
);

export type UpdateLoginUserMutationVariables = Exact<{
  input: UpdateUser;
}>;


export type UpdateLoginUserMutation = (
  { __typename?: 'Mutation' }
  & { updateLoginUser: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name' | 'school'>
      & { timetables?: Maybe<Array<Maybe<(
        { __typename?: 'Timetable' }
        & Pick<Timetable, 'id'>
      )>>> }
    ) }
  ) }
);

export type DeleteLoginUserMutationVariables = Exact<{
  input: DeleteUser;
}>;


export type DeleteLoginUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteLoginUser'>
);

export type CreateTimetableMutationVariables = Exact<{
  input: NewTimetable;
}>;


export type CreateTimetableMutation = (
  { __typename?: 'Mutation' }
  & { createTimetable: (
    { __typename?: 'Timetable' }
    & Pick<Timetable, 'id' | 'name' | 'days' | 'periods' | 'createdAt' | 'updatedAt' | 'isDefault'>
  ) }
);

export type UpdateTimetableMutationVariables = Exact<{
  input: UpdateTimetable;
}>;


export type UpdateTimetableMutation = (
  { __typename?: 'Mutation' }
  & { updateTimetable: (
    { __typename?: 'Timetable' }
    & Pick<Timetable, 'id' | 'name' | 'days' | 'periods' | 'createdAt' | 'updatedAt' | 'isDefault'>
  ) }
);

export type DeleteTimetableMutationVariables = Exact<{
  timetableId: Scalars['ID'];
}>;


export type DeleteTimetableMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTimetable'>
);

export type CreateClasstimeMutationVariables = Exact<{
  input: NewClassTime;
}>;


export type CreateClasstimeMutation = (
  { __typename?: 'Mutation' }
  & { createClassTime: (
    { __typename?: 'ClassTime' }
    & Pick<ClassTime, 'id' | 'period' | 'startTime' | 'endTime'>
  ) }
);

export type UpdateClassTimeMutationVariables = Exact<{
  input: UpdateClassTime;
}>;


export type UpdateClassTimeMutation = (
  { __typename?: 'Mutation' }
  & { updateClassTime: (
    { __typename?: 'ClassTime' }
    & Pick<ClassTime, 'id' | 'period' | 'startTime' | 'endTime'>
  ) }
);

export type CreateClassMutationVariables = Exact<{
  input: NewClass;
}>;


export type CreateClassMutation = (
  { __typename?: 'Mutation' }
  & { createClass: (
    { __typename?: 'Class' }
    & Pick<Class, 'id' | 'name' | 'day' | 'period' | 'color' | 'style' | 'teacher' | 'credit' | 'memo' | 'roomOrUrl'>
  ) }
);

export type UpdateClassMutationVariables = Exact<{
  input: UpdateClass;
}>;


export type UpdateClassMutation = (
  { __typename?: 'Mutation' }
  & { updateClass: (
    { __typename?: 'Class' }
    & Pick<Class, 'id' | 'name' | 'day' | 'period' | 'color' | 'style' | 'teacher' | 'credit' | 'memo' | 'roomOrUrl'>
  ) }
);

export type DeleteClassMutationVariables = Exact<{
  classId: Scalars['ID'];
}>;


export type DeleteClassMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteClass'>
);

export type CreateTodoMutationVariables = Exact<{
  input: NewTodo;
}>;


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'kind' | 'deadline' | 'isDone' | 'isRepeated' | 'memo'>
  ) }
);

export type UpdateTodoMutationVariables = Exact<{
  input: UpdateTodo;
}>;


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & { updateTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'kind' | 'deadline' | 'isDone' | 'isRepeated' | 'memo'>
  ) }
);

export type DeleteTodoMutationVariables = Exact<{
  todoId: Scalars['ID'];
}>;


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTodo'>
);

export type CreateUrlMutationVariables = Exact<{
  input: NewUrl;
}>;


export type CreateUrlMutation = (
  { __typename?: 'Mutation' }
  & { createUrl: (
    { __typename?: 'Url' }
    & Pick<Url, 'id' | 'name' | 'url'>
  ) }
);

export type UpdateUrlMutationVariables = Exact<{
  input: UpdateUrl;
}>;


export type UpdateUrlMutation = (
  { __typename?: 'Mutation' }
  & { updateUrl: (
    { __typename?: 'Url' }
    & Pick<Url, 'id' | 'name' | 'url'>
  ) }
);

export type DeleteUrlMutationVariables = Exact<{
  urlId: Scalars['ID'];
}>;


export type DeleteUrlMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUrl'>
);

export type GetLoginUserDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoginUserDataQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'school'>
    & { timetables?: Maybe<Array<Maybe<(
      { __typename?: 'Timetable' }
      & Pick<Timetable, 'id' | 'name' | 'days' | 'periods' | 'createdAt' | 'updatedAt' | 'isDefault'>
    )>>> }
  ) }
);

export type GetDefaultTimetableQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDefaultTimetableQuery = (
  { __typename?: 'Query' }
  & { timetable: (
    { __typename?: 'Timetable' }
    & Pick<Timetable, 'id' | 'name' | 'days' | 'periods' | 'createdAt' | 'updatedAt' | 'isDefault'>
    & { rowData?: Maybe<Array<Maybe<(
      { __typename?: 'TimetableRowData' }
      & Pick<TimetableRowData, 'periods' | 'startTime' | 'endTime'>
      & { Classes?: Maybe<Array<Maybe<(
        { __typename?: 'Class' }
        & Pick<Class, 'id' | 'name' | 'day' | 'period' | 'color' | 'style' | 'teacher' | 'credit' | 'memo' | 'roomOrUrl'>
        & { todos?: Maybe<Array<Maybe<(
          { __typename?: 'Todo' }
          & Pick<Todo, 'id' | 'kind' | 'deadline' | 'isDone' | 'isRepeated' | 'memo'>
        )>>>, urls?: Maybe<Array<Maybe<(
          { __typename?: 'Url' }
          & Pick<Url, 'id' | 'name' | 'url'>
        )>>> }
      )>>> }
    )>>> }
  ) }
);

export type GetTodosByGivenTimetableIdQueryVariables = Exact<{
  timetableId: Scalars['ID'];
}>;


export type GetTodosByGivenTimetableIdQuery = (
  { __typename?: 'Query' }
  & { todos?: Maybe<Array<Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'kind' | 'deadline' | 'isDone' | 'isRepeated' | 'memo'>
  )>>> }
);


export const SignupDocument = gql`
    mutation signup($input: NewUser!) {
  signup(input: $input) {
    user {
      id
      email
      name
      school
      timetables {
        id
      }
    }
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: Login!) {
  login(input: $input) {
    user {
      id
      email
      name
      school
      timetables {
        id
      }
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation refreshToken {
  refreshToken
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, baseOptions);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const UpdateLoginUserDocument = gql`
    mutation updateLoginUser($input: UpdateUser!) {
  updateLoginUser(input: $input) {
    user {
      id
      email
      name
      school
      timetables {
        id
      }
    }
    token
  }
}
    `;
export type UpdateLoginUserMutationFn = Apollo.MutationFunction<UpdateLoginUserMutation, UpdateLoginUserMutationVariables>;

/**
 * __useUpdateLoginUserMutation__
 *
 * To run a mutation, you first call `useUpdateLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLoginUserMutation, { data, loading, error }] = useUpdateLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLoginUserMutation, UpdateLoginUserMutationVariables>) {
        return Apollo.useMutation<UpdateLoginUserMutation, UpdateLoginUserMutationVariables>(UpdateLoginUserDocument, baseOptions);
      }
export type UpdateLoginUserMutationHookResult = ReturnType<typeof useUpdateLoginUserMutation>;
export type UpdateLoginUserMutationResult = Apollo.MutationResult<UpdateLoginUserMutation>;
export type UpdateLoginUserMutationOptions = Apollo.BaseMutationOptions<UpdateLoginUserMutation, UpdateLoginUserMutationVariables>;
export const DeleteLoginUserDocument = gql`
    mutation deleteLoginUser($input: DeleteUser!) {
  deleteLoginUser(input: $input)
}
    `;
export type DeleteLoginUserMutationFn = Apollo.MutationFunction<DeleteLoginUserMutation, DeleteLoginUserMutationVariables>;

/**
 * __useDeleteLoginUserMutation__
 *
 * To run a mutation, you first call `useDeleteLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLoginUserMutation, { data, loading, error }] = useDeleteLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLoginUserMutation, DeleteLoginUserMutationVariables>) {
        return Apollo.useMutation<DeleteLoginUserMutation, DeleteLoginUserMutationVariables>(DeleteLoginUserDocument, baseOptions);
      }
export type DeleteLoginUserMutationHookResult = ReturnType<typeof useDeleteLoginUserMutation>;
export type DeleteLoginUserMutationResult = Apollo.MutationResult<DeleteLoginUserMutation>;
export type DeleteLoginUserMutationOptions = Apollo.BaseMutationOptions<DeleteLoginUserMutation, DeleteLoginUserMutationVariables>;
export const CreateTimetableDocument = gql`
    mutation createTimetable($input: NewTimetable!) {
  createTimetable(input: $input) {
    id
    name
    days
    periods
    createdAt
    updatedAt
    isDefault
  }
}
    `;
export type CreateTimetableMutationFn = Apollo.MutationFunction<CreateTimetableMutation, CreateTimetableMutationVariables>;

/**
 * __useCreateTimetableMutation__
 *
 * To run a mutation, you first call `useCreateTimetableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTimetableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTimetableMutation, { data, loading, error }] = useCreateTimetableMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTimetableMutation(baseOptions?: Apollo.MutationHookOptions<CreateTimetableMutation, CreateTimetableMutationVariables>) {
        return Apollo.useMutation<CreateTimetableMutation, CreateTimetableMutationVariables>(CreateTimetableDocument, baseOptions);
      }
export type CreateTimetableMutationHookResult = ReturnType<typeof useCreateTimetableMutation>;
export type CreateTimetableMutationResult = Apollo.MutationResult<CreateTimetableMutation>;
export type CreateTimetableMutationOptions = Apollo.BaseMutationOptions<CreateTimetableMutation, CreateTimetableMutationVariables>;
export const UpdateTimetableDocument = gql`
    mutation updateTimetable($input: UpdateTimetable!) {
  updateTimetable(input: $input) {
    id
    name
    days
    periods
    createdAt
    updatedAt
    isDefault
  }
}
    `;
export type UpdateTimetableMutationFn = Apollo.MutationFunction<UpdateTimetableMutation, UpdateTimetableMutationVariables>;

/**
 * __useUpdateTimetableMutation__
 *
 * To run a mutation, you first call `useUpdateTimetableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTimetableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTimetableMutation, { data, loading, error }] = useUpdateTimetableMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTimetableMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTimetableMutation, UpdateTimetableMutationVariables>) {
        return Apollo.useMutation<UpdateTimetableMutation, UpdateTimetableMutationVariables>(UpdateTimetableDocument, baseOptions);
      }
export type UpdateTimetableMutationHookResult = ReturnType<typeof useUpdateTimetableMutation>;
export type UpdateTimetableMutationResult = Apollo.MutationResult<UpdateTimetableMutation>;
export type UpdateTimetableMutationOptions = Apollo.BaseMutationOptions<UpdateTimetableMutation, UpdateTimetableMutationVariables>;
export const DeleteTimetableDocument = gql`
    mutation deleteTimetable($timetableId: ID!) {
  deleteTimetable(input: $timetableId)
}
    `;
export type DeleteTimetableMutationFn = Apollo.MutationFunction<DeleteTimetableMutation, DeleteTimetableMutationVariables>;

/**
 * __useDeleteTimetableMutation__
 *
 * To run a mutation, you first call `useDeleteTimetableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTimetableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTimetableMutation, { data, loading, error }] = useDeleteTimetableMutation({
 *   variables: {
 *      timetableId: // value for 'timetableId'
 *   },
 * });
 */
export function useDeleteTimetableMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTimetableMutation, DeleteTimetableMutationVariables>) {
        return Apollo.useMutation<DeleteTimetableMutation, DeleteTimetableMutationVariables>(DeleteTimetableDocument, baseOptions);
      }
export type DeleteTimetableMutationHookResult = ReturnType<typeof useDeleteTimetableMutation>;
export type DeleteTimetableMutationResult = Apollo.MutationResult<DeleteTimetableMutation>;
export type DeleteTimetableMutationOptions = Apollo.BaseMutationOptions<DeleteTimetableMutation, DeleteTimetableMutationVariables>;
export const CreateClasstimeDocument = gql`
    mutation createClasstime($input: NewClassTime!) {
  createClassTime(input: $input) {
    id
    period
    startTime
    endTime
  }
}
    `;
export type CreateClasstimeMutationFn = Apollo.MutationFunction<CreateClasstimeMutation, CreateClasstimeMutationVariables>;

/**
 * __useCreateClasstimeMutation__
 *
 * To run a mutation, you first call `useCreateClasstimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClasstimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClasstimeMutation, { data, loading, error }] = useCreateClasstimeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateClasstimeMutation(baseOptions?: Apollo.MutationHookOptions<CreateClasstimeMutation, CreateClasstimeMutationVariables>) {
        return Apollo.useMutation<CreateClasstimeMutation, CreateClasstimeMutationVariables>(CreateClasstimeDocument, baseOptions);
      }
export type CreateClasstimeMutationHookResult = ReturnType<typeof useCreateClasstimeMutation>;
export type CreateClasstimeMutationResult = Apollo.MutationResult<CreateClasstimeMutation>;
export type CreateClasstimeMutationOptions = Apollo.BaseMutationOptions<CreateClasstimeMutation, CreateClasstimeMutationVariables>;
export const UpdateClassTimeDocument = gql`
    mutation updateClassTime($input: UpdateClassTime!) {
  updateClassTime(input: $input) {
    id
    period
    startTime
    endTime
  }
}
    `;
export type UpdateClassTimeMutationFn = Apollo.MutationFunction<UpdateClassTimeMutation, UpdateClassTimeMutationVariables>;

/**
 * __useUpdateClassTimeMutation__
 *
 * To run a mutation, you first call `useUpdateClassTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClassTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClassTimeMutation, { data, loading, error }] = useUpdateClassTimeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClassTimeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClassTimeMutation, UpdateClassTimeMutationVariables>) {
        return Apollo.useMutation<UpdateClassTimeMutation, UpdateClassTimeMutationVariables>(UpdateClassTimeDocument, baseOptions);
      }
export type UpdateClassTimeMutationHookResult = ReturnType<typeof useUpdateClassTimeMutation>;
export type UpdateClassTimeMutationResult = Apollo.MutationResult<UpdateClassTimeMutation>;
export type UpdateClassTimeMutationOptions = Apollo.BaseMutationOptions<UpdateClassTimeMutation, UpdateClassTimeMutationVariables>;
export const CreateClassDocument = gql`
    mutation createClass($input: NewClass!) {
  createClass(input: $input) {
    id
    name
    day
    period
    color
    style
    teacher
    credit
    memo
    roomOrUrl
  }
}
    `;
export type CreateClassMutationFn = Apollo.MutationFunction<CreateClassMutation, CreateClassMutationVariables>;

/**
 * __useCreateClassMutation__
 *
 * To run a mutation, you first call `useCreateClassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClassMutation, { data, loading, error }] = useCreateClassMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateClassMutation(baseOptions?: Apollo.MutationHookOptions<CreateClassMutation, CreateClassMutationVariables>) {
        return Apollo.useMutation<CreateClassMutation, CreateClassMutationVariables>(CreateClassDocument, baseOptions);
      }
export type CreateClassMutationHookResult = ReturnType<typeof useCreateClassMutation>;
export type CreateClassMutationResult = Apollo.MutationResult<CreateClassMutation>;
export type CreateClassMutationOptions = Apollo.BaseMutationOptions<CreateClassMutation, CreateClassMutationVariables>;
export const UpdateClassDocument = gql`
    mutation updateClass($input: UpdateClass!) {
  updateClass(input: $input) {
    id
    name
    day
    period
    color
    style
    teacher
    credit
    memo
    roomOrUrl
  }
}
    `;
export type UpdateClassMutationFn = Apollo.MutationFunction<UpdateClassMutation, UpdateClassMutationVariables>;

/**
 * __useUpdateClassMutation__
 *
 * To run a mutation, you first call `useUpdateClassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClassMutation, { data, loading, error }] = useUpdateClassMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClassMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClassMutation, UpdateClassMutationVariables>) {
        return Apollo.useMutation<UpdateClassMutation, UpdateClassMutationVariables>(UpdateClassDocument, baseOptions);
      }
export type UpdateClassMutationHookResult = ReturnType<typeof useUpdateClassMutation>;
export type UpdateClassMutationResult = Apollo.MutationResult<UpdateClassMutation>;
export type UpdateClassMutationOptions = Apollo.BaseMutationOptions<UpdateClassMutation, UpdateClassMutationVariables>;
export const DeleteClassDocument = gql`
    mutation deleteClass($classId: ID!) {
  deleteClass(input: $classId)
}
    `;
export type DeleteClassMutationFn = Apollo.MutationFunction<DeleteClassMutation, DeleteClassMutationVariables>;

/**
 * __useDeleteClassMutation__
 *
 * To run a mutation, you first call `useDeleteClassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClassMutation, { data, loading, error }] = useDeleteClassMutation({
 *   variables: {
 *      classId: // value for 'classId'
 *   },
 * });
 */
export function useDeleteClassMutation(baseOptions?: Apollo.MutationHookOptions<DeleteClassMutation, DeleteClassMutationVariables>) {
        return Apollo.useMutation<DeleteClassMutation, DeleteClassMutationVariables>(DeleteClassDocument, baseOptions);
      }
export type DeleteClassMutationHookResult = ReturnType<typeof useDeleteClassMutation>;
export type DeleteClassMutationResult = Apollo.MutationResult<DeleteClassMutation>;
export type DeleteClassMutationOptions = Apollo.BaseMutationOptions<DeleteClassMutation, DeleteClassMutationVariables>;
export const CreateTodoDocument = gql`
    mutation createTodo($input: NewTodo!) {
  createTodo(input: $input) {
    id
    kind
    deadline
    isDone
    isRepeated
    memo
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($input: UpdateTodo!) {
  updateTodo(input: $input) {
    id
    kind
    deadline
    isDone
    isRepeated
    memo
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, baseOptions);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($todoId: ID!) {
  deleteTodo(input: $todoId)
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, baseOptions);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const CreateUrlDocument = gql`
    mutation createUrl($input: NewUrl!) {
  createUrl(input: $input) {
    id
    name
    url
  }
}
    `;
export type CreateUrlMutationFn = Apollo.MutationFunction<CreateUrlMutation, CreateUrlMutationVariables>;

/**
 * __useCreateUrlMutation__
 *
 * To run a mutation, you first call `useCreateUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUrlMutation, { data, loading, error }] = useCreateUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateUrlMutation, CreateUrlMutationVariables>) {
        return Apollo.useMutation<CreateUrlMutation, CreateUrlMutationVariables>(CreateUrlDocument, baseOptions);
      }
export type CreateUrlMutationHookResult = ReturnType<typeof useCreateUrlMutation>;
export type CreateUrlMutationResult = Apollo.MutationResult<CreateUrlMutation>;
export type CreateUrlMutationOptions = Apollo.BaseMutationOptions<CreateUrlMutation, CreateUrlMutationVariables>;
export const UpdateUrlDocument = gql`
    mutation updateUrl($input: UpdateUrl!) {
  updateUrl(input: $input) {
    id
    name
    url
  }
}
    `;
export type UpdateUrlMutationFn = Apollo.MutationFunction<UpdateUrlMutation, UpdateUrlMutationVariables>;

/**
 * __useUpdateUrlMutation__
 *
 * To run a mutation, you first call `useUpdateUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUrlMutation, { data, loading, error }] = useUpdateUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUrlMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUrlMutation, UpdateUrlMutationVariables>) {
        return Apollo.useMutation<UpdateUrlMutation, UpdateUrlMutationVariables>(UpdateUrlDocument, baseOptions);
      }
export type UpdateUrlMutationHookResult = ReturnType<typeof useUpdateUrlMutation>;
export type UpdateUrlMutationResult = Apollo.MutationResult<UpdateUrlMutation>;
export type UpdateUrlMutationOptions = Apollo.BaseMutationOptions<UpdateUrlMutation, UpdateUrlMutationVariables>;
export const DeleteUrlDocument = gql`
    mutation deleteUrl($urlId: ID!) {
  deleteUrl(input: $urlId)
}
    `;
export type DeleteUrlMutationFn = Apollo.MutationFunction<DeleteUrlMutation, DeleteUrlMutationVariables>;

/**
 * __useDeleteUrlMutation__
 *
 * To run a mutation, you first call `useDeleteUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUrlMutation, { data, loading, error }] = useDeleteUrlMutation({
 *   variables: {
 *      urlId: // value for 'urlId'
 *   },
 * });
 */
export function useDeleteUrlMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUrlMutation, DeleteUrlMutationVariables>) {
        return Apollo.useMutation<DeleteUrlMutation, DeleteUrlMutationVariables>(DeleteUrlDocument, baseOptions);
      }
export type DeleteUrlMutationHookResult = ReturnType<typeof useDeleteUrlMutation>;
export type DeleteUrlMutationResult = Apollo.MutationResult<DeleteUrlMutation>;
export type DeleteUrlMutationOptions = Apollo.BaseMutationOptions<DeleteUrlMutation, DeleteUrlMutationVariables>;
export const GetLoginUserDataDocument = gql`
    query getLoginUserData {
  user {
    id
    email
    name
    school
    timetables {
      id
      name
      days
      periods
      createdAt
      updatedAt
      isDefault
    }
  }
}
    `;

/**
 * __useGetLoginUserDataQuery__
 *
 * To run a query within a React component, call `useGetLoginUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoginUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoginUserDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoginUserDataQuery(baseOptions?: Apollo.QueryHookOptions<GetLoginUserDataQuery, GetLoginUserDataQueryVariables>) {
        return Apollo.useQuery<GetLoginUserDataQuery, GetLoginUserDataQueryVariables>(GetLoginUserDataDocument, baseOptions);
      }
export function useGetLoginUserDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoginUserDataQuery, GetLoginUserDataQueryVariables>) {
          return Apollo.useLazyQuery<GetLoginUserDataQuery, GetLoginUserDataQueryVariables>(GetLoginUserDataDocument, baseOptions);
        }
export type GetLoginUserDataQueryHookResult = ReturnType<typeof useGetLoginUserDataQuery>;
export type GetLoginUserDataLazyQueryHookResult = ReturnType<typeof useGetLoginUserDataLazyQuery>;
export type GetLoginUserDataQueryResult = Apollo.QueryResult<GetLoginUserDataQuery, GetLoginUserDataQueryVariables>;
export const GetDefaultTimetableDocument = gql`
    query getDefaultTimetable {
  timetable {
    id
    name
    days
    periods
    createdAt
    updatedAt
    isDefault
    rowData {
      periods
      startTime
      endTime
      Classes {
        id
        name
        day
        period
        color
        style
        teacher
        credit
        memo
        roomOrUrl
        todos {
          id
          kind
          deadline
          isDone
          isRepeated
          memo
        }
        urls {
          id
          name
          url
        }
      }
    }
  }
}
    `;

/**
 * __useGetDefaultTimetableQuery__
 *
 * To run a query within a React component, call `useGetDefaultTimetableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDefaultTimetableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDefaultTimetableQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDefaultTimetableQuery(baseOptions?: Apollo.QueryHookOptions<GetDefaultTimetableQuery, GetDefaultTimetableQueryVariables>) {
        return Apollo.useQuery<GetDefaultTimetableQuery, GetDefaultTimetableQueryVariables>(GetDefaultTimetableDocument, baseOptions);
      }
export function useGetDefaultTimetableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDefaultTimetableQuery, GetDefaultTimetableQueryVariables>) {
          return Apollo.useLazyQuery<GetDefaultTimetableQuery, GetDefaultTimetableQueryVariables>(GetDefaultTimetableDocument, baseOptions);
        }
export type GetDefaultTimetableQueryHookResult = ReturnType<typeof useGetDefaultTimetableQuery>;
export type GetDefaultTimetableLazyQueryHookResult = ReturnType<typeof useGetDefaultTimetableLazyQuery>;
export type GetDefaultTimetableQueryResult = Apollo.QueryResult<GetDefaultTimetableQuery, GetDefaultTimetableQueryVariables>;
export const GetTodosByGivenTimetableIdDocument = gql`
    query getTodosByGivenTimetableId($timetableId: ID!) {
  todos(input: $timetableId) {
    id
    kind
    deadline
    isDone
    isRepeated
    memo
  }
}
    `;

/**
 * __useGetTodosByGivenTimetableIdQuery__
 *
 * To run a query within a React component, call `useGetTodosByGivenTimetableIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosByGivenTimetableIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosByGivenTimetableIdQuery({
 *   variables: {
 *      timetableId: // value for 'timetableId'
 *   },
 * });
 */
export function useGetTodosByGivenTimetableIdQuery(baseOptions: Apollo.QueryHookOptions<GetTodosByGivenTimetableIdQuery, GetTodosByGivenTimetableIdQueryVariables>) {
        return Apollo.useQuery<GetTodosByGivenTimetableIdQuery, GetTodosByGivenTimetableIdQueryVariables>(GetTodosByGivenTimetableIdDocument, baseOptions);
      }
export function useGetTodosByGivenTimetableIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosByGivenTimetableIdQuery, GetTodosByGivenTimetableIdQueryVariables>) {
          return Apollo.useLazyQuery<GetTodosByGivenTimetableIdQuery, GetTodosByGivenTimetableIdQueryVariables>(GetTodosByGivenTimetableIdDocument, baseOptions);
        }
export type GetTodosByGivenTimetableIdQueryHookResult = ReturnType<typeof useGetTodosByGivenTimetableIdQuery>;
export type GetTodosByGivenTimetableIdLazyQueryHookResult = ReturnType<typeof useGetTodosByGivenTimetableIdLazyQuery>;
export type GetTodosByGivenTimetableIdQueryResult = Apollo.QueryResult<GetTodosByGivenTimetableIdQuery, GetTodosByGivenTimetableIdQueryVariables>;