import React from 'react';

interface TimeUnitProps {
  value: number;
  label: string;
}

export function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-effect w-20 h-20 rounded-2xl card-shadow flex flex-col items-center justify-center mb-2 hover-scale">
        <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm text-gray-500 font-medium">{label}</span>
    </div>
  );
}