import Navbar from '../../shared/components/Navbar/Navbar';
import useDashboardApi from '../../shared/hooks/useDashboardApi';
import CardComponent from '../../shared/components/Card/Card';
import styles from './dashboard.module.scss';

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
		</div>
	);
}
export default Dashboard;
