import { useState, useEffect }from "react";
import { Drawer, Descriptions, Button, Card, Input } from "antd";

const Todo = ({ 
  task, 
  // idx, statusName, statusBarData
 }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [activeEdit, setActiveEdit] = useState(false);
  const [whileEdit, setWhileEdit] = useState({});

  // console.log(statusBarData,'FROM TODO')
  // const appBoards = useSelector(state => state.appBoard);
console.log(whileEdit,"WHILE EDIT");

  // const navigate = useNavigate();
  let completedSubTask = 0;
  let totalSubTask = task?.subtask?.length || 0;

  let subTask = task?.subtask || [];
  for (let i = 0; i < subTask.length; i++) {
    if (subTask[i].status === "COMPLETED") {
      completedSubTask++;
    }
  }
  const openDrawerHandler = () => {
    setOpen(true);
    // console.log("OPEN")
  };
  const closeDrawerHandler = () => {
    // console.log("PRINT")
    setOpen(false);
    // console.log(open)
  };
  const handleEdit = () => {
    if (!activeEdit) {
      setActiveEdit(true); // Enable editing
    } else {
      setWhileEdit({ ...task }); // Reset to original task if cancelling edit
      setActiveEdit(false);
    }
  };
  const handleSave = () => {};
  const editChangeHandler = (e, val) => {
    setWhileEdit((prevState) => ({
      ...prevState,
      [val]: e.target.value,
    }));
  };
  // const navigateToTakDetails = (taskId)=>{
  //   let boardId = getPath();
  //   // let board = getBoard(statusBarData,boardId)
  //   // console.log(board)
  //   // let statusOptions = getStatusOptions(board)
  //   // console.log(statusOptions);
  //   let path = `/taskDetails/${taskId}`
  //   navigate(path,{state:{task,boardId,statusName}})
  // }

  useEffect(() => {
    let arr = [];

    // eval();
    // console.log(task ,"FROM TODO")
    let count = 1;
    for (let val in task) {
      let obj = {
        key: count,
        label: val,
        children: activeEdit ? (

          <Input
            onChange={(e) => {
              editChangeHandler(e, val);
            }}
            variant="borderless"
            value={activeEdit ? whileEdit[val] : task[val]}
            // value={whileEdit[val]}
          />
        ) : (
          task[val]
        ),
      };
      arr.push(obj);
    }
    setItems([...arr]);

    // eslint-disable-next-line
  }, [activeEdit]);

  return (
    <>
      <Card onClick={openDrawerHandler} size="small" title={task.name}>
        <div className="subtask-count">
          Completed : {completedSubTask}/{totalSubTask}
        </div>
      </Card>
      <Drawer
        size="large"
        id={task.id}
        onClose={closeDrawerHandler}
        open={open}
      >
        {/* <TaskDetails task={task}/> */}
        <div>
          <Descriptions
            column={1}
            bordered
            title="Task Details"
            extra={
              <>
                <Button
                  onClick={
                    activeEdit ? (e) => handleSave(e) : (e) => handleEdit(e)
                  }
                  type="primary"
                >
                  {activeEdit ? "Save" : "Edit"}
                </Button>{" "}
                {activeEdit ? (
                  <Button onClick={handleEdit}>Cancle</Button>
                ) : null}{" "}
              </>
            }
            items={items}
          />
        </div>
      </Drawer>
    </>
  );
};

export default Todo;
