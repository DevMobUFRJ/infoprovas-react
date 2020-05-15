import React from "react";
import "../../assets/scss/atoms/SendButton.scss";

export const SendButton = (handleSend: any) => {
  return <button className="send-button" onClick={() => handleSend}>Enviar</button>;
};
