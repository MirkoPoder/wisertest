import { Modal } from "bootstrap";
import { useState, useEffect, useRef } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./RegisterForm";

function App() {
  const [modal, setModal] = useState(null);
  const exampleModal = useRef();
  const [tasks, setTasks] = useState([]);

  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    setModal(new Modal(exampleModal.current));
  }, []);

  return (
    <div className="py-5">
      <div className="text-center">
        <button
          type="button"
          onClick={() => modal.show()}
          className="btn btn-primary"
        >
          Insert Details
        </button>
      </div>
      <div
        className="modal fade"
        ref={exampleModal}
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                INSERT EMPLOYEE DETAILS
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => modal.hide()}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <RegisterForm onAdd={addTask} />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => modal.hide()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
