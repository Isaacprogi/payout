import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  isSubmitting,
  onPrevious,
  onNext,
  onSubmit,
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t">
      <button
        onClick={onPrevious}
        disabled={isFirstStep}
        className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          isFirstStep
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous
      </button>

      <div className="text-sm text-gray-500">
        Step {currentStep} of {totalSteps}
      </div>

      {isLastStep ? (
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className={`flex items-center px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
            isSubmitting
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
          {!isSubmitting && <CheckCircle className="w-4 h-4 ml-2" />}
        </button>
      ) : (
        <button
          onClick={onNext}
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      )}
    </div>
  );
};