import { useRef, useEffect } from 'react';
import Nav from '@components/menu/Navigation';
import { motion } from 'framer-motion';

export default function Header({ title }) {
  return (
    <>
      <h1 style={{ backgroundColor: 'cyan' }} className="title">
        {title}
      </h1>

      <Nav isOpen={false} />
    </>
  );
}
