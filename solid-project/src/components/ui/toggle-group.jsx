import { createContext, splitProps, useContext } from "solid-js"

import * as ToggleGroupPrimitive from "@kobalte/core/toggle-group"

import { cn } from "~/lib/utils"
import { toggleVariants } from "~/components/ui/toggle"

const ToggleGroupContext = createContext({
  size: "default",
  variant: "default"
})

const ToggleGroup = props => {
  const [local, others] = splitProps(props, [
    "class",
    "children",
    "size",
    "variant"
  ])

  return (
    (<ToggleGroupPrimitive.Root
      class={cn("flex items-center justify-center gap-1", local.class)}
      {...others}>
      <ToggleGroupContext.Provider
        value={{
          get size() {
            return local.size
          },
          get variant() {
            return local.variant
          }
        }}>
        {local.children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>)
  );
}

const ToggleGroupItem = props => {
  const [local, others] = splitProps(props, ["class", "size", "variant"])
  const context = useContext(ToggleGroupContext)
  return (
    (<ToggleGroupPrimitive.Item
      class={cn(toggleVariants({
        size: context.size || local.size,
        variant: context.variant || local.variant
      }), "hover:bg-muted hover:text-muted-foreground data-[pressed]:bg-accent data-[pressed]:text-accent-foreground", local.class)}
      {...others} />)
  );
}

export { ToggleGroup, ToggleGroupItem }
