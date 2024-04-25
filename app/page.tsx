import { ChampionsSelect, DarkThemeProvider, SizeSelects } from "@/components";

export default function Home() {
  return (
    <DarkThemeProvider>
      <div className="p-4">
        <SizeSelects />
        <ChampionsSelect />
      </div>
    </DarkThemeProvider>
  );
}
