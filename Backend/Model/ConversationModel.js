import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }},
    {
        timestamps: true,
        versionKey: false
    }
);

const conversation = mongoose.model('Conversation', ConversationSchema);

export default conversation;