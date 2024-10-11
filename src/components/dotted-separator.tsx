import { cn } from "@/lib/utils"

type DottedSeparatorProps = {
  className?: string
  color?: string
  height?: string
  dotSize?: string
  gapSize?: string
  direction?: "horizontal" | "vertical"
}
export function DottedSeparator({
  className,
  color = "#d4d4d8",
  height = "2px",
  dotSize = "4",
  gapSize = "6",
  direction = "horizontal",
}: DottedSeparatorProps) {
  const isHorizontal = direction === "horizontal"
  return (
    <div
      className={
        (cn(
          isHorizontal
            ? "w-full flex items-center"
            : "h-full flex flex-col items-center"
        ),
        className)
      }
    >
      <div
        className={isHorizontal ? "flex-grow" : "flex-grow-0"}
        style={{
          backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
          height: isHorizontal ? height : "100%",
          width: isHorizontal ? "100%" : height,
          backgroundSize: isHorizontal
            ? `${Number(dotSize) + Number(gapSize)}px ${height}`
            : `${height} ${Number(dotSize) + Number(gapSize)}px`,
          backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
          backgroundPosition: "center",
        }}
      />
    </div>
  )
}
