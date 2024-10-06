import { splitProps } from "solid-js"

import * as ImagePrimitive from "@kobalte/core/image"

import { cn } from "~/lib/utils"

const Avatar = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<ImagePrimitive.Root
      class={cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", local.class)}
      {...others} />)
  );
}

const AvatarImage = props => {
  const [local, others] = splitProps(props, ["class"])
  return <ImagePrimitive.Img class={cn("aspect-square size-full", local.class)} {...others} />;
}

const AvatarFallback = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<ImagePrimitive.Fallback
      class={cn(
        "flex size-full items-center justify-center rounded-full bg-muted",
        local.class
      )}
      {...others} />)
  );
}

export { Avatar, AvatarImage, AvatarFallback }
