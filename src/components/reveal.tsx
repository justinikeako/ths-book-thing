"use client";

import {
  motion,
  useInView,
  Transition,
  MotionProps,
  HTMLMotionProps,
} from "framer-motion";
import { Slot, SlotProps } from "@radix-ui/react-slot";
import { RefAttributes } from "react";
import { useRef } from "react";

type MotionSlotProps<Props extends unknown> = Omit<
  SlotProps & MotionProps & RefAttributes<HTMLElement>,
  "ref"
> &
  Props;

type ViewportRevealProps = MotionSlotProps<{
  asChild?: boolean;
}>;

const slowTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const MotionSlot = motion(Slot);

function ViewportReveal({ asChild, ...props }: ViewportRevealProps) {
  const Comp = asChild ? MotionSlot : motion.div;
  const slowTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
  };

  const sectionRef = useRef<HTMLElement>(null);
  const sectionIsInView = useInView(sectionRef, {
    once: true,
    margin: "0px 150px -150px 0px",
  });

  return (
    <Comp
      {...props}
      ref={sectionRef}
      initial={{ y: 100, opacity: 0 }}
      animate={sectionIsInView && { y: 0, opacity: 1 }}
      transition={slowTransition}
    />
  );
}

type OrchestratedRevealProps = MotionSlotProps<{
  asChild?: boolean;
  delay?: number;
}>;

function OrchestratedReveal({
  delay = 0,
  asChild,
  ...props
}: OrchestratedRevealProps) {
  const Comp = asChild ? MotionSlot : motion.div;

  const slowTransition: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    delay: delay,
  };

  return (
    <Comp
      {...props}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={slowTransition}
    >
      {props.children}
    </Comp>
  );
}

export { ViewportReveal, OrchestratedReveal };
