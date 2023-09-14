import moment from "moment/moment";
import React, { forwardRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const ChatMessage = forwardRef(({ message, sender, time }, ref) => {
  const [user] = useAuthState(auth);
  return (
    <div
      ref={ref}
      className={
        sender === user?.displayName
          ? "relative w-fit min-w-[120px] bg-blue-400 p-2 rounded-md rounded-tr-none mt-8 ml-auto "
          : "relative w-fit min-w-[120px] bg-gray-400 p-2 rounded-md rounded-tl-none mt-8 "
      }
    >
      <p className="text-xs font-semibold absolute -top-5">{sender}</p>
      <p>{message}</p>
      <p className="text-xs text-right">{moment(time).format("LT")}</p>
    </div>
  );
});

export default ChatMessage;
