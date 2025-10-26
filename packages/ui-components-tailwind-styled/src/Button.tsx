import { useButton } from "react-aria";
import { useRef } from "react";

export function Button({
  children,
  onPress,
  isDisabled,
}: {
  children: React.ReactNode;
  onPress?: () => void;
  isDisabled?: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton({ onPress, isDisabled }, ref);

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPressStart: _,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPressEnd: _1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPressChange: _2,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPressUp: _3,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPress: _4,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    preventFocusOnPress: _5,
    ...domProps
  } = buttonProps as typeof buttonProps & {
    onPressStart?: unknown;
    onPressEnd?: unknown;
    onPressChange?: unknown;
    onPressUp?: unknown;
    onPress?: unknown;
    preventFocusOnPress?: unknown;
  };

  return (
    <button
      {...domProps}
      ref={ref}
      className="font-sans text-base py-sm px-lg bg-primary text-white border-none rounded cursor-pointer transition-colors duration-DEFAULT hover:bg-primary-hover disabled:bg-disabled disabled:cursor-not-allowed"
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
