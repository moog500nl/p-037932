
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationPath: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation = ({
  animationPath,
  className = "",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) => {
  const [animData, setAnimData] = useState<any>(null);

  useEffect(() => {
    fetch(animationPath)
      .then(response => response.json())
      .then(data => setAnimData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, [animationPath]);

  if (!animData) return null;

  return (
    <div className={className}>
      <Lottie
        animationData={animData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    </div>
  );
};

export default LottieAnimation;
