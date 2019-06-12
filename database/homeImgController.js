const Home = require('./index.js');



exports.getLastId = (callback) => {
    Home.findOne().sort({id: -1}).exec((err, document) => { callback(err, document.id) });
  };

// exports.getUserByName = function (name, callback) {
//     // use the findOne method;
//       User.findOne({'name':name}, function (err, result) {
//         if (err) {
//           console.log(err);
//         } else {
//           callback(result);
//         }
//       });
//     };
//update by id;
// exports.updateHomeById = function(id,new)
//     exports.updateEmailByName = function (name, newEmail, callback) {
//       // use findOneAndUpdate method, but the default is to return the original one, if you want to return the updated one, should set up option new as true
//       User.findOneAndUpdate({name: name}, {$set: {email: newEmail}}, {new: true}, function (err, result) {
//         if (err) {
//           console.log(err);
//         } else {
//           callback(result);
//         }
//       });
//     };
exports.deleteHomeById = function(id, callback) {
    Home.deleteOne({id}, callback);

}

    
//     // Read all users from the database at once
//     exports.readAllUsers = function (callback) {
//       // use find method and the first arg should be empty object
//       User.find({}, function (err, users) {
//         if(err) {
//           console.log(err);
//         }
//           callback(users);
//       });
//     };