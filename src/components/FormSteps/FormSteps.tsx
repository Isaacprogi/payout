import React from 'react';
import { Mail, Phone, DollarSign } from 'lucide-react';
import type { StepProps } from '../../hooks/useMultiStepForm';
import { INDUSTRIES,COMPANY_SIZES,MONTHLY_VOLUMES,ACCOUNT_TYPES,PAYMENT_METHODS } from '../../utils/costants';

// Step 1: Personal Information
export const PersonalInfoStep: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Personal Information</h2>
      <p className="text-gray-600">Let's start with your basic details</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => updateFormData({ firstName: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
            errors.firstName ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
          } focus:outline-none`}
          placeholder="John"
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => updateFormData({ lastName: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
            errors.lastName ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
          } focus:outline-none`}
          placeholder="Doe"
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
      </div>
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <Mail className="inline w-4 h-4 mr-1" />
        Email Address
      </label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => updateFormData({ email: e.target.value })}
        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
          errors.email ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
        } focus:outline-none`}
        placeholder="john.doe@example.com"
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <Phone className="inline w-4 h-4 mr-1" />
        Phone Number
      </label>
      <input
        type="tel"
        value={formData.phone}
        onChange={(e) => updateFormData({ phone: e.target.value })}
        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
          errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
        } focus:outline-none`}
        placeholder="+1 (555) 123-4567"
      />
      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
    </div>
  </div>
);

// Step 2: Company Details
export const CompanyDetailsStep: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Company Details</h2>
      <p className="text-gray-600">Tell us about your business</p>
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
      <input
        type="text"
        value={formData.companyName}
        onChange={(e) => updateFormData({ companyName: e.target.value })}
        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
          errors.companyName ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
        } focus:outline-none`}
        placeholder="Acme Corporation"
      />
      {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
        <select
          value={formData.industry}
          onChange={(e) => updateFormData({ industry: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
            errors.industry ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
          } focus:outline-none`}
        >
          <option value="">Select Industry</option>
          {
            INDUSTRIES.map((industry) => (
              <option key={industry.value} value={industry.value}>
                {industry.label}
              </option>
            ))
          }
        </select>
        {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
        <select
          value={formData.companySize}
          onChange={(e) => updateFormData({ companySize: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
            errors.companySize ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
          } focus:outline-none`}
        >
          <option value="">Select Size</option>
          {
            COMPANY_SIZES.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))
          }
        </select>
        {errors.companySize && <p className="text-red-500 text-sm mt-1">{errors.companySize}</p>}
      </div>
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Website (Optional)</label>
      <input
        type="url"
        value={formData.website}
        onChange={(e) => updateFormData({ website: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
        placeholder="https://www.example.com"
      />
    </div>
  </div>
);

// Step 3: Payment Setup
export const PaymentSetupStep: React.FC<StepProps> = ({ formData, updateFormData, errors }) => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Setup</h2>
      <p className="text-gray-600">Configure your payment preferences</p>
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...ACCOUNT_TYPES].map((type) => (
          <label key={type.value} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="accountType"
              value={type.value.toLowerCase()}
              checked={formData.accountType === type.value.toLowerCase()}
              onChange={(e) => updateFormData({ accountType: e.target.value })}
              className="mr-3"
            />
            <span className="font-medium">{type.label}</span>
          </label>
        ))}
      </div>
      {errors.accountType && <p className="text-red-500 text-sm mt-1">{errors.accountType}</p>}
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <DollarSign className="inline w-4 h-4 mr-1" />
        Expected Monthly Volume
      </label>
      <select
        value={formData.monthlyVolume}
        onChange={(e) => updateFormData({ monthlyVolume: e.target.value })}
        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
          errors.monthlyVolume ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
        } focus:outline-none`}
      >
        <option value="">Select Volume</option>
        {
          MONTHLY_VOLUMES.map((volume) => (
            <option key={volume.value} value={volume.value}>
              {volume.label}
            </option>
          ))
        }
      </select>
      {errors.monthlyVolume && <p className="text-red-500 text-sm mt-1">{errors.monthlyVolume}</p>}
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Payment Methods (Select all that apply)</label>
      <div className="grid grid-cols-2 gap-4">
        {[...PAYMENT_METHODS].map((method) => (
          <label key={method} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              checked={formData.paymentMethods.includes(method)}
              onChange={(e) => {
                const methods = e.target.checked
                  ? [...formData.paymentMethods, method]
                  : formData.paymentMethods.filter(m => m !== method);
                updateFormData({ paymentMethods: methods });
              }}
              className="mr-3"
            />
            <span className="text-sm">{method}</span>
          </label>
        ))}
      </div>
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information (Optional)</label>
      <textarea
        value={formData.additionalInfo}
        onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
        rows={4}
        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
        placeholder="Tell us more about your payment needs..."
      />
    </div>
  </div>
);


// Step 4: Review
export const ReviewStep: React.FC<StepProps> = ({ formData }) => (
  <div className="space-y-8">
    {/* Header Section */}
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Review Your Information</h2>
      <p className="text-lg text-gray-600 max-w-md mx-auto">Please review your details carefully before submitting your application</p>
    </div>
    
    {/* Review Cards */}
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
      {/* Personal Information Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Full Name</dt>
              <dd className="text-sm text-gray-900 font-medium">{formData.firstName} {formData.lastName}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Email Address</dt>
              <dd className="text-sm text-gray-900 font-medium">{formData.email}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
              <dd className="text-sm text-gray-900 font-medium">{formData.phone}</dd>
            </div>
          </div>
        </div>
      </div>
      
      {/* Company Details Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Company Details</h3>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Company Name</dt>
              <dd className="text-sm text-gray-900 font-medium">{formData.companyName}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Industry</dt>
              <dd className="text-sm text-gray-900 font-medium">{formData.industry}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Company Size</dt>
              <dd className="text-sm text-gray-900 font-medium">{formData.companySize}</dd>
            </div>
            {formData.website && (
              <div className="space-y-1">
                <dt className="text-sm font-medium text-gray-500">Website</dt>
                <dd className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  <a href={formData.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    {formData.website}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </dd>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Payment Setup Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Payment Setup</h3>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Account Type</dt>
              <dd className="text-sm text-gray-900 font-medium">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {formData.accountType}
                </span>
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-sm font-medium text-gray-500">Monthly Volume</dt>
              <dd className="text-sm text-gray-900 font-medium">{formData.monthlyVolume}</dd>
            </div>
            <div className="space-y-1 md:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Payment Methods</dt>
              <dd className="text-sm text-gray-900 font-medium">
                <div className="flex flex-wrap gap-2 mt-1">
                  {formData.paymentMethods.map((method, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {method}
                    </span>
                  ))}
                </div>
              </dd>
            </div>
            {formData.additionalInfo && (
              <div className="space-y-1 md:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Additional Information</dt>
                <dd className="text-sm text-gray-900 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  {formData.additionalInfo}
                </dd>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);