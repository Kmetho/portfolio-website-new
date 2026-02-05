import Banner from "./components/Banner";
import Work from "./components/Work";
import BlenderRender from "./components/BlenderRender";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <Work />
        <BlenderRender />
      </div>
    </main>
  );
}
