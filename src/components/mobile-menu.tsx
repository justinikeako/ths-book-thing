"use client";

import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import Link, { LinkProps } from "next/link";
import { Menu } from "lucide-react";
import { AnchorHTMLAttributes, RefAttributes, useState } from "react";
import { Logo } from "./logo";
import { X } from "lucide-react";
import { LogoutSlot } from "./logout-slot";

const content: Variants = {
  hide: {
    opacity: 0,
    transition: {
      type: "spring",
      mass: 1,
      damping: 30,
      stiffness: 300,
    },
  },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      mass: 1,
      damping: 30,
      stiffness: 300,
    },
  },
};

const list: Variants = {
  hide: {},
  show: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hide: {
    opacity: 0,
    x: -100,
    transition: {
      type: "spring",
      mass: 1,
      damping: 30,
      stiffness: 300,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 1,
      stiffness: 100,
      damping: 20,
    },
  },
};

type NavLinkProps = Omit<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps &
    RefAttributes<HTMLElement> &
    MotionProps,
  "ref"
>;

const variants = {
  content,
  list,
  item,
};

const MotionLink = motion(Link);

function NavLink(props: NavLinkProps) {
  return (
    <li>
      <MotionLink {...props} className="block" variants={variants.item} />
    </li>
  );
}

export function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Dialog.Root open={menuOpen} modal onOpenChange={setMenuOpen}>
      <AnimatePresence>
        {menuOpen && (
          <Dialog.DialogPortal forceMount>
            <Dialog.Overlay />
            <Dialog.DialogContent forceMount asChild>
              <motion.div
                variants={variants.content}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 flex flex-col bg-gray-950 text-white"
              >
                <div className="flex items-center justify-between px-8 py-4 md:px-24">
                  <Link
                    scroll={false}
                    href="/"
                    onClick={() => setMenuOpen(false)}
                  >
                    {/* <div className="max-sm:hidden">
														<Logo withText />
													</div> */}
                    {/* <div className="sm:hidden"> */}
                    <Logo />
                    {/* </div> */}
                  </Link>

                  <Dialog.Close asChild>
                    <button className="block rounded-full p-4 text-white hover:bg-gray-800 active:bg-gray-900 ">
                      <X />
                    </button>
                  </Dialog.Close>
                </div>

                <motion.ul
                  variants={variants.list}
                  initial="hide"
                  animate="show"
                  className="flex flex-1 flex-col items-start justify-center gap-8 px-16 text-3xl md:px-24"
                >
                  <NavLink href="/dashboard" onClick={() => setMenuOpen(false)}>
                    Dashboard
                  </NavLink>
                  <NavLink href="/catalogue" onClick={() => setMenuOpen(false)}>
                    Book Catalogue
                  </NavLink>
                  <NavLink href="/contact" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </NavLink>
                  <motion.div variants={variants.item}>
                    <LogoutSlot>
                      <button>Sign Out</button>
                    </LogoutSlot>
                  </motion.div>
                </motion.ul>
              </motion.div>
            </Dialog.DialogContent>
          </Dialog.DialogPortal>
        )}
      </AnimatePresence>

      <Dialog.Trigger asChild>
        <button className="block rounded-full p-4 hover:bg-gray-100 active:bg-gray-200 lg:hidden">
          <Menu />
        </button>
      </Dialog.Trigger>
    </Dialog.Root>
  );
}
