import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Slider } from './ui/slider';
import { X, Lightbulb } from 'lucide-react';

const CommutativeMultiplication = () => {
  const [number1, setNumber1] = useState(3);
  const [number2, setNumber2] = useState(4);

  return (
    <div className="w-full max-w-md mx-auto mt-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] bg-white rounded-lg overflow-hidden">
      <div className="p-3 space-y-3">
        <div className="space-y-2">
          <div className="flex flex-col space-y-1">
            <label htmlFor="number1-slider" className="block text-sm font-medium text-[#5750E3] opacity-100">
              Adjust first number:
            </label>
            <Slider
              id="number1-slider"
              min={0}
              max={10}
              step={1}
              value={[number1]}
              onValueChange={(value) => setNumber1(value[0])}
              className="w-full"
            />
          </div>
          
          <div className="flex flex-col space-y-1">
            <label htmlFor="number2-slider" className="block text-sm font-medium text-[#5750E3] opacity-100">
              Adjust second number:
            </label>
            <Slider
              id="number2-slider"
              min={0}
              max={10}
              step={1}
              value={[number2]}
              onValueChange={(value) => setNumber2(value[0])}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 rounded-b-lg">
        <div className="w-full p-4 bg-white border border-green-200 rounded-md">
          <div className="text-center space-y-4">
            <p className="text-4xl font-bold text-[#008545]">
              {number1} × {number2} = {number1 * number2}
            </p>
            <p className="text-4xl font-bold text-[#008545]">
              {number2} × {number1} = {number2 * number1}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommutativeMultiplication;