import { BiUpArrowAlt } from "react-icons/bi";

export const ScrollBtn = () => {
  return (
    <div className="scrollBtn">
      <button
        className="mail__btn click"
        onClick={() => window.scroll(0, 0)}
      >
        <BiUpArrowAlt />
      </button>
    </div>
  );
};
