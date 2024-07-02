import React from "react";
import { hydrateRoot } from "react-dom/client";
import { CreativeTemplate } from "./App";

const rootNode = document.getElementById("root");
if (rootNode) {
  hydrateRoot(rootNode, <CreativeTemplate />, {
    onUncaughtError: (error, errorInfo) => {
      console.error("Uncaught error", error, errorInfo.componentStack);
    },
  });
} else {
  console.error("cannot create root: No root id element");
}
