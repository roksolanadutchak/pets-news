import Navbar from "../components/navbar/Navbar";
import useApi from "../../hooks/useApi";
import CardComponent from "../components/card/Card";
import styles from "./dashboard.module.scss"

function Dashboard() {
    const {loading, data } = useApi("http://localhost:8000/cards");
    if(loading) return <h1>Loading</h1>
   return(
       <div>
          <Navbar />
           <div className={styles.cardWrapper}>
               {
                   data && data.map((d)=> <CardComponent key={d.id} author={d.author} creationDate={d.creationDate} content={d.content} chips={d.chips} />)
               }
           </div>
       </div>
   )
}
export default Dashboard;