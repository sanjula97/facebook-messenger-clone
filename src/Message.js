import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

function Message({ message, userName }) {
  const isUser = userName === message.userName;

  return (
    <Card className={`message__card ${} &&`}>
      <CardContent>
        <Typography color="white" variant="h5" component="h2">
          {message.userName}:{message.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
