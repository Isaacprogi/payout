import React, { useState } from "react";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { NavigationButtons } from "./components/NavigationButtons/NavigationButtons";
import {
  PersonalInfoStep,
  CompanyDetailsStep,
  PaymentSetupStep,
  ReviewStep,
} from "./components/FormSteps/FormSteps";
import type { FormData } from "./utils/type";

const PayoutMultiForm: React.FC = () => {
  const {
    currentStep,
    formData,
    errors,
    isSubmitting,
    updateFormData,
    nextStep,
    prevStep,
    handleSubmit,
    totalSteps,
  } = useMultiStepForm();

  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fullySubmitted, setFullySubmitted] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    try {
      setShowModal(true);
      setSubmitted(false);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitted(true);
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowModal(false);
      setFullySubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Submission failed. Please try again.");
      setShowModal(false);
    }
  };

  const renderStep = () => {
    const stepProps = { formData, updateFormData, errors };

    switch (currentStep) {
      case 1:
        return <PersonalInfoStep {...stepProps} />;
      case 2:
        return <CompanyDetailsStep {...stepProps} />;
      case 3:
        return <PaymentSetupStep {...stepProps} />;
      case 4:
        return <ReviewStep {...stepProps} />;
      default:
        return null;
    }
  };

  if (fullySubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold animate-fade-in-up">
        <span className="text-black">
            Welcome to</span> <span className="text-blue-500">Payout</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome to <span className="text-blue-600">Payout</span>
          </h1>
          <p className="text-gray-600">
            Complete your registration to get started
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} />

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 transform">
          <div className="min-h-[400px]">{renderStep()}</div>

          {/* Navigation Buttons */}
          <NavigationButtons
            currentStep={currentStep}
            totalSteps={totalSteps}
            isSubmitting={isSubmitting}
            onPrevious={prevStep}
            onNext={nextStep}
            onSubmit={() => handleSubmit(handleFormSubmit)}
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fade-in">
            {!submitted ? (
              <>
                <div className="loader mb-4 mx-auto border-t-4 border-blue-500 border-solid rounded-full h-12 w-12 animate-spin"></div>
                <p className="text-lg font-medium text-gray-700">Submitting...</p>
              </>
            ) : (
              <>
                <div className="text-green-500 text-4xl mb-2 animate-bounce">✓</div>
                <p className="text-lg font-semibold text-gray-800">Form submitted successfully!</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PayoutMultiForm;
