import {
  Button as BaseButton,
  Input as BaseInput,
  Select as BaseSelect,
} from "ui-components-headless";

export function Button(props: React.ComponentProps<typeof BaseButton>) {
  return (
    <BaseButton
      {...props}
      className="font-sans text-base py-sm px-lg bg-primary text-white border-none rounded cursor-pointer transition-colors duration-DEFAULT hover:bg-primary-hover disabled:bg-disabled disabled:cursor-not-allowed"
    />
  );
}

export function Input(props: React.ComponentProps<typeof BaseInput>) {
  return (
    <BaseInput
      {...props}
      className="flex flex-col gap-xs"
      inputClassName="font-sans text-base py-sm px-md border border-border rounded bg-bg text-text transition-colors duration-DEFAULT focus:outline-none focus:border-border-focus disabled:bg-bg-hover disabled:text-disabled disabled:cursor-not-allowed"
      labelClassName="font-sans text-sm text-text-secondary font-medium"
    />
  );
}

export function Select<T extends object>(
  props: React.ComponentProps<typeof BaseSelect<T>>
) {
  return (
    <BaseSelect
      {...props}
      className="relative flex flex-col gap-xs"
      labelClassName="font-sans text-sm text-text-secondary font-medium"
      buttonClassName="font-sans text-base py-sm px-md border border-border rounded bg-bg text-text cursor-pointer flex justify-between items-center gap-sm transition-colors duration-DEFAULT text-left hover:bg-bg-hover focus:outline-none focus:border-border-focus"
      listBoxClassName="absolute top-full left-0 right-0 mt-xs p-xs bg-bg border border-border rounded list-none z-10 shadow-md max-h-[200px] overflow-y-auto"
      optionClassName="font-sans text-base p-sm cursor-pointer rounded-sm text-text hover:bg-bg-hover"
    />
  );
}
