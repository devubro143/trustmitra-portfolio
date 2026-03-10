import { Cursor, useTypewriter } from "react-simple-typewriter";

import { cn } from "@/lib/utils";

type TypewriterSubtitleProps = {
  words: string[];
  className?: string;
};

export default function TypewriterSubtitle({
  words,
  className,
}: TypewriterSubtitleProps) {
  const [text] = useTypewriter({
    words,
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 35,
    delaySpeed: 2000,
  });

  return (
    <p className={cn("font-medium tracking-tight", className)}>
      {text}
      <Cursor cursorStyle="|" cursorColor="rgb(34 211 238)" />
    </p>
  );
}
