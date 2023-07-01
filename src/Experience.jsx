import Lights from "./Lights.jsx";
import { Level } from "./Level.jsx";
import { Debug, Physics } from "@react-three/rapier";
import Player from "./Player.jsx";
import useGame from "./stores/useGame.js";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  return (
    <>
      <Physics>
        {/* <Debug /> */}

        <Lights />

        <Level count={blocksCount} />

        <Player />
      </Physics>
    </>
  );
}
