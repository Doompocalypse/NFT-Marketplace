import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { SALE_END_DATE } from '../../utils/price';
import { getTimeRemaining } from '../../utils/time';
import { TimeUnit } from './TimeUnit';

export function SaleTimer() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(SALE_END_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(SALE_END_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-effect rounded-2xl p-6 mb-12 card-shadow">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
          <Clock className="w-5 h-5 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Limited Time Offer!
        </h3>
      </div>
      
      <p className="text-center text-gray-600 mb-6">
        Don't miss out! All NFT prices will double after December 31, 2024
      </p>

      <div className="flex justify-center gap-6">
        <TimeUnit value={timeRemaining.days} label="Days" />
        <TimeUnit value={timeRemaining.hours} label="Hours" />
        <TimeUnit value={timeRemaining.minutes} label="Minutes" />
        <TimeUnit value={timeRemaining.seconds} label="Seconds" />
      </div>
    </div>
  );
}