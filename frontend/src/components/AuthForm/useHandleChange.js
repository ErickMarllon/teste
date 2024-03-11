import { useEffect, useState } from 'react';
import { initialValueFields } from './constants/constants';

export function useHandleChange(currentType) {
  const [formData, setFormData] = useState(initialValueFields.login);
  useEffect(() => {
    setFormData(initialValueFields[currentType]);
  }, [currentType]);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return { formData, handleChange };
}
