import React, { forwardRef }from 'react'
import { Card,CardContent,Typography } from '@material-ui/core'
import './Message.css'

const Message = forwardRef((props,ref) => {
    const isUser = props.userName ===props.text.userName;
      return (
        <div>
             <Card ref={ref} className={isUser?"message_userCard":"message_guestCard"}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">

                    {!isUser && `${props.text.userName || "Unknown User"}: `}{props.text.message}
                         
                    </Typography>
                </CardContent>
             </Card>
            <h2> </h2>
            <p></p>
        </div>
    )
})

export default Message
