import Image from "next/image";
import { ChampionsSelect, DarkThemeProvider, SizeSelects } from "@/components";

export default function Home() {
  return (
    <DarkThemeProvider>
      <Image
        src="/EZ-Horizontal.svg"
        alt="EZ Logo"
        width={200}
        height={50}
        className="absolute top-4 left-5"
      />
      <div className="p-4">
        <SizeSelects />
        <ChampionsSelect />
      </div>
    </DarkThemeProvider>
  );
}
