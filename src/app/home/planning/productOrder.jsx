// planning/productOrder.js
export const productOrderData = [
  {
    id: 1,
    name: "D24-147-1.3",
    status: "in-progress", // Trạng thái PO
    products: [
      {
        id: 1,
        name: "KEXICH-CD-VONGØ561",
        quantity: 279,
        step:2,
        workOrders: [
          {
            id: 1,
            status: "in-progress", // Trạng thái WO
            startDate: "2024-09-10",
            endDate: "2024-09-15",
            workList:[{
                deparment:"Hàn điểm",
                name:"Máy uốn tròn",
                code:"5.MUT",
                workDays: [
                  {
                    date: "2024-09-10",
                    hoursWorked: 8,
                    workers: "8 người",
                    machineNumber: "2 máy",
                    output: 2250,
                    notes: "Hoàn thành đúng tiến độ",
                  },
                  {
                    date: "2024-09-11",
                    hoursWorked: 8,
                    workers: "8 người",
                    machineNumber: "2 máy",
                    output: 2250,
                    notes: "Hoàn thành đúng tiến độ",
                  },
                  {
                    date: "2024-09-12",
                    hoursWorked: 8,
                    workers: "8 người",
                    machineNumber: "2 máy",
                    output: 2250,
                    notes: "Hoàn thành đúng tiến độ",
                  },
                  {
                    date: "2024-09-13",
                    hoursWorked: 6,
                    workers: "8 người",
                    machineNumber: "2 máy",
                    output: 2120,
                    notes: "Chậm do sự cố máy móc",
                  },
                ],
              },{
                deparment:"Hàn điểm",
                name:"Máy hàn đấu đầu",
                code:"5.MHD",
                workDays: [
                  {
                    date: "2024-09-10",
                    hoursWorked: 8,
                    workers: "8 người",
                    machineNumber: "2 máy",
                    output: 2250,
                    notes: "Hoàn thành đúng tiến độ",
                  },
                  {
                    date: "2024-09-11",
                    hoursWorked: 8,
                    workers: "8 người",
                    machineNumber: "2 máy",
                    output: 2250,
                    notes: "Hoàn thành đúng tiến độ",
                  },
                  {
                    date: "2024-09-12",
                    hoursWorked: 8,
                    workers: "8 người",
                    machineNumber: "2 máy",
                    output: 2250,
                    notes: "Hoàn thành đúng tiến độ",
                  },
                  {
                    date: "2024-09-13",
                    hoursWorked: 6,
                    workers: "8 người",
                    machineNumber: "2 máy",
                    output: 2120,
                    notes: "Chậm do sự cố máy móc",
                  },
                ],
              },
            ]
          },
        ],
      },
      {
        id: 2,
        name: "KEXICH-CD-KHUNGTC-660",
        quantity: 837,
        step:2,
        workOrders: []
      },
      {
        id: 3,
        name: "KEXICH-TANGT545-VONGØ56",
        quantity: 279,
        step:1,
        workOrders: []
      },
      {
        id: 4,
        name: "KEXICH-TANGT545-VONGØ379",
        quantity: 279,
        step:2,
        workOrders: []
      },
      {
        id: 5,
        name: "KEXICH-TANGT545LITE-NANDOC257x30",
        quantity: 3348,
        step:1,
        workOrders: []
      },
      {
        id: 6,
        name: "KEXICH-TANGT545LITE",
        quantity: 279,
        step:1,
        workOrders: []
      },
      {
        id: 7,
        name: "KEXICH-TANGG664-VONGØ56",
        quantity: 279,
        step:1,
        workOrders: []
      },
      {
        id: 8,
        name: "KEXICH-TANGG658-VONGØ290",
        quantity: 279,
        step:2,
        workOrders: []
      },
      {
        id: 9,
        name: "KEXICH-TANGG658-VONGØ545",
        quantity: 279,
        step:2,
        workOrders: []
      },
      {
        id: 10,
        name: "KEXICH-TANGG658-VONGØ600",
        quantity: 279,
        step:3,
        workOrders: []
      },
      {
        id: 11,
        name: "KEXICH-TANGG658-VONGØ645",
        quantity: 279,
        step:2,
        workOrders: []
      },
      {
        id: 12,
        name: "KEXICH-TANGG658-NANDOC316",
        quantity: 3348,
        step:1,
        workOrders: []
      },
      {
        id: 13,
        name: "KEXICH-TANGG658x658",
        quantity: 279,
        step:1,
        workOrders: []
      }
    ],
  },
  {
    id: 2,
    name: "D24-147-1.2",
    status: "in-progress", // Trạng thái PO
    products: []
  },
  {
    id: 3,
    name: "D24-147-1.1",
    status: "in-progress", // Trạng thái PO
    products: []
  },
  {
    id: 4,
    name: "D24-144",
    status: "in-progress", // Trạng thái PO
    products: []
  },
  {
    id: 5,
    name: "D24-113",
    status: "in-progress", // Trạng thái PO
    products: []
  },
  {
    id: 6,
    name: "D24-154",
    status: "in-progress", // Trạng thái PO
    products: []
  }
  // Các ProductOrder khác
]