import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import ModalComponent from '../Modal/ModalComponent';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { CardData } from '../../interfaces/card-data';

const CardComponent = (cardData: CardData) => {
	const [open, setOpen] = useState(false);
	const handleOpenClose = () => {
		setOpen(!open);
	};

	return (
		<Card>
			<CardHeader title={cardData.author} subheader={cardData.creationDate} />
			<CardContent>
				<p>{cardData.content}</p>
			</CardContent>
			<CardActions>
				<div>
					{cardData.chips.map((chip) => (
						<Chip key={chip.id} label={chip.tag} />
					))}
				</div>
				<Button onClick={handleOpenClose}>Read more</Button>
				<ModalComponent open={open} handleClose={handleOpenClose} />
			</CardActions>
		</Card>
	);
};
export default CardComponent;
