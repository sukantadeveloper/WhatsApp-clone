import conversation from "../Model/ConversationModel.js";
import message from "../Model/MessageModel.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new message(req.body);
    await newMessage.save();
    var data = await conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });

    return res.status(200).send("Message send successfully");
  } catch (error) {
    return res.status(500).send(error, "error from message");
  }
};

export const getMessage = async (req, res) => {
  try {
    const data=await message.find({conversationId: req.params.id})
  
     return res.status(200).send(data);
  } catch (error) {
     return res.status(500).send(error.message)
  }
};
