"use client";

import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © Ana Laura Fragoso Favoreti {new Date().getFullYear()}
        </div>
        <div className="text-xs text-muted-foreground hidden lg:block">
          Powered by Guigez
        </div>
        <DarkModeToggle />
      </div>
    </section>
  );
};