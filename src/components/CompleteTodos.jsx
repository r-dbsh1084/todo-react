import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {todos.map((comp, index) => {
            return (
              <div key="comp" className="list-row">
                <li>{comp}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
