import { splitProps } from "solid-js"

import * as CheckboxPrimitive from "@kobalte/core/checkbox"

import { cn } from "~/lib/utils"

const Checkbox = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<CheckboxPrimitive.Root class={cn("items-top group flex space-x-2", local.class)} {...others}>
      <CheckboxPrimitive.Input class="peer" />
      <CheckboxPrimitive.Control
        class="size-4 shrink-0 rounded-sm border border-primary ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 data-[checked]:border-none data-[checked]:bg-primary data-[checked]:text-primary-foreground">
        <CheckboxPrimitive.Indicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4">
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
    </CheckboxPrimitive.Root>)
  );
}

export { Checkbox }
