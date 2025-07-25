import React from "react";

const UserIconButton = () => {
  return (
    <div className="group relative w-9 h-9 cursor-pointer transition-transform duration-300 hover:scale-90">
      {/* Outer glass circle */}
      <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-[#6B4EFF] group-hover:to-[#FC4B94] group-hover:border-transparent" />

      {/* Inner icon */}
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[8px] left-[8px] transition-colors duration-300 text-white/70 group-hover:text-white"
      >
        <path
          d="M0 16V13.2C0 12.65 0.141667 12.1333 0.425 11.65C0.708333 11.1667 1.1 10.8 1.6 10.55C2.45 10.1167 3.40833 9.75 4.475 9.45C5.54167 9.15 6.71667 9 8 9C8.5 9 8.9875 9.025 9.4625 9.075C9.9375 9.125 10.4 9.2 10.85 9.3L9.1 11.05C8.91667 11.0167 8.7375 11 8.5625 11H8C6.81667 11 5.75417 11.1417 4.8125 11.425C3.87083 11.7083 3.1 12.0167 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14H8.25L10.25 16H0ZM13.55 16.4L10.1 12.95L11.5 11.55L13.55 13.6L18.6 8.55L20 9.95L13.55 16.4ZM8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default UserIconButton;
