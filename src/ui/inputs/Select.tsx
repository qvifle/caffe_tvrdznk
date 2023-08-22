import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface ISelect {
  register: UseFormRegister<FieldValues>;
  name: string;
}

const Select = ({ register, name }: ISelect) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1">Способ оплаты</label>
      <select
        className="bg-light border-[2px] border-gray-300 text-dark text-sm rounded-lg"
        {...register(name, {
          required: true,
        })}
      >
        <option value="Картой">Картой</option>
        <option value="Наличными">Наличными</option>
      </select>
    </div>
  );
};

export default Select;
