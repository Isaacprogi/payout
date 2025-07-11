export const INDUSTRIES = [
  { value: '', label: 'Select Industry' },
  { value: 'technology', label: 'Technology' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'finance', label: 'Finance' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'education', label: 'Education' },
  { value: 'other', label: 'Other' },
];

export const COMPANY_SIZES = [
  { value: '', label: 'Select Size' },
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '500+', label: '500+ employees' },
];

export const MONTHLY_VOLUMES = [
  { value: '', label: 'Select Volume' },
  { value: '0-1000', label: '$0 - $1,000' },
  { value: '1000-5000', label: '$1,000 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000-50000', label: '$10,000 - $50,000' },
  { value: '50000+', label: '$50,000+' },
];

export const ACCOUNT_TYPES = [
  { value: 'business', label: 'Business' },
  { value: 'personal', label: 'Personal' },
];

export const PAYMENT_METHODS = [
  'Credit Cards',
  'Bank Transfers',
  'Digital Wallets',
  'Cryptocurrency',
];

export const VALIDATION_RULES = {
  email: /\S+@\S+\.\S+/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  website: /^https?:\/\/.+/,
};