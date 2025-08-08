import React from 'react';

interface DialogProps {
  isOpen: boolean;
  title ?: string;
  content ?: React.ReactNode | React.ReactElement;
  footer ?: React.ReactNode | React.ReactElement;
  children ?: React.ReactNode;
}

export default function DialogComponent({ isOpen, title, content, footer, children }: DialogProps) {
  console.log("isOpen", isOpen, title, content, footer, children);
  
  return (
    <div>
      
    </div>
  )
}

