import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * This file was generated by graphql-schema-generator which is
   * maintained by prisma-korea.
   *
   * Do not make changes to this file directly.
   * Read more about in https://github.com/prisma-korea/graphql-schema-generator.
   */
  DateTime: any;
};

export type AddToCard = {
  __typename?: 'AddToCard';
  bookStore: BookStore;
  createAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updateAt: Scalars['DateTime'];
  user: User;
};

export type Author = {
  __typename?: 'Author';
  Book: Array<Book>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updateAt: Scalars['DateTime'];
  user: User;
};

export type Book = {
  __typename?: 'Book';
  BookReviewedUsers: Array<BookReview>;
  BookStore?: Maybe<BookStore>;
  CurrentlyReadingUsers: Array<CurrentlyReading>;
  FinishedReadingUsers: Array<FinishedReading>;
  PurchasedUsers: Array<PurchasedBook>;
  author: Author;
  createAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  genres: Array<Genre>;
  id: Scalars['ID'];
  langauge?: Maybe<Scalars['String']>;
  page: Scalars['Int'];
  published?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updateAt: Scalars['DateTime'];
};

export type BookReview = {
  __typename?: 'BookReview';
  book: Book;
  createAt: Scalars['DateTime'];
  id: Scalars['ID'];
  rate: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  updateAt: Scalars['DateTime'];
  user: User;
};

export type BookStore = {
  __typename?: 'BookStore';
  AddToCard: Array<AddToCard>;
  StoreBookReview: Array<StoreBookReview>;
  book: Book;
  createAt: Scalars['DateTime'];
  discount: Scalars['Int'];
  id: Scalars['ID'];
  outOfStock: Scalars['Boolean'];
  price: Scalars['Int'];
  updateAt: Scalars['DateTime'];
};

export type CurrentlyReading = {
  __typename?: 'CurrentlyReading';
  book: Book;
  createAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updateAt: Scalars['DateTime'];
  user: User;
};

export type FinishedReading = {
  __typename?: 'FinishedReading';
  book: Book;
  createAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updateAt: Scalars['DateTime'];
  user: User;
};

export type Genre = {
  __typename?: 'Genre';
  books: Array<Book>;
  createAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updateAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthor?: Maybe<Author>;
  addUser?: Maybe<User>;
};


export type MutationAddAuthorArgs = {
  userId: Scalars['Int'];
};


export type MutationAddUserArgs = {
  addUserCriteria: AddUserInput;
};

export type PurchasedBook = {
  __typename?: 'PurchasedBook';
  book: Book;
  createAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updateAt: Scalars['DateTime'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  getAuthor?: Maybe<Author>;
  getAuthors?: Maybe<Array<Maybe<Author>>>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetAuthorArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type StoreBookReview = {
  __typename?: 'StoreBookReview';
  bookStore: BookStore;
  createAt: Scalars['DateTime'];
  id: Scalars['ID'];
  rate: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  updateAt: Scalars['DateTime'];
  user: User;
};

export type User = {
  __typename?: 'User';
  AddToCard: Array<AddToCard>;
  BookReview: Array<BookReview>;
  CurrentlyReadingBooks: Array<CurrentlyReading>;
  FinishedReadingBooks: Array<FinishedReading>;
  PurchasedBook: Array<PurchasedBook>;
  StoreBookReview: Array<StoreBookReview>;
  author?: Maybe<Author>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  updateAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type AddUserInput = {
  email: Scalars['String'];
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: Role;
  username: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddToCard: ResolverTypeWrapper<AddToCard>;
  Author: ResolverTypeWrapper<Author>;
  Book: ResolverTypeWrapper<Book>;
  BookReview: ResolverTypeWrapper<BookReview>;
  BookStore: ResolverTypeWrapper<BookStore>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CurrentlyReading: ResolverTypeWrapper<CurrentlyReading>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  FinishedReading: ResolverTypeWrapper<FinishedReading>;
  Genre: ResolverTypeWrapper<Genre>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  PurchasedBook: ResolverTypeWrapper<PurchasedBook>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  StoreBookReview: ResolverTypeWrapper<StoreBookReview>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  addUserInput: AddUserInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddToCard: AddToCard;
  Author: Author;
  Book: Book;
  BookReview: BookReview;
  BookStore: BookStore;
  Boolean: Scalars['Boolean'];
  CurrentlyReading: CurrentlyReading;
  DateTime: Scalars['DateTime'];
  FinishedReading: FinishedReading;
  Genre: Genre;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  PurchasedBook: PurchasedBook;
  Query: {};
  StoreBookReview: StoreBookReview;
  String: Scalars['String'];
  User: User;
  addUserInput: AddUserInput;
}>;

export type AddToCardResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AddToCard'] = ResolversParentTypes['AddToCard']> = ResolversObject<{
  bookStore?: Resolver<ResolversTypes['BookStore'], ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = ResolversObject<{
  Book?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  BookReviewedUsers?: Resolver<Array<ResolversTypes['BookReview']>, ParentType, ContextType>;
  BookStore?: Resolver<Maybe<ResolversTypes['BookStore']>, ParentType, ContextType>;
  CurrentlyReadingUsers?: Resolver<Array<ResolversTypes['CurrentlyReading']>, ParentType, ContextType>;
  FinishedReadingUsers?: Resolver<Array<ResolversTypes['FinishedReading']>, ParentType, ContextType>;
  PurchasedUsers?: Resolver<Array<ResolversTypes['PurchasedBook']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  langauge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  published?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookReviewResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BookReview'] = ResolversParentTypes['BookReview']> = ResolversObject<{
  book?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookStoreResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BookStore'] = ResolversParentTypes['BookStore']> = ResolversObject<{
  AddToCard?: Resolver<Array<ResolversTypes['AddToCard']>, ParentType, ContextType>;
  StoreBookReview?: Resolver<Array<ResolversTypes['StoreBookReview']>, ParentType, ContextType>;
  book?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  discount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  outOfStock?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrentlyReadingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CurrentlyReading'] = ResolversParentTypes['CurrentlyReading']> = ResolversObject<{
  book?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FinishedReadingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FinishedReading'] = ResolversParentTypes['FinishedReading']> = ResolversObject<{
  book?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenreResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = ResolversObject<{
  books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationAddAuthorArgs, 'userId'>>;
  addUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationAddUserArgs, 'addUserCriteria'>>;
}>;

export type PurchasedBookResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PurchasedBook'] = ResolversParentTypes['PurchasedBook']> = ResolversObject<{
  book?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryGetAuthorArgs, 'id'>>;
  getAuthors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Author']>>>, ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
}>;

export type StoreBookReviewResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StoreBookReview'] = ResolversParentTypes['StoreBookReview']> = ResolversObject<{
  bookStore?: Resolver<ResolversTypes['BookStore'], ParentType, ContextType>;
  createAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  AddToCard?: Resolver<Array<ResolversTypes['AddToCard']>, ParentType, ContextType>;
  BookReview?: Resolver<Array<ResolversTypes['BookReview']>, ParentType, ContextType>;
  CurrentlyReadingBooks?: Resolver<Array<ResolversTypes['CurrentlyReading']>, ParentType, ContextType>;
  FinishedReadingBooks?: Resolver<Array<ResolversTypes['FinishedReading']>, ParentType, ContextType>;
  PurchasedBook?: Resolver<Array<ResolversTypes['PurchasedBook']>, ParentType, ContextType>;
  StoreBookReview?: Resolver<Array<ResolversTypes['StoreBookReview']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  AddToCard?: AddToCardResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  BookReview?: BookReviewResolvers<ContextType>;
  BookStore?: BookStoreResolvers<ContextType>;
  CurrentlyReading?: CurrentlyReadingResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  FinishedReading?: FinishedReadingResolvers<ContextType>;
  Genre?: GenreResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PurchasedBook?: PurchasedBookResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StoreBookReview?: StoreBookReviewResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

