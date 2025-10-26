import { useTextField } from 'react-aria';
import { useRef } from 'react';

export function Input({ 
  value, 
  onChange, 
  label, 
  className, 
  inputClassName, 
  labelClassName,
  placeholder,
  isDisabled 
}: {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  placeholder?: string;
  isDisabled?: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps } = useTextField(
    { 
      value, 
      onChange, 
      label,
      placeholder,
      isDisabled 
    }, 
    ref
  );

  return (
    <div className={className}>
      {label && <label {...labelProps} className={labelClassName}>{label}</label>}
      <input {...inputProps} ref={ref} className={inputClassName} disabled={isDisabled} />
    </div>
  );
}
