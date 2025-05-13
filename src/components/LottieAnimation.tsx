
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Skeleton } from "./ui/skeleton";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    fetch(animationPath)
      .then(response => response.json())
      .then(data => {
        if (isMounted) {
          setAnimData(data);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error("Error loading Lottie animation:", error);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [animationPath]);

  if (isLoading) {
    return <Skeleton className={`${className} w-full h-full`} />;
  }

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
