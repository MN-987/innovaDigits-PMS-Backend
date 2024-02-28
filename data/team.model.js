const mongoose =require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const teamsSchema = new Schema({
  teamName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
    unique: true,
  },
  teamLeader: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  parentTeam: {
    type: Schema.Types.Mixed,
    default:function(){
      return this._id;
    },
    ref: 'Team'
  },
});

teamsSchema.pre('save',async function(next) {
  try {
    if (this.parentTeam && typeof this.parentTeam === 'string') {
      const parentTeam = await Teams.findOne({ teamName: this.parentTeam });
      if (parentTeam) {
        this.parentTeam = parentTeam._id;
      } else {
        throw new Error("Parent team not found.");
      }
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Teams = mongoose.model("Team", teamsSchema);
module.exports=Teams;
