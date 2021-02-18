import style from "./style.module.css";
import TaskToggle from "../Card/TaskToggle/TaskToggle";
import itemBlock from "./item.json";

export default function Stateless() {
  return (
    <div className={style.blockPeopleTask}>
      {itemBlock.map((item) => {
        return (
          <div key={item.img} className={style.blockPeopleTask_item}>
            <div className={style.blockPeopleTask_item_img}>
              <img src={item.img} />
            </div>

            <div className={style.blockPeopleTask_item_text}>
              <h2>{item.title}</h2>
              <div className={style.blockPeopleTask_item_inform}>
                <p>{item.ball}</p>

                <TaskToggle />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
