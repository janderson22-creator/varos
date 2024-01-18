"use client"
import { useTheme } from "next-themes";

const ArrowRight = () => {
  const { theme } = useTheme();

  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.375 4.75L11.6875 9L6.375 13.25L6.375 4.75Z"
        fill={theme === "light" ? "#000" : "#F2F4F8"}
      />
    </svg>
  );
};

export default ArrowRight;
