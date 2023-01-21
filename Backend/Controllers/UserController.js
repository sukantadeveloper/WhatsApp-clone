import User from "../Model/UserModel.js";


export const addUser = async (request, response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub });

        if(exist) {
           return response.status(200).send('user already exists');
           
        }

        const newUser =   await User.create(request.body);
       // await newUser.save();
        response.status(200).send(newUser);
        console.log("done")

    } catch (error) {
        response.status(500).send(error);
    }
}

export const getUser = async (request, response) => {
    try {
        const user = await User.find({});
        response.status(200).send(user);
    } catch (error) {
        response.status(500).send(error);
    }
}