import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import styles from './card.module.scss';
import ModalComponent from '../Modal/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { CardData } from '../../interfaces/card-data';

const CardComponent = (cardData: CardData) => {
	const [open, setOpen] = useState(false);
	const handleOpenClose = () => {
		setOpen(!open);
	};

	return (
		<Card className={styles.cardWrapper}>
			<CardHeader title={cardData.author} subheader={cardData.creationDate} />
			<CardContent className={styles.cardContent}>
				<p>{cardData.content}</p>
			</CardContent>
			<CardActions className={styles.cardFooter}>
				<div>
					{cardData.chips.map((chip) => (
						<Chip key={chip.id} label={chip.tag} className={styles.chip} />
					))}
				</div>
				<Button className={styles.button} onClick={handleOpenClose}>
					Read more
				</Button>
				<ModalComponent open={open} handleClose={handleOpenClose} />
			</CardActions>
		</Card>
	);
};
export default CardComponent;
