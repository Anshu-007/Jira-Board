// http://localhost:8080/task/getAllTask/-83d4-4962-849c-09da0c57977a G
// http://localhost:8080/task/{taskId} G40e6c406
// http://localhost:8080/task/create P 
                // {
                //     "id": "2",
                // 	"boardId":"40e6c406-83d4-4962-849c-09da0c57977a",
                // 	"name":"Test task",
                // 	"description":"Test description",
                // 	"assignTo":"Anshu",
                // 	"assignBy":"Deepak",
                // 	"status":"TODO",
                // 	"dueDate":"2024-09-12"
                // }

export const appBoards = {
    "board 1" : {
        board_id : "123abc",
        boardStatusBars : {
            todo:[
                {
                    id: "123456",
                    heading : "task1",
                    description : "some task",
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ],
                    status : "TODO"
                },
                {
                    id: "123457",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123458",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123459",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123460",
                    heading : "task 8",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
            ],
            pending:[
                {
                    id: "123456",
                    heading : "task2345",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123457",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123458",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123459",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123460",
                    heading : "task 8",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
            ],
            done:[
                {
                    id: "123456",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123457",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123458",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123459",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123460",
                    heading : "task 8",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
            ]
        }
        
    },
    board2 : {
        board_id : "123xyz",
        boardStatusBars : {
            todo:[
                {
                    id: "123456",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "COMPLETED"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "COMPLETED"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "COMPLETED"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123457",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123458",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123459",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123460",
                    heading : "task 8",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
            ],
            pending:[
                {
                    id: "123459",
                    heading : "task1",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "COMPLETED"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }
                    ]
                },
                {
                    id: "123460",
                    heading : "task 8",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "COMPLETED"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "COMPLETED"
                        }
                    ]
                },
            ],
            done:[
                {
                    id: "123460",
                    heading : "task 8",
                    position: 1,
                    subtask: [ 
                        {
                            id : "Abcd123",
                            heading: "subtask1",
                            description:"subtask 1 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd124",
                            heading: "subtask2",
                            description:"subtask 2 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd125",
                            heading: "subtask3",
                            description:"subtask 3 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "TODO"
                        }, {
                            id : "Abcd126",
                            heading: "subtask4",
                            description:"subtask 4 description",
                            assigned_to: "anshu",
                            assigned_by : "deepak",
                            status : "COMPLETED"
                        }
                    ]
                },
            ]
        }
        
    }
}