const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const ChallengeType = require('./types/challenge_type');

const actType = require('./types/act_type');
const act = mongoose.model('act');

const planType = require('./types/plan_type');
const plan = mongoose.model('plan');

const roleType = require('./types/role_type');
const role = mongoose.model('role');

const ScreamerType = require('./types/screamer_type');
const Screamer = mongoose.model('screamer');

const TalentType = require('./types/talent_type');
const Talent = mongoose.model('talent');

const Challenge = mongoose.model('challenge');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    challenges: {
      type: new GraphQLList(ChallengeType),
      resolve() {
        return Challenge.find({});
      }
    },
    challenge: {
      type: ChallengeType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Challenge.findById(id);
      }
    }

  })
});

module.exports = RootQuery;

//
// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: () => ({
//     songs: {
//       type: new GraphQLList(SongType),
//       resolve() {
//         return Song.find({});
//       }
//     },
//     song: {
//       type: SongType,
//       args: { id: { type: new GraphQLNonNull(GraphQLID) } },
//       resolve(parentValue, { id }) {
//         return Song.findById(id);
//       }
//     },
//     lyric: {
//       type: LyricType,
//       args: { id: { type: new GraphQLNonNull(GraphQLID) } },
//       resolve(parnetValue, { id }) {
//         return Lyric.findById(id);
//       }
//     }
//   })
// });
