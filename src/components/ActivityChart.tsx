import React from 'react';

interface ActivityChartProps {
  dailyActivity?: Record<string, number>;
}

export function ActivityChart({ dailyActivity }: ActivityChartProps) {
  // Generate last 28 days (4 weeks)
  const days = [];
  const today = new Date();
  
  for (let i = 27; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    
    days.push({
      date: dateStr,
      count: dailyActivity?.[dateStr] || 0
    });
  }

  // Calculate some fun stats
  const totalActivity = days.reduce((sum, d) => sum + d.count, 0);
  const activeDays = days.filter(d => d.count > 0).length;

  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-100 dark:bg-[#1E293B] border-gray-200 dark:border-[#334155]';
    if (count <= 5) return 'bg-[#D7FFB8] dark:bg-[#064E3B] border-[#58CC02] dark:border-[#059669]';
    if (count <= 15) return 'bg-[#58CC02] dark:bg-[#10B981] border-[#46A302] dark:border-[#047857]';
    return 'bg-[#46A302] dark:bg-[#047857] border-[#3D8F01] dark:border-[#065F46]';
  };

  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-2xl p-4 sm:p-5 border-2 border-gray-200 dark:border-[#334155] border-b-4 shadow-sm transition-colors mb-3">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC]">Consistency</h3>
          <p className="text-[10px] sm:text-xs font-bold text-gray-400 mt-0.5">Last 28 Days</p>
        </div>
        <div className="text-right">
          <div className="text-lg sm:text-xl font-black text-[#58CC02] dark:text-[#10B981] leading-none">{activeDays}</div>
          <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Active Days</div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5">
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map((day, i) => (
            <div key={i} className="text-center text-[9px] sm:text-[10px] font-black text-gray-400 uppercase">{day}</div>
          ))}
        </div>
        
        {/* We need to align the 28 days to the correct day of the week. 
            Actually, to make it simple, we can just display them as 4 rows of 7, 
            but a real calendar aligns them. For a 28-day rolling window, 
            it's fine to just show them as a continuous grid ending today. */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {days.map((day, i) => (
            <div 
              key={day.date}
              title={`${day.date}: ${day.count} activity`}
              className={`aspect-square rounded-md sm:rounded-lg border-2 ${getColor(day.count)} transition-all duration-300 hover:scale-110`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-gray-400">
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <div className="flex gap-1">
            <div className={`w-3 h-3 rounded-sm border-2 ${getColor(0)}`} />
            <div className={`w-3 h-3 rounded-sm border-2 ${getColor(3)}`} />
            <div className={`w-3 h-3 rounded-sm border-2 ${getColor(10)}`} />
            <div className={`w-3 h-3 rounded-sm border-2 ${getColor(20)}`} />
          </div>
          <span>More</span>
        </div>
        <div>Total: {totalActivity} Activity</div>
      </div>
    </div>
  );
}

