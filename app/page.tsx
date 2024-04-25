import { ChampionsSelect, DarkThemeProvider, SizeSelects } from "@/components";

export default function Home() {
  return (
    <DarkThemeProvider>
      <img src="/EZ-Horizontal.svg" alt="EZ Logo" className="w-52 absolute top-4 left-5" />
      <div className="p-4">
        <SizeSelects />
        <ChampionsSelect />
      </div>
    </DarkThemeProvider>
  );
}
