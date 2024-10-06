import { splitProps } from "solid-js"

import { cva } from "class-variance-authority"

import { cn } from "~/lib/utils"

const calloutVariants = cva("rounded-md border-l-4 p-2 pl-4", {
  variants: {
    variant: {
      default: "border-info-foreground bg-info text-info-foreground",
      success: "border-success-foreground bg-success text-success-foreground",
      warning: "border-warning-foreground bg-warning text-warning-foreground",
      error: "border-error-foreground bg-error text-error-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

const Callout = (props) => {
  const [local, others] = splitProps(props, ["class", "variant"])
  return (
    <div
      class={cn(calloutVariants({ variant: local.variant }), local.class)}
      {...others} />
  );
}

const CalloutTitle = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <h3 class={cn("font-semibold", local.class)} {...others} />;
}

const CalloutContent = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div class={cn("mt-2", local.class)} {...others} />;
}

export { Callout, CalloutTitle, CalloutContent }
