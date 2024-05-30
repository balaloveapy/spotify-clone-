import Image from "next/image";
import { LoginHead } from "./assemble/header";
import { Music } from "./assemble/music";

export default function Home() {
  return (
    <div className="rounded-[8px] m-[8px] h-[--altura-calc] overflow-auto">
      <LoginHead />
      <Music />
    </div>

  );
}
