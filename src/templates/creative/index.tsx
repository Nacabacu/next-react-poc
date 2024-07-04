import React from "react";
import { hydrateRoot } from "react-dom/client";
import { CreativeTemplate } from "./App";

const defaultBusiness = window.__INITIAL_DATA__.business;

const rootNode = document.getElementById("root");
if (rootNode) {
  hydrateRoot(rootNode, <CreativeTemplate businessData={defaultBusiness} />, {
    onUncaughtError: (error, errorInfo) => {
      console.error("Uncaught error", error, errorInfo.componentStack);
    },
  });
} else {
  console.error("cannot create root: No root id element");
}
