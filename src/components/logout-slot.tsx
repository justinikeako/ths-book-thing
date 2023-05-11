"use client";

import { useTransition } from "react";
import { logout } from "@/actions/logout";
import { Slot } from "@radix-ui/react-slot";

function LogoutSlot(props: React.PropsWithChildren) {
  const [isPending, startTransition] = useTransition();

  return (
    <Slot onClick={() => startTransition(() => logout())}>
      {props.children}
    </Slot>
  );
}

export { LogoutSlot };
