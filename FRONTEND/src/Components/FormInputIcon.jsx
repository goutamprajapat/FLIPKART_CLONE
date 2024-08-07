/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { forwardRef, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const FormInputIcon = (props, ref) => {
  const [showPassword, setShowPassword] = useState(true);
  const {
    className,
    name,
    type,
    value,
    placeholder,
    icon,
    variant,
    messageClassName,
    passwordClassName,
    iconClassName,
    labelClass,
    message,
    label,
    defaultValue,
    //onChange,
  } = props;

  return (
    <>
      {variant === "sm-filled" && (
        <div>
          {label && (
            <label
              htmlFor={name}
              className={`pl-2 font-semibold ${labelClass}`}
            >
              {label}
            </label>
          )}
          <div className="relative">
            {/* small filled */}
            <div
              className={`absolute inset-y-0 flex items-center text-base pointer-events-none start-0 ps-3 ${iconClassName}`}
            >
              {icon}
            </div>
            <input
              ref={ref}
              //onChange={(e) => onChange(e)}
              type={type === "password" && !showPassword ? "text" : type}
              id={name}
              name={name}
              autoComplete={type === "password" ? "false" : "true"}
              value={value}
              className={`block rounded-t-lg ${icon && "px-9"} ${
                !icon && "px-3"
              } pb-3 py-3.5 w-full text-sm bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:border-white/30  dark:focus:border-blue-500 focus:outline-none focus:ring-0 dark:placeholder:text-personal-10/40 focus:border-blue-600 peer ${className}`}
              placeholder={placeholder || ""}
              defaultValue={defaultValue || ""}
            />
            {type === "password" && (
              <div
                className={`absolute inset-y-0 z-0 flex items-center text-base cursor-pointer end-0 pe-4 ${passwordClassName}`}
                onMouseUp={() => setShowPassword(true)}
                onMouseDown={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(true)}
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </div>
            )}
          </div>
          {message && (
            <p id={name} className={`mt-2 text-xs ${messageClassName}`}>
              {message}
            </p>
          )}
        </div>
      )}
      {variant === "sm-outlined" && (
        <div>
          {label && (
            <label
              htmlFor={name}
              className={`pl-2 font-semibold ${labelClass}`}
            >
              {label}
            </label>
          )}
          <div className="relative ">
            {icon && (
              <div
                className={`absolute inset-y-0 flex items-center text-base pointer-events-none start-0 ps-3 ${iconClassName}`}
              >
                {icon}
              </div>
            )}
            <input
              ref={ref}
              //onChange={(e) => onChange(e)}
              type={type === "password" && !showPassword ? "text" : type}
              id={name}
              name={name}
              autoComplete={type === "password" ? "false" : "true"}
              className={`block ${icon && "px-9"} ${
                !icon && "px-3"
              } pb-2.5 py-2.5 w-full text-sm  bg-transparent rounded-lg border-2 border-gray-200 dark:border-white/30 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 dark:placeholder:text-personal-300/60 focus:border-blue-600 ${className} peer`}
              placeholder={placeholder || ""}
              defaultValue={defaultValue || ""}
            />

            {type === "password" && (
              <div
                className={`absolute inset-y-0 z-0 flex items-center text-base cursor-pointer end-0 pe-4 ${passwordClassName}`}
                onMouseUp={() => setShowPassword(true)}
                onMouseDown={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(true)}
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </div>
            )}
          </div>
          {message && (
            <p id={name} className={`mt-2 text-xs ${messageClassName}`}>
              {message}
            </p>
          )}
        </div>
      )}
      {variant === "sm-standard" && (
        <div>
          {label && (
            <label
              htmlFor={name}
              className={`pl-2 font-semibold ${labelClass}`}
            >
              {label}
            </label>
          )}
          <div className="relative z-0">
            <div
              className={`absolute inset-y-0 flex items-center text-base pointer-events-none start-0 ps-3 ${iconClassName}`}
            >
              {icon}
            </div>
            <input
              ref={ref}
              //onChange={(e) => onChange(e)}
              type={type === "password" && !showPassword ? "text" : type}
              id={name}
              autoComplete={type === "password" ? "false" : "true"}
              value={value}
              className={`block w-full ${icon && "px-9"} ${
                !icon && "px-3"
              } pb-2 py-2 text-sm bg-transparent border-0 border-b-2dark:border-white/30 border-gray-300 appearance-none dark:text-white  dark:border-white/30  dark:focus:border-blue-500 dark:placeholder:text-personal-10/40 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${className}`}
              placeholder={placeholder || ""}
              defaultValue={defaultValue || ""}
            />
            {type === "password" && (
              <div
                className={`absolute inset-y-0 z-0 flex items-center text-base cursor-pointer end-0 pe-4 ${passwordClassName}`}
                onMouseUp={() => setShowPassword(true)}
                onMouseDown={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(true)}
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </div>
            )}
          </div>
          {message && (
            <p id={name} className={`mt-2 text-xs ${messageClassName}`}>
              {message}
            </p>
          )}
        </div>
      )}
      {variant === "lg-filled" && (
        <div>
          {label && (
            <label
              htmlFor={name}
              className={`pl-2 font-semibold ${labelClass}`}
            >
              {label}
            </label>
          )}
          <div className="relative">
            <div
              className={`absolute inset-y-0 flex items-center text-xl pointer-events-none start-0 ps-3 ${iconClassName}`}
            >
              {icon}
            </div>
            <input
              ref={ref}
              //onChange={(e) => onChange(e)}
              type={type === "password" && !showPassword ? "text" : type}
              id={name}
              value={value}
              name={name}
              autoComplete={type === "password" ? "false" : "true"}
              className={`block  rounded-t-lg ${icon && "px-9"} ${
                !icon && "px-3"
              } pb-3.5 py-4 w-full text-base bg-gray-50 dark:bg-gray-700 border-0 border-b-2  border-gray-300 dark:placeholder:text-personal-10/40 appearance-none dark:text-white  dark:border-white/30  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${className}`}
              placeholder={placeholder || " "}
              defaultValue={defaultValue || ""}
            />
            {type === "password" && (
              <div
                className={`absolute inset-y-0 z-0 flex items-center text-base cursor-pointer end-0 pe-4 ${passwordClassName}`}
                onMouseUp={() => setShowPassword(true)}
                onMouseDown={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(true)}
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </div>
            )}
          </div>
          {message && (
            <p id={name} className={`mt-2 text-xs ${messageClassName}`}>
              {message}
            </p>
          )}
        </div>
      )}
      {variant === "lg-outlined" && (
        <div>
          {label && (
            <label
              htmlFor={name}
              className={`pl-2 font-semibold ${labelClass}`}
            >
              {label}
            </label>
          )}
          <div className="relative">
            <div
              className={`absolute inset-y-0 flex items-center text-xl pointer-events-none start-0 ps-3 ${iconClassName}`}
            >
              {icon}
            </div>
            <input
              ref={ref}
              //onChange={(e) => onChange(e)}
              type={type === "password" && !showPassword ? "text" : type}
              id={name}
              autoComplete={type === "password" ? "false" : "true"}
              value={value}
              name={name}
              className={`block ${icon && "px-9"} ${
                !icon && "px-3"
              } pb-3.5 py-4 w-full text-base bg-transparent rounded-lg border-2dark:border-white/30 border-gray-200 appearance-none dark:text-white  dark:border-white/30 dark:placeholder:text-personal-10/40  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${className}`}
              placeholder={placeholder || ""}
              defaultValue={defaultValue || ""}
            />
            {type === "password" && (
              <div
                className={`absolute inset-y-0 z-0 flex items-center text-base cursor-pointer end-0 pe-4 ${passwordClassName}`}
                onMouseUp={() => setShowPassword(true)}
                onMouseDown={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(true)}
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </div>
            )}
          </div>
          {message && (
            <p id={name} className={`mt-2 text-xs ${messageClassName}`}>
              {message}
            </p>
          )}
        </div>
      )}
      {variant === "lg-standard" && (
        <div>
          {label && (
            <label
              htmlFor={name}
              className={`pl-2 font-semibold ${labelClass}`}
            >
              {label}
            </label>
          )}
          <div className="relative z-0">
            <div
              className={`absolute inset-y-0 flex items-center text-xl pointer-events-none start-0 ps-3 ${iconClassName}`}
            >
              {icon}
            </div>
            <input
              ref={ref}
              //onChange={(e) => onChange(e)}
              type={type === "password" && !showPassword ? "text" : type}
              id={name}
              value={value}
              name={name}
              autoComplete={type === "password" ? "false" : "true"}
              className={`block ${icon && "px-9"} ${
                !icon && "px-3"
              } pb-3 py-3.5 w-full text-base bg-transparent  border-0 border-b-2 border-gray-300 appearance-none dark:placeholder:text-personal-10/40 dark:text-white  dark:border-white/30  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${className}`}
              placeholder={placeholder || ""}
              defaultValue={defaultValue || ""}
            />
            {type === "password" && (
              <div
                className={`absolute inset-y-0 z-0 flex items-center text-base cursor-pointer end-0 pe-4 ${passwordClassName}`}
                onMouseUp={() => setShowPassword(true)}
                onMouseDown={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(true)}
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </div>
            )}
          </div>
          {message && (
            <p id={name} className={`mt-2 text-xs ${messageClassName}`}>
              {message}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default forwardRef(FormInputIcon);
