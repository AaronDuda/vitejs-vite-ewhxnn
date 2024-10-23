import React from "react";

export type Task = {
    title: string,
    description: string,
    deadline: string,
    priority: string,
    isComplete: boolean,
    actions: React.JSX.Element
  };