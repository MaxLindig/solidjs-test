import { splitProps } from "solid-js"

import * as TextFieldPrimitive from "@kobalte/core/text-field"
import { cva } from "class-variance-authority"

import { cn } from "~/lib/utils"

const TextField = TextFieldPrimitive.Root

const TextFieldInput = props => {
  const [local, others] = splitProps(props, ["type", "class"])
  return (
    (<TextFieldPrimitive.Input
      type={local.type}
      class={cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      {...others} />)
  );
}

const TextFieldTextArea = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<TextFieldPrimitive.TextArea
      class={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      {...others} />)
  );
}

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        label: "data-[invalid]:text-destructive",
        description: "text-destructive",
        error: "font-normal text-muted-foreground"
      }
    },
    defaultVariants: {
      variant: "label"
    }
  }
)

const TextFieldLabel = props => {
  const [local, others] = splitProps(props, ["class"])
  return <TextFieldPrimitive.Label class={cn(labelVariants(), local.class)} {...others} />;
}

const TextFieldDescription = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<TextFieldPrimitive.Description
      class={cn(labelVariants({ variant: "description" }), local.class)}
      {...others} />)
  );
}

const TextFieldErrorMessage = props => {
  const [local, others] = splitProps(props, ["class"])
  return (<TextFieldPrimitive.ErrorMessage class={cn(labelVariants({ variant: "error" }), local.class)} {...others} />);
}

export {
  TextField,
  TextFieldInput,
  TextFieldTextArea,
  TextFieldLabel,
  TextFieldDescription,
  TextFieldErrorMessage
}
