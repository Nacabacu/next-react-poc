import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Template } from './template';

const rootNode = document.getElementById('root');
if (rootNode) {
  hydrateRoot(rootNode,
    <Template />
  );
} else {
  console.error('cannot create root');
}
