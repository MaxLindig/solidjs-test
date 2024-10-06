import { splitProps } from "solid-js"

import * as MenubarPrimitive from "@kobalte/core/menubar"

import { cn } from "~/lib/utils"

const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarSub = MenubarPrimitive.Sub
const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<MenubarPrimitive.Root
      class={cn(
        "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
        local.class
      )}
      {...others} />)
  );
}

const MenubarMenu = (props) => {
  return <MenubarPrimitive.Menu gutter={8} {...props} />;
}

const MenubarTrigger = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<MenubarPrimitive.Trigger
      class={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        local.class
      )}
      {...others} />)
  );
}

const MenubarContent = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        class={cn(
          "z-50 min-w-48 origin-[var(--kb-menu-content-transform-origin)] animate-content-hide overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[expanded]:animate-content-show",
          local.class
        )}
        {...others} />
    </MenubarPrimitive.Portal>)
  );
}

const MenubarSubTrigger = props => {
  const [local, others] = splitProps(props, [
    "class",
    "children",
    "inset"
  ])
  return (
    (<MenubarPrimitive.SubTrigger
      class={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        local.inset && "pl-8",
        local.class
      )}
      {...others}>
      {local.children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="ml-auto size-4">
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </MenubarPrimitive.SubTrigger>)
  );
}

const MenubarSubContent = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<MenubarPrimitive.Portal>
      <MenubarPrimitive.SubContent
        class={cn(
          "z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in",
          local.class
        )}
        {...others} />
    </MenubarPrimitive.Portal>)
  );
}

const MenubarItem = props => {
  const [local, others] = splitProps(props, ["class", "inset"])
  return (
    (<MenubarPrimitive.Item
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        local.inset && "pl-8",
        local.class
      )}
      {...others} />)
  );
}

const MenubarCheckboxItem = props => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    (<MenubarPrimitive.CheckboxItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        local.class
      )}
      {...others}>
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
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
        </MenubarPrimitive.ItemIndicator>
      </span>
      {local.children}
    </MenubarPrimitive.CheckboxItem>)
  );
}

const MenubarRadioItem = props => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    (<MenubarPrimitive.RadioItem
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        local.class
      )}
      {...others}>
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-2 fill-current">
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
        </MenubarPrimitive.ItemIndicator>
      </span>
      {local.children}
    </MenubarPrimitive.RadioItem>)
  );
}

const MenubarItemLabel = props => {
  const [local, others] = splitProps(props, ["class", "inset"])
  return (
    (<MenubarPrimitive.ItemLabel
      class={cn("px-2 py-1.5 text-sm font-semibold", local.inset && "pl-8", local.class)}
      {...others} />)
  );
}

const MenubarGroupLabel = props => {
  const [local, others] = splitProps(props, ["class", "inset"])
  return (
    (<MenubarPrimitive.GroupLabel
      class={cn("px-2 py-1.5 text-sm font-semibold", local.inset && "pl-8", local.class)}
      {...others} />)
  );
}

const MenubarSeparator = props => {
  const [local, others] = splitProps(props, ["class"])
  return (<MenubarPrimitive.Separator class={cn("-mx-1 my-1 h-px bg-muted", local.class)} {...others} />);
}

const MenubarShortcut = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<span
      class={cn("ml-auto text-xs tracking-widest text-muted-foreground", local.class)}
      {...others} />)
  );
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarItemLabel,
  MenubarGroupLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut
}
