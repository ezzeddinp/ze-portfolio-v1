// "use client";
// import { cn } from "@/lib/utils";
// import { useEffect } from "react";

// interface BackgroundGradientAnimationProps {
//   gradientBackgroundStart?: string;
//   gradientBackgroundEnd?: string;
//   firstColor?: string;
//   secondColor?: string;
//   thirdColor?: string;
//   fourthColor?: string;
//   fifthColor?: string;
//   pointerColor?: string;
//   size?: string;
//   blendingValue?: string;
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
//   theme?: "dark" | "light";
// }

// export const BackgroundGradientAnimation: React.FC<BackgroundGradientAnimationProps> = ({
//   gradientBackgroundStart = "165, 190, 255",
//   gradientBackgroundEnd = "165, 190, 255",
//   firstColor = "90, 30, 30",
//   secondColor = "165, 190, 255",
//   thirdColor = "165, 190, 255",
//   fourthColor = "165, 190, 255",
//   fifthColor = "165, 190, 255",
//   size = "80%",
//   blendingValue = "soft-light",
//   children,
//   className,
//   containerClassName,
//   theme = "dark",
// }) => {
//   useEffect(() => {
//     const isLightTheme = theme === "light";

//     document.body.style.setProperty(
//       "--gradient-background-start",
//       isLightTheme ? "rgb(0, 0, 0)" : gradientBackgroundStart
//     );
//     document.body.style.setProperty(
//       "--gradient-background-end",
//       isLightTheme ? "rgb(0, 0, 0)" : gradientBackgroundEnd
//     );
//     document.body.style.setProperty("--first-color", isLightTheme ? "0, 0, 0" : firstColor);
//     document.body.style.setProperty("--second-color", isLightTheme ? "50, 50, 50" : secondColor);
//     document.body.style.setProperty("--third-color", isLightTheme ? "100, 100, 100" : thirdColor);
//     document.body.style.setProperty("--fourth-color", isLightTheme ? "150, 150, 150" : fourthColor);
//     document.body.style.setProperty("--fifth-color", isLightTheme ? "200, 200, 200" : fifthColor);
//     document.body.style.setProperty("--size", size);
//     document.body.style.setProperty("--blending-value", blendingValue);
//   }, [
//     gradientBackgroundStart,
//     gradientBackgroundEnd,
//     firstColor,
//     secondColor,
//     thirdColor,
//     fourthColor,
//     fifthColor,
//     size,
//     blendingValue,
//     theme,
//   ]);

//   return (
//     <div
//       className={cn(
//         "h-[100%] w-[100%] relative overflow-hidden top-0 left-0 bg-[radial-gradient(circle_at_center,var(--gradient-background-start),var(--first-color) 20%,var(--second-color) 40%,var(--third-color) 60%,var(--fourth-color) 80%,var(--gradient-background-end))]",
//         "animate-gradient-background",  // Apply the CSS animation class
//         containerClassName
//       )}
//     >
//       <div className={cn("", className)}>{children}</div>
//       <div className={cn("gradients-container h-full w-full blur-lg", "[filter:url(#blurMe)_blur(40px)]")}>
//         {[firstColor, secondColor, thirdColor, fourthColor, fifthColor].map((color, index) => (
//           <div
//             key={index}
//             className={cn(
//               `absolute [background:radial-gradient(circle_at_center,_rgba(var(--${color}-color),_0.8)_0,_rgba(var(--${color}-color),_0)_50%)_no-repeat]`,
//               `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
//               `animate-layer-${index + 1}`,  // Apply the CSS animation class for each layer
//               `opacity-100`
//             )}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
