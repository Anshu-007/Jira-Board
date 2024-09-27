import { useState, useEffect }from "react";
import { Drawer, Descriptions, Button, Card, Input, Select, DatePicker } from "antd";

const Todo = ({ 
  task, 
  // idx, statusName, statusBarData
 }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [activeEdit, setActiveEdit] = useState(false);
  const [whileEdit, setWhileEdit] = useState({...task});

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

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:8080/task/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...whileEdit}),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Board saved:', data);
      } else {
        console.error('Error saving board:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setActiveEdit(!activeEdit)
  };

  const editChangeHandler = (e, val) => {
    setWhileEdit((prevState) => ({
      ...prevState,
      [val]: e.target.value,
    }));
  };
  const handleTaskStatus=(value)=>{
    whileEdit((preState)=>({
      ...preState,
      status : value
    }))
  }

  // const navigateToTakDetails = (taskId)=>{
  //   let boardId = getPath();
  //   // let board = getBoard(statusBarData,boardId)
  //   // console.log(board)
  //   // let statusOptions = getStatusOptions(board)
  //   // console.log(statusOptions);
  //   let path = `/taskDetails/${taskId}`
  //   navigate(path,{state:{task,boardId,statusName}})
  // }




const inputDateSelect = (val)=>{
  if(activeEdit){
    if(val === "status" || val === "assignTo" || val === "assignBy"){
      return <Select style={{width : "100%",marginTop:"10px"}} optionFilterProp="label"/>
    }else if (val === "dueDate"){
      return <DatePicker/>
    }else{
      return (<Input
        onChange={(e) => {
          editChangeHandler(e, val);
        }}
        variant="borderless"
        value={whileEdit[val]}
        disabled={val == "id" || val === "boardId" ? true : false}
      />)
    }

  }else{
    return whileEdit[val]
  }
}
  useEffect(() => {
    let arr = [];
    let count = 1;
    for (let val in task) {
      
      let obj = {

        key: count,
        label: val.charAt(0).toUpperCase() + val.slice(1),

        children: inputDateSelect(val)
        
        // activeEdit ? (
        //   val === "status" || val === "assignTo" || val === "assignBy" ? 
        //   <Select style={{width : "100%",marginTop:"10px"}} optionFilterProp="label"/>
        //   :
        //   <Input
        //     onChange={(e) => {
        //       editChangeHandler(e, val);
        //     }}
        //     variant="borderless"
        //     value={whileEdit[val]}
        //     disabled={val == "id" || val === "boardId" ? true : false}
        //   />
        // ) : (
        //   whileEdit[val]
        // )
      };
      arr.push(obj);
      count++;
    }
    setItems([...arr]);

    // eslint-disable-next-line
  }, [activeEdit,whileEdit]);

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
                {activeEdit && <Button onClick={handleEdit}>Cancel</Button>}
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
