import React from 'react';
import { User, Building, CreditCard, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  icon: LucideIcon;
}

interface ProgressBarProps {
  currentStep: number;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  { id: 1, title: 'Personal Info', icon: User },
  { id: 2, title: 'Company Details', icon: Building },
  { id: 3, title: 'Payment Setup', icon: CreditCard },
  { id: 4, title: 'Review', icon: CheckCircle },
];

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  steps = defaultSteps,
}) => {
  // Determine which 2 steps to show on small screens
  const isFirstHalf = currentStep <= 2;
  const mobileSteps = isFirstHalf ? steps.slice(0, 2) : steps.slice(2, 4);

  return (
    <div className="mb-8 sticky top-0 z-10 bg-white shadow-md rounded-t-lg p-4">
      {/* Icons */}
      <div className="sm:flex justify-between items-center mb-4 hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isActive
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-1 mx-2 transition-all duration-300 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile view - only 2 steps at a time */}
      <div className="flex justify-between items-center mb-4 sm:hidden">
        {mobileSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div key={step.id} className="flex items-center w-full">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isActive
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              {index < mobileSteps.length - 1 && (
                <div
                  className={`w-12 h-1 mx-2 transition-all duration-300 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Labels */}
      <div className="hidden sm:flex justify-between text-sm text-gray-600">
        {steps.map((step) => (
          <span
            key={step.id}
            className={`${
              currentStep === step.id ? 'font-semibold text-blue-600' : ''
            }`}
          >
            {step.title}
          </span>
        ))}
      </div>

      {/* Mobile labels */}
      <div className="grid grid-cols-2 sm:hidden text-sm text-gray-600 gap-2 text-center">
        {mobileSteps.map((step) => (
          <span
            key={step.id}
            className={`${
              currentStep === step.id ? 'font-semibold text-blue-600' : ''
            }`}
          >
            {step.title}
          </span>
        ))}
      </div>
    </div>
  );
};
