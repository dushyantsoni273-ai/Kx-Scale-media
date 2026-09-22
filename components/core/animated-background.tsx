"use client";

import { AnimatePresence, motion, Transition } from "framer-motion";
import { Children, cloneElement, ReactElement, useEffect, useState } from "react";
import clsx from "clsx";

export type AnimatedBackgroundProps = {
  children: ReactElement<{ "data-id": string }>[] | ReactElement<{ "data-id": string }>;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

/**
 * Wraps a set of children (tabs, nav links, buttons) and animates a shared
 * background pill/highlight between whichever one is active or hovered,
 * using Framer Motion's `layoutId` for a smooth shared-layout transition.
 * Each child needs a `data-id` prop that uniquely identifies it.
 */
export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);
    if (onValueChange) onValueChange(id);
  };

  useEffect(() => {
    if (defaultValue !== undefined) setActiveId(defaultValue);
  }, [defaultValue]);

  return (
    <>
      {Children.map(children, (child, index) => {
        const element = child as ReactElement<any>;
        const id = element.props["data-id"];

        const interactionProps = enableHover
          ? {
              onMouseEnter: () => handleSetActiveId(id),
              onMouseLeave: () => handleSetActiveId(null),
            }
          : {
              onClick: () => handleSetActiveId(id),
            };

        return cloneElement(
          element,
          {
            key: index,
            className: clsx("relative inline-flex items-center", element.props.className),
            "data-checked": id === activeId ? "true" : "false",
            ...interactionProps,
          },
          <>
            <AnimatePresence initial={false}>
              {activeId === id && (
                <motion.div
                  layoutId="animated-background"
                  className={clsx("absolute inset-0 -z-10", className)}
                  transition={transition}
                  initial={{ opacity: defaultValue ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10">{element.props.children}</span>
          </>
        );
      })}
    </>
  );
}
