const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const {
  asyncHandler
} = require("../util/errorHandling");


const teamsSchema = new Schema({
  teamName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
    unique: true,
  },
  teamLeader: {
    type: Schema.Types.Mixed,
    ref: 'User'
  },
  parentTeam: {
    type: ObjectId,
    default: function () {
      return this._id;
    },
    ref: 'Team'
  },


});


/*
I was trying to apply populate before finding but it did not work
*/

// asyncHandler(teamsSchema.pre('find', async function (next) {
//   await this.populate('teamLeader');
//   await this.populate('parentTeam');
//   next();
// }))


// teamsSchema.pre('save',async function(next) {
//   try {
//     if (this.parentTeam && typeof this.parentTeam === 'string') {
//       const parentTeam = await Teams.findOne({ teamName: this.parentTeam });
//       if (parentTeam) {
//         this.parentTeam = parentTeam._id;
//       } else {
//         throw new Error("Parent team not found.");
//       }
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

const Teams = mongoose.model("Team", teamsSchema);
module.exports = Teams;
