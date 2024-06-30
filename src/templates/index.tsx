import React from 'react';
import { createRoot } from 'react-dom/client';
import { Template } from './template';

const rootNode = document.getElementById('root');
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(
    <Template />
  );
} else {
  console.error('cannot create root');
}
