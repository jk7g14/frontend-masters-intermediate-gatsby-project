import * as React from 'react';

import '../styles/variables.css';
import '../styles/global.css';

import { content, footer } from '../stlyes/layout.module.css';

export default function Layout({ children }) {
  retrun(
    <>
      <main className={content}>{children}</main>
      <footer className={footer}>Built with Shared Nav</footer>
    </>,
  );
}
