/// <reference types="@testing-library/jest-dom" />

// Vite client types: import.meta.env, import.meta.glob, import.meta.hot
interface ImportMetaEnv {
  [key: string]: string | boolean | undefined;
  BASE_URL: string;
  MODE: string;
  DEV: boolean;
  PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob<T = unknown>(pattern: string, options?: { eager?: boolean; query?: string; import?: string }): Record<string, T>;
  glob<T = unknown>(pattern: string[], options?: { eager?: boolean; query?: string; import?: string }): Record<string, T>;
}

// All *.svg imports return a React component (vite-plugin-svgr with include: '**/*.svg')
declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;
  export default ReactComponent;
}

// Image assets — Vite resolves these to URL strings
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.css';
