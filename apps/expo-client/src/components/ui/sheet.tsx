import React from "react";
import ActionSheet, {
  ActionSheetProps,
  ActionSheetRef,
  useSheetRef,
} from "react-native-actions-sheet";
import { H3, H3Props } from "./h3";
import { P, PProps } from "./p";
import { Button, ButtonProps } from "./button";
import { GestureResponderEvent, View, ViewProps } from "react-native";
import useColors from "@/hooks/use-colors";
import { cn } from "@/lib/utils";

export type SheetProps = ActionSheetProps & {
  containerProps?: ViewProps;
};

export const Sheet = React.forwardRef<ActionSheetRef, SheetProps>(
  ({ children, containerProps: { className, ...containerProps } = {}, ...props }, ref) => {
    const colors = useColors();

    return (
      <ActionSheet
        ref={ref}
        defaultOverlayOpacity={0.7}
        containerStyle={{ backgroundColor: colors.background }}
        {...props}
      >
        <View
          className={cn("flex flex-col gap-2 bg-background rounded-t-lg p-5 py-6", className)}
          {...containerProps}
        >
          {children}
        </View>
      </ActionSheet>
    );
  },
);

Sheet.displayName = "Sheet";

export type SheetTitleProps = H3Props;

export const SheetTitle = React.forwardRef<React.ElementRef<typeof H3>, SheetTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <H3 ref={ref} className={className} {...props}>
        {children}
      </H3>
    );
  },
);

SheetTitle.displayName = "SheetTitle";

export type SheetDescriptionProps = PProps;

export const SheetDescription = React.forwardRef<React.ElementRef<typeof P>, SheetDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <P ref={ref} className={className} {...props}>
        {children}
      </P>
    );
  },
);

SheetDescription.displayName = "SheetDescription";

type SheetCloseProps = ButtonProps;

export const SheetClose = React.forwardRef<React.ElementRef<typeof Button>, SheetCloseProps>(
  ({ children, onPress, className, ...props }, ref) => {
    const sheetRef = useSheetRef();

    return (
      <Button
        ref={ref}
        variant={"ghost"}
        className={cn("min-w-32", className)}
        onPress={(e) => {
          onPress?.(e);
          sheetRef.current?.hide();
        }}
        {...props}
      >
        {children}
      </Button>
    );
  },
);

SheetClose.displayName = "SheetClose";

type SheetActionProps = ButtonProps;

export const SheetAction = React.forwardRef<React.ElementRef<typeof Button>, SheetActionProps>(
  ({ children, className, ...props }, ref) => {
    const sheetRef = useSheetRef();

    return (
      <Button
        ref={ref}
        className={cn("flex-1", className)}
        variant={"default"}
        onPress={() => sheetRef.current?.hide()}
        {...props}
      >
        {children}
      </Button>
    );
  },
);

SheetAction.displayName = "SheetAction";

export type SheetButtonProps = Omit<ButtonProps, "onPress"> & {
  onPress?: (e: GestureResponderEvent, sheetRef: ActionSheetRef) => void;
};

export const SheetButton = React.forwardRef<React.ElementRef<typeof Button>, SheetButtonProps>(
  ({ onPress, ...props }, ref) => {
    const sheetRef = useSheetRef();

    return (
      <Button
        onPress={(e) => {
          onPress?.(e, sheetRef?.current);
        }}
        ref={ref}
        {...props}
      />
    );
  },
);

SheetButton.displayName = "SheetButton";
