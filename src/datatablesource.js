export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },

  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

// temp data

export const userRows = [
  {
    id: 1,
    username: "Snow Bobby",
    status: "active",
    img:  "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "snow@gthrones.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lanister",
    status: "passive",
    img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "jl@gthrones.com",
    age: 52,
  },
  {
    id: 3,
    username: "Lanister",
    status: "pending",
    img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "lani@gthrones.com",
    age: 25,
  },
  {
    id: 4,
    username: "Sammuel Boadu",
    status: "active",
    img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "sammuel@gthrones.com",
    age: 30,
  },
  {
    id: 5,
    username: "Nsoh peter",
    status: "passive",
    img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "peter@gthrones.com",
    age: 26,
  },
  {
    id: 6,
    username: "Osei Tutu",
    status: "active",
    img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "Tutu@gthrones.com",
    age: 24,
  },
];
