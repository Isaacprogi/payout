import type { FormData } from './type';
import { VALIDATION_RULES } from './costants';

export const validateEmail = (email: string): boolean => {
  return VALIDATION_RULES.email.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return phone.length >= 10; // Simple validation
};

export const validateWebsite = (website: string): boolean => {
  if (!website) return true; // Optional field
  return VALIDATION_RULES.website.test(website);
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX for US numbers
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
  
  return phone;
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const sanitizeFormData = (data: FormData): FormData => {
  return {
    ...data,
    firstName: capitalizeFirstLetter(data.firstName.trim()),
    lastName: capitalizeFirstLetter(data.lastName.trim()),
    email: data.email.toLowerCase().trim(),
    phone: formatPhoneNumber(data.phone),
    companyName: data.companyName.trim(),
    website: data.website.trim(),
    additionalInfo: data.additionalInfo.trim(),
  };
};

export const calculateFormProgress = (formData: FormData): number => {
  const totalFields = 11; // Total number of required fields
  let filledFields = 0;

  // Personal Info (4 fields)
  if (formData.firstName) filledFields++;
  if (formData.lastName) filledFields++;
  if (formData.email) filledFields++;
  if (formData.phone) filledFields++;

  // Company Info (3 fields)
  if (formData.companyName) filledFields++;
  if (formData.industry) filledFields++;
  if (formData.companySize) filledFields++;

  // Payment Info (2 fields)
  if (formData.accountType) filledFields++;
  if (formData.monthlyVolume) filledFields++;

  // Additional fields
  if (formData.website) filledFields++;
  if (formData.paymentMethods.length > 0) filledFields++;

  return Math.round((filledFields / totalFields) * 100);
};

export const getStepFields = (step: number): (keyof FormData)[] => {
  switch (step) {
    case 1:
      return ['firstName', 'lastName', 'email', 'phone'];
    case 2:
      return ['companyName', 'industry', 'companySize'];
    case 3:
      return ['accountType', 'monthlyVolume'];
    default:
      return [];
  }
};

export const isStepComplete = (step: number, formData: FormData): boolean => {
  const fields = getStepFields(step);
  return fields.every(field => {
    const value = formData[field];
    return Array.isArray(value) ? value.length > 0 : Boolean(value);
  });
};