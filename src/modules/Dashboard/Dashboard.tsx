import Navbar from '../../shared/components/Navbar/Navbar';
import useDashboardApi from '../../shared/hooks/useDashboardApi';
import CardComponent from '../../shared/components/Card/CardComponent';
import styles from './Dashboard.module.scss';
import BottomAppBar from '../../shared/components/Appbar/BottomAppBar';

function Dashboard() {
	const { loading, data } = useDashboardApi();
	if (loading) return <h1>Loading</h1>;
	return (
		<div>
			<Navbar />
			<div className={styles.cardWrapper}>
				{data &&
					data.map((d) => (
						<CardComponent
							key={d.id}
							author={d.author}
							creationDate={d.creationDate}
							content={d.content}
							chips={d.chips}
						/>
					))}
			</div>
			<BottomAppBar />
		</div>
	);
}
export default Dashboard;
