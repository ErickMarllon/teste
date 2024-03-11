import { useState } from 'react';
import { initialValueFields } from './constants/constants';

export function useHandleChange() {
  const [formData, setFormData] = useState(initialValueFields);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return { formData, setFormData, handleChange };
}
