import { splitProps } from "solid-js"

import * as NumberFieldPrimitive from "@kobalte/core/number-field"

import { cn } from "~/lib/utils"

const NumberField = NumberFieldPrimitive.Root

const NumberFieldGroup = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<div
      class={cn(
        "relative rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        local.class
      )}
      {...others} />)
  );
}

const NumberFieldLabel = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<NumberFieldPrimitive.Label
      class={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        local.class
      )}
      {...others} />)
  );
}

const NumberFieldInput = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<NumberFieldPrimitive.Input
      class={cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-error-foreground data-[invalid]:text-error-foreground",
        local.class
      )}
      {...others} />)
  );
}

const NumberFieldIncrementTrigger = props => {
  const [local, others] = splitProps(props, [
    "class",
    "children"
  ])
  return (
    (<NumberFieldPrimitive.IncrementTrigger
      class={cn(
        "absolute right-1 top-1 inline-flex size-4 items-center justify-center",
        local.class
      )}
      {...others}>
      {local.children ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4">
          <path d="M6 15l6 -6l6 6" />
        </svg>
      )}
    </NumberFieldPrimitive.IncrementTrigger>)
  );
}

const NumberFieldDecrementTrigger = props => {
  const [local, others] = splitProps(props, [
    "class",
    "children"
  ])
  return (
    (<NumberFieldPrimitive.DecrementTrigger
      class={cn(
        "absolute bottom-1 right-1 inline-flex size-4 items-center justify-center",
        local.class
      )}
      {...others}>
      {local.children ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4">
          <path d="M6 9l6 6l6 -6" />
        </svg>
      )}
    </NumberFieldPrimitive.DecrementTrigger>)
  );
}

const NumberFieldDescription = props => {
  const [local, others] = splitProps(props, ["class"])
  return (<NumberFieldPrimitive.Description class={cn("text-sm text-muted-foreground", local.class)} {...others} />);
}

const NumberFieldErrorMessage = props => {
  const [local, others] = splitProps(props, ["class"])
  return (<NumberFieldPrimitive.ErrorMessage class={cn("text-sm text-error-foreground", local.class)} {...others} />);
}

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldLabel,
  NumberFieldInput,
  NumberFieldIncrementTrigger,
  NumberFieldDecrementTrigger,
  NumberFieldDescription,
  NumberFieldErrorMessage
}
