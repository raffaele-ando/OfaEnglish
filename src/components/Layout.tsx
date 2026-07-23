import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7F9FB] dark:bg-[#111B21] text-[#4B4B4B] dark:text-[#E2E8F0] font-sans selection:bg-[#DDF4FF] dark:selection:bg-[#004A77] transition-colors duration-300">
      <div className="max-w-4xl mx-auto min-h-screen flex flex-col sm:my-8 sm:min-h-[calc(100vh-4rem)]">
        {children}
      </div>
    </div>
  );
}
