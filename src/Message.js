import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

function Message({ message, userName }) {
  const isUser = userName === message.userName;
  return (
    <div className={`message__card ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.userName}:{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
