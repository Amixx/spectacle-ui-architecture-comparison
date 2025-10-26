import { useTextField } from "react-aria";
import { useRef } from "react";
import * as styles from "./Input.css";

export function Input({
  label,
  value,
  onChange,
  placeholder,
  isDisabled,
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isDisabled?: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps } = useTextField(
    { label, value, onChange, isDisabled },
    ref
  );

  return (
    <div className={styles.container}>
      {label && (
        <label {...labelProps} className={styles.label}>
          {label}
        </label>
      )}
      <input {...inputProps} ref={ref} placeholder={placeholder} className={styles.input} />
    </div>
  );
}
