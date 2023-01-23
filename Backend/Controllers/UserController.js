import User from "../Model/UserModel.js";


export const addUser = async (req, res) => {
    try {
        let exist = await User.findOne({ sub: req.body.sub });

        if(exist) {
           return res.status(200).send('user already exists');
           
        }

        const newUser =   await User.create(req.body);
       // await newUser.save();
        res.status(200).send(newUser);
     

    } catch (error) {
        res.status(500).send(error);
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}