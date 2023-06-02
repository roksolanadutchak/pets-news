import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import useCardApi from '../../hooks/useCardApi';

const ModalComponent: FC<{ open: boolean; handleClose: () => void }> = ({
	open,
	handleClose,
}) => {
	console.log(open);
	const { loading, data } = useCardApi(1);
	if (loading) return console.log('loading');
	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{data.author}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{data.content}
					</Typography>
				</Box>
			</Modal>
		</>
	);
};
export default ModalComponent;
