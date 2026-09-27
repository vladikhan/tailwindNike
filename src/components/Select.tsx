import { IoIosArrowDown } from "react-icons/io"
import { twMerge } from "tw-merge"

interface SelectProps {
  title: string;
  options: string[] | number[];
  className?: string;
  defaultValue?: string | number | undefined;
  onChange?: (value: string) => void;
}

export function Select({
  title,
  options,
  className,
  defaultValue,
  onChange = () => {},
}: SelectProps) {
  return (
    <div className="relative dark:text-black">
      <select
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue ?? ""}
        className={twMerge(
          `w-24 appearance-none border border-gray-300 bg-white p-4  ${className}`
        )}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
