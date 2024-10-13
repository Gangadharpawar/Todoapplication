import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

function Dashboard() {
  const { username } = useParams();
  const navigate = useNavigate();
  const authInfo = useContext(AuthContext);
  if (authInfo.isLoggedIn === null) {
    return <main>Loadding....</main>;
  } else if (authInfo.isLoggedIn === false) {
    navigate(`/Login`);
  }
  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  return (
    <>
      <h5 style={{ float: "right", marginRight: "24px" }}>
        User Name :{username}
      </h5>
      <h1> Dashboard </h1>
    </>
  );
}

export default Dashboard;
