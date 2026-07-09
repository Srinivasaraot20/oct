'use client';

import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button 
      onClick={() => window.print()}
      className="flex items-center gap-2 hover:text-white transition-colors print:hidden"
    >
      <Printer className="w-4 h-4" /> Print Document
    </button>
  );
}
