import React from 'react';

export default function RadioButton({
  checked, onChange, id,
}) {
  return (
    <input
      name="lang"
      id={id}
      type="radio"
      checked={checked}
      onChange={onChange}
    />
  );
}
