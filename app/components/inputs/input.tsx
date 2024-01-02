"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        type={type}
        className={`w-full p-4 pt-6 outline-none bg-white 
            font-light border-2 rounded-md
            transititon 
            disabled:opacity-70 disabled:cursor-not-allowed
            ${errors[id] ? "border-rose-400" : "border-slate-300"}
            ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}
       `}
      />
      <label htmlFor={id}
       className="absolute 
       cursor-text
       text-md
       duration-150
       transform
       top-5
       z-index-10
       origin-[0]
       left-4
       peer-placement-shown: scale-100
       peer-placement-shown: translate-y-0
       peer-focus:scale-75
       ">
        {label}</label>
    </div>
  );
};

export default Input;
