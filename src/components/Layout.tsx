import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-[100dvh] w-full bg-[#F7F9FB] dark:bg-[#111B21] text-[#4B4B4B] dark:text-[#E2E8F0] font-sans selection:bg-[#DDF4FF] dark:selection:bg-[#004A77] transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto h-full flex flex-col sm:p-4">
        {children}
      </div>
    </div>
  );
}
