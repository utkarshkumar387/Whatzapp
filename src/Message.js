import React, { forwardRef } from 'react'
import { Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {  //converted function into const to use forwardRef
    const isUser = username === message.username; //checking that username and the message typed by user is same or not

    return (
        <div ref={ref} className={`message ${isUser && `message_user`}`}>
        <Card className={isUser ? "message_userCard" : "message_guestCard"}>
            <CardContent>
                <Typography
                    variant="h5"
                    component="h2"
                >
                {!isUser &&  `${message.username || 'Unknown User'}: `} { message.message }
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
})

export default Message
