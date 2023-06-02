'use client';
import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';

import { useEffect, useState } from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  //No queremos renderizar un modal si estamos en server side rendering

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
