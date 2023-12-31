import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";


interface Props {
  path: string;
  styles?: string;
}

const LottieW = ({
  path,
  styles = "min-w-[100px] min-h-[100px] max-w-[250px]",
}: Props) => {
  const [animationReady, setAnimationReady] = useState(false);

  const playerClassName = animationReady
    ? ` fadeInPlayer active ${styles}`
    : "fadeInPlayer ";

  const charge = () => {
    setAnimationReady(true);
  };
  return (
      <Player
        autoplay={true}
        loop={true}
        src={"/lottie/" + path + ".json"}
        style={{ width: "100%" }}
        className={playerClassName}
        onEvent={(event) => {
          if (event === "load") charge(); // check event type and do something
        }}
      ></Player>

  );
};

export default LottieW;
