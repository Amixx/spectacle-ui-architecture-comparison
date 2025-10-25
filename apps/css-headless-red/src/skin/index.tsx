import {
  Button as BaseButton,
  Input as BaseInput,
  Select as BaseSelect,
} from "ui-components";
import buttonStyles from "./Button.module.css";
import inputStyles from "./Input.module.css";
import selectStyles from "./Select.module.css";

export function Button(props: React.ComponentProps<typeof BaseButton>) {
  return <BaseButton {...props} className={buttonStyles.button} />;
}

export function Input(props: React.ComponentProps<typeof BaseInput>) {
  return (
    <BaseInput
      {...props}
      className={inputStyles.container}
      inputClassName={inputStyles.input}
      labelClassName={inputStyles.label}
    />
  );
}

export function Select<T extends object>(
  props: React.ComponentProps<typeof BaseSelect<T>>
) {
  return (
    <BaseSelect
      {...props}
      className={selectStyles.container}
      buttonClassName={selectStyles.button}
      listBoxClassName={selectStyles.listBox}
      optionClassName={selectStyles.option}
    />
  );
}
