import React, { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import axios from "axios";

interface Props {}

const Button = (props: Props) => {
  const loadJson = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/poswqet" //wrong url endpoint
      );
      console.log(data);
    } catch (e) {
      console.error("error messsage", e);
      Sentry.captureException(e); //send error to sentry
    }
  };
  useEffect(() => {
    loadJson();
  }, []);

  return (
    <button
      onClick={() => {
        throw new Error("This is a deliberate error");
      }}
    >
      A button that throws error
    </button>
  );
};

export default Button;
