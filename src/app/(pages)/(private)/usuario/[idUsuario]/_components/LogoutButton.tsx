"use client";

import Button from "@/components/button/button";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    document.cookie = `user_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    router.replace("/login");
  }

  return <Button variant="secondary" onClick={handleLogout}>Sair <i className="fa fa-arrow-right"></i></Button>;
}