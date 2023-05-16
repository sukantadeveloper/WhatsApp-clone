import React, { useState } from 'react';
import EmojiPicker, { Emoji } from 'emoji-picker-react';

function EmojiBox() {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiData) => {
        setChosenEmoji(emojiData);
    };
    console.log(chosenEmoji, "emoji")
    return (
        <div className="chat-box" style={{ width: "50%", margin: "auto" }}>
            <div className="chat-messages">
                {/* Chat messages go here */}
            </div>
            <div className="chat-input">
                <textarea placeholder="Type your message..." />
               <img src={chosenEmoji?.srcElement?.__reactProps$lgjp031fyj?.src} alt="" />
                <div className="emoji-picker">
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
            </div>
        </div>
    );
}

export default EmojiBox;
