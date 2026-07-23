import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, Cell, XAxis } from 'recharts';

interface ActivityChartProps {
  dailyActivity?: Record<string, number>;
}

export function ActivityChart({ dailyActivity }: ActivityChartProps) {
  const data = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const shortDay = d.toLocaleDateString('it-IT', { weekday: 'short' }).charAt(0).toUpperCase();
    
    data.push({
      name: shortDay,
      date: dateStr,
      count: dailyActivity?.[dateStr] || 0
    });
  }

  const maxCount = Math.max(...data.map(d => d.count), 10); // Minimum 10 to keep bar sizes reasonable when low

  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 border-2 border-gray-200 dark:border-[#334155] border-b-4 shadow-sm transition-colors mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-black text-[#4B4B4B] dark:text-[#F8FAFC]">Attività (Ultimi 7 giorni)</h3>
        <div className="text-xs font-bold text-gray-400">Progresso</div>
      </div>
      
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <Tooltip
              cursor={{ fill: 'rgba(0,0,0,0.05)' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#4B4B4B] text-white text-xs font-bold py-1 px-3 rounded-lg shadow-lg">
                      {payload[0].payload.count} completati
                    </div>
                  );
                }
                return null;
              }}
            />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fontWeight: 'bold', fill: '#9CA3AF' }}
              dy={10}
            />
            <Bar dataKey="count" radius={[4, 4, 4, 4]} maxBarSize={40}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.count > 0 ? '#58CC02' : '#E5E7EB'} 
                  className="transition-all duration-300 dark:opacity-90"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
