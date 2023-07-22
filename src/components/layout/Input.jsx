import { useState } from "react";

const Input = ({
  regProps,
  register,
  type,
  title,
  topRightLabel,
  placeholder,
  icon,
  iconActive,
  iconInActive,
  bottomLeftLabel,
  bottomRightLabel,
  error,
  ...rest
}) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="w-xs ">
      <label className="label flex items-center justify-between">
        <span className="label-text">{title}</span>
        <span className="label-text-alt">{topRightLabel}</span>
      </label>

      <label className="relative">
        {icon && (
          <div className="absolute bottom-[16px] left-[10px] ">{icon}</div>
        )}

        <input
          type={iconActive ? (visibility ? "text" : "password") : type}
          placeholder={placeholder}
          className={`text-xl duration-100 text-white focus:text-purple-500 block w-full rounded-xl border border-purple-500 p-2.5 outline-primary-600 focus:border-blue-500 focus:ring-blue-500
						${icon ? "pl-[40px]" : "pl-2"}`}
          {...register(title, { ...regProps })}
          {...rest}
        />

        {iconActive && iconInActive && (
          <div
            className="absolute bottom-[16px] right-[10px] cursor-pointer"
            onClick={() => setVisibility(!visibility)}
          >
            {visibility ? iconActive : iconInActive}
          </div>
        )}
      </label>

      <label className="label flex items-center justify-between">
        <span className="label-text-alt">{bottomLeftLabel}</span>
        <span className="label-text-alt">{bottomRightLabel}</span>
      </label>

      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default Input;
