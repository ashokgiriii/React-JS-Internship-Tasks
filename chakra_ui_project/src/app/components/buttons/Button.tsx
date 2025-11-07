import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className?: string;
}

/*  Danger Button */
export const DangerButton = ({ className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-red-600 text-white h-fit w-1/2 hover:shadow cursor-pointer hover:scale-105 py-4 px-8 rounded-full hover:bg-red-700 transition",
        className
      )}
    >
      Danger
    </button>
  );
};

/*  Warning Button */
export const WarningButton = ({ className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-yellow-500 text-black h-fit w-1/2 hover:shadow cursor-pointer hover:scale-105 py-4 px-8 rounded-full hover:bg-yellow-600 transition",
        className
      )}
    >
      Warning
    </button>
  );
};

/*  Secondary Button */
export const SecondaryButton = ({ className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-gray-500 text-white h-fit w-1/2 hover:shadow cursor-pointer hover:scale-105 py-4 px-8 rounded-full hover:bg-gray-600 transition",
        className
      )}
    >
      Secondary
    </button>
  );
};

/* Normal Button */
export const NormalButton = ({ className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-white text-black h-fit w-1/2 hover:shadow cursor-pointer hover:scale-105 py-4 px-8 rounded-full hover:bg-white/90 transition",
        className
      )}
    >
      Normal
    </button>
  );
};

/*  Success Button  */
export const SuccessButton = ({ className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "bg-green-600 text-white h-fit w-1/2 hover:shadow cursor-pointer hover:scale-105 py-4 px-8 rounded-full hover:bg-green-700 transition",
        className
      )}
    >
      Success
    </button>
  );
};
