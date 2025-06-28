"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

type Props = {
  title: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | null
    | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ title, className, variant, ...props }: Props) {
  const router = useRouter();

  return (
    <Button
      className={className}
      variant={variant}
      onClick={() => router.back()}
      title={title}
      {...props}
    >
      {title}
    </Button>
  );
}
