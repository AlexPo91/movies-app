import React from 'react';

export default function RadioButton({ checked, onChange }) {
  return (
    <input
      name="lang"
      type="radio"
      checked={checked}
      onChange={onChange}
    />
  );
}
