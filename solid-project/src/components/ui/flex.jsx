import { mergeProps, splitProps } from "solid-js"

import { cn } from "~/lib/utils"

const Flex = (rawProps) => {
  const props = mergeProps({
    flexDirection: "row",
    justifyContent: "between",
    alignItems: "center"
  }, rawProps)
  const [local, others] = splitProps(props, [
    "flexDirection",
    "justifyContent",
    "alignItems",
    "class"
  ])

  return (
    (<div
      class={cn(
        "flex w-full",
        flexDirectionClassNames[local.flexDirection],
        justifyContentClassNames[local.justifyContent],
        alignItemsClassNames[local.alignItems],
        local.class
      )}
      {...others} />)
  );
}

export { Flex }

const justifyContentClassNames = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
}

const alignItemsClassNames = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch"
}

const flexDirectionClassNames = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse"
}
