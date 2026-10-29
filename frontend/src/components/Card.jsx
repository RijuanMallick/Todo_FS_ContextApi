import React, { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";

import DeleteModal from "./DeleteModal";
import { Link } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

const Card = ({ title, id }) => {
  const [delModal, setDelModal] = useState(false);
  const [todoToDel, setTodoToDel] = useState(null);

  const { delTodo } = useTodo();

  function handleDelModal(id) {
    setDelModal(true);
    setTodoToDel(id);
  }

  function cancelDel() {
    setDelModal(false);
    setTodoToDel(null);
  }

  async function confirmDel() {
    delTodo(todoToDel);
    setDelModal(false);
    setTodoToDel(null);
  }

  return (
    <div className=" my-1 flex justify-center items-center gap-2 w-[25%] m-auto">
      <div className="w-[70%] bg-rose-200 text-xl p-2">{title}</div>
      <div className="w-[25%] p-2">
        <Link to={`/update/${id}`}>
          <button className="text-xl p-2 bg-green-200 me-2">
            <LuNotebookPen />
          </button>
        </Link>
        <button
          className="text-xl p-2 bg-red-300"
          onClick={() => handleDelModal(id)}
        >
          <RiDeleteBin7Fill />
        </button>
        {delModal && (
          <DeleteModal cancelDel={cancelDel} confirmDel={confirmDel} />
        )}
      </div>
    </div>
  );
};

export default Card;
