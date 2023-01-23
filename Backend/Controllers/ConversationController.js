import Conversation from "../Model/ConversationModel.js";

export const newConversation = async (req, response) => {
    let senderId = req.body.senderId;
    let receiverId = req.body.receiverId;

    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
    if(exist) {
        response.status(200).send('conversation already exists');
        return;
    }
    const newConversation = new Conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        response.status(200).send(savedConversation);
    } catch (error) {
        response.status(500).send(error);
    }

}

export const getConversation = async (req, response) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [ req.body.senderId, req.body.receiverId] }});
        response.status(200).send(conversation);
    } catch (error) {
        response.status(500).send(error);
    }

}