/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

const DepartmentsList = {
  departments: [
    {teamName: 'Jacksonville Jaguars', name: 'T-Shirts', count: 1300, image: '/productImages/_2125000/ff_2125769_xl.jpg'},
    {teamName: 'Jacksonville Jaguars', name: 'Jerseys', count: 1400, image: '/productImages/_2125000/ff_2125769_xl.jpg'},
    {teamName: 'Jacksonville Jaguars', name: 'Jackets', count: 1500, image: '/productImages/_2125000/ff_2125769_xl.jpg'},
    {teamName: 'Jacksonville Jaguars', name: 'Hats', count: 1600, image: '/productImages/_2125000/ff_2125769_xl.jpg'},
    {teamName: 'Jacksonville Jaguars', name: 'Accessories', count: 1700, image: '/productImages/_2125000/ff_2125769_xl.jpg'}
  ]
}

var DepartmentType = new GraphQLObjectType({
  name: 'Department',
  fields: () => ({
    name: {type: GraphQLString},
    teamName: {type: GraphQLString},
    image: {type: GraphQLString},
    count: {type: GraphQLInt},
  }),
});

var TLPType = new GraphQLObjectType({
  name: 'TLP',
  fields: () => ({
    departments: {type: new GraphQLList(DepartmentType)},
  }),
});

let Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    tlp: {
        type: TLPType,
        resolve: () => DepartmentsList,
      },
    }),
});

export var Schema = new GraphQLSchema({
  query: Query,
});
