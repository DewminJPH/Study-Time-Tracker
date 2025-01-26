const { response } = require('./app');
const User = require('./model');

/*const users = [{id: 1,name:'John'},{id: 2,name:'Jane'}]; */
/*const getUserById = (id, cb) => {
    const user = users.find(user => user.id == id);
    cb(user);
    };
const getUsers =(cb) => {
    cb(users);
};*/
// add user
const addUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name
    });
    user.save()
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({message:error});
        })
};

// get user
const getUsers = (req, res, next) => {
    User.find()
        .then(response =>{
            res.json({response});
        })
        .catch(error =>{
            res.json({message:error});
        })
};

// user edit

const updateUser = (req, res, next) => {
    const id =req.body.id;
    const name = req.body.name;
    User.updateOne({id:id},{$set:{name:name}})
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({message:error});
        })
    };

// user delete

const deleteUser = (req, res,next) => {
    const id = req.body.id;
    User.deleteOne({id:id})
        .then(response =>{
            res.json({response});
        })
        .catch(error =>{
            res.json({message:error});
        })
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
//exports.getUserById = getUserById;
