import { useState } from 'react';

export interface FormData {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Company Info
  companyName: string;
  industry: string;
  companySize: string;
  website: string;
  
  // Payment Info
  accountType: string;
  monthlyVolume: string;
  paymentMethods: string[];
  
  // Additional Details
  additionalInfo: string;
}

export interface StepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  errors: Record<string, string>;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyName: '',
  industry: '',
  companySize: '',
  website: '',
  accountType: '',
  monthlyVolume: '',
  paymentMethods: [],
  additionalInfo: '',
};

export const useMultiStepForm = (totalSteps: number = 4) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    // Clear errors for updated fields
    const clearedErrors = { ...errors };
    Object.keys(data).forEach(key => {
      delete clearedErrors[key];
    });
    setErrors(clearedErrors);
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    } else if (step === 2) {
      if (!formData.companyName) newErrors.companyName = 'Company name is required';
      if (!formData.industry) newErrors.industry = 'Industry is required';
      if (!formData.companySize) newErrors.companySize = 'Company size is required';
    } else if (step === 3) {
      if (!formData.accountType) newErrors.accountType = 'Account type is required';
      if (!formData.monthlyVolume) newErrors.monthlyVolume = 'Monthly volume is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const handleSubmit = async (onSubmit?: (data: FormData) => Promise<void>) => {
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    currentStep,
    formData,
    errors,
    isSubmitting,
    updateFormData,
    nextStep,
    prevStep,
    goToStep,
    handleSubmit,
    resetForm,
    validateStep,
    totalSteps,
  };
};