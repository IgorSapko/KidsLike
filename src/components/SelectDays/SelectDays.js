import style from "./style.module.css";
import { useState } from "react";
export default function SelectDays() {
  const [toggle, serToggle] = useState(false);
  const [listTask, serListTask] = useState([]);

  const handlechange = () => serToggle(!toggle);

  const handleInputChange = (e) => {
    const selectName = e.target.id;

    serListTask([...listTask, selectName]);
  };

  return (
    <div>
      {!toggle ? (
        <div onClick={handlechange} className={style.blockAddSwitch}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1V11"
              stroke="#8EC63F"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 6L11 6"
              stroke="#8EC63F"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ) : (
        <div>
          <div onClick={handlechange} className={style.blockAddSwitch}>
            OK
          </div>

          <form className={style.blockCheckbox}>
            <label className={style.checkbox_other}>
              <input
                type="checkbox"
                className={style.regular_checkbox}
                id="one"
                onChange={handleInputChange}
              />
              ПН
            </label>
            <label>
              <input
                type="checkbox"
                className={style.regular_checkbox}
                id="two"
                onChange={handleInputChange}
              />
              ВТ
            </label>
            <label>
              <input
                type="checkbox"
                className={style.regular_checkbox}
                id="three"
                onChange={handleInputChange}
              />
              СР
            </label>
            <label>
              <input
                type="checkbox"
                className={style.regular_checkbox}
                id="four"
                onChange={handleInputChange}
              />
              ЧВ
            </label>
            <label>
              <input
                type="checkbox"
                className={style.regular_checkbox}
                id="five"
                onChange={handleInputChange}
              />
              ПТ
            </label>
            <label>
              <input
                type="checkbox"
                className={style.regular_checkbox}
                id="six"
                onChange={handleInputChange}
              />
              СБ
            </label>
            <label>
              <input
                type="checkbox"
                className={style.regular_checkbox}
                id="seven"
                onChange={handleInputChange}
              />
              ВС
            </label>
          </form>
        </div>
      )}
    </div>
  );
}
