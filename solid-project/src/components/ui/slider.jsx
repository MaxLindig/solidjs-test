import { splitProps } from "solid-js"

import * as SliderPrimitive from "@kobalte/core/slider"

import { cn } from "~/lib/utils"
import { Label } from "~/components/ui/label"

const Slider = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<SliderPrimitive.Root
      class={cn(
        "relative flex w-full touch-none select-none flex-col items-center",
        local.class
      )}
      {...others} />)
  );
}

const SliderTrack = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<SliderPrimitive.Track
      class={cn("relative h-2 w-full grow rounded-full bg-secondary", local.class)}
      {...others} />)
  );
}

const SliderFill = props => {
  const [local, others] = splitProps(props, ["class"])
  return (
    (<SliderPrimitive.Fill
      class={cn("absolute h-full rounded-full bg-primary", local.class)}
      {...others} />)
  );
}

const SliderThumb = props => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    (<SliderPrimitive.Thumb
      class={cn(
        "top-[-6px] block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        local.class
      )}
      {...others}>
      <SliderPrimitive.Input />
    </SliderPrimitive.Thumb>)
  );
}

const SliderLabel = props => {
  return <SliderPrimitive.Label as={Label} {...props} />;
}

const SliderValueLabel = props => {
  return <SliderPrimitive.ValueLabel as={Label} {...props} />;
}

export { Slider, SliderTrack, SliderFill, SliderThumb, SliderLabel, SliderValueLabel }
