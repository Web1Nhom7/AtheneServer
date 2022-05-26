// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const LearnerSchema = new Schema({
//     LearnerInfo: {
//         Name: {
//             type: String,
//             require: true
//         },
//         Ava: { type: String, require: true },
//         Direct: {
//             type: String,
//             require: true
//         },

//         Gender: {
//             type: String,
//             require: true
//         },
//         DOB: {
//             type: Date,
//             required: true
//         },
//         CCCD: {
//             type: Number,
//             required: true
//         },
//         PhoneNumbe: {
//             type: Number,
//             required: true
//         }
//     },
//     TutorFinding: {
//         Level: {
//             type: String,
//             require: true
//         },
//         TutorGender: { type: String, require: true },
//         class: {
//             type: String,
//                 require: true
//         },
//         Subject: {
//             type: String,
//             require: true
//         },
//         Location: {
//             type: String,
//             require: true
//         },
//         Education: {
//             type: String,
//             require: true
//         },
//         TeachingTime: {
//             type: String,
//             require: true
//         },
//         Schedule: {
//             type: String,
//             require: true
//         },
//         Request: {
//             type: String,
//             require: true
//         },
//         Fee: {
//             type: String,
//             require: true
//         },
//         Other: {
//             type: String,
//             require: true
//         }
//     },
//     LearnerManage: {
//         UserID: { type: String, required: true },
//         CreatedAt: { type: Date, default: Date.now },
//         TotalClass: { type: String, required: true },
//         ClassID: { type: String, required: true }
//     },
//     createAt: { type: Date, default: Date.now },
//     updateAt: { type: Date, default: Date.now },
// })
// module.exports = mongoose.model("Learner", LearnerSchema)