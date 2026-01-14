"use client";

import { logoutAction } from "@/actions/login/logout-action";
import {
  CircleXIcon,
  FileTextIcon,
  HourglassIcon,
  HouseIcon,
  LogOutIcon,
  MenuIcon,
  PlusIcon,
  UserPenIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleLogout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    startTransition(async () => {
      await logoutAction();
    });
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  const navClasses = `bg-slate-900 text-slate-100 rounded-lg flex flex-col mb-8 sm:flex-row sm:flex-wrap ${
    !isOpen && "h-10 overflow-hidden"
  } sm:overflow-visible sm:h-auto`;
  // [&>svg]:w-[16px] [&>svg]:h-[16px] -> make to access svg inside link and set width and height
  const linkClasses =
    "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 flex items-center justify-start gap-2 transition hover:bg-slate-800 rounded-lg h-10 shrink-0 cursor-pointer";
  const openCloseBtnClasses = linkClasses + "text-blue-200 italic sm:hidden";
  return (
    <nav className={navClasses}>
      <button
        onClick={() => setIsOpen((s) => !s)}
        className={openCloseBtnClasses}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}
        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>
      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>
      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClasses} href="/admin/post/new">
        <PlusIcon />
        Criar Post
      </Link>
      <Link className={linkClasses} href="/admin/user">
        <UserPenIcon />
        Seus dados
      </Link>

      <a onClick={handleLogout} href="#" className={linkClasses}>
        {isPending && (
          <>
            <HourglassIcon />
            Aguarde...
          </>
        )}

        {!isPending && (
          <>
            <LogOutIcon />
            Sair
          </>
        )}
      </a>
    </nav>
  );
}
