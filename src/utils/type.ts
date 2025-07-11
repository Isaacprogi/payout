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

export interface ValidationError {
  field: string;
  message: string;
}

export interface FormStep {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType<StepProps>;
  validation?: (data: FormData) => ValidationError[];
}

export interface FormConfig {
  steps: FormStep[];
  onSubmit?: (data: FormData) => Promise<void>;
  onStepChange?: (step: number) => void;
  validateOnChange?: boolean;
  autoSave?: boolean;
}

export interface UseMultiStepFormReturn {
  currentStep: number;
  formData: FormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  handleSubmit: (onSubmit?: (data: FormData) => Promise<void>) => Promise<void>;
  resetForm: () => void;
  validateStep: (step: number) => boolean;
  totalSteps: number;
  progress: number;
  isStepValid: (step: number) => boolean;
}