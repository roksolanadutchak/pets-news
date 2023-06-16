import { FC, useEffect, useState, useRef } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import useCardApi from '../../hooks/useCardApi';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
const ModalComponent: FC<{ open: boolean; handleClose: () => void }> = ({
	open,
	handleClose,
}) => {
	const [isVisible, setIsVisible] = useState(true);
	const { loading, data } = useCardApi(1);
	const titleRef = useRef(null);
	const listenToScroll = () => {
		const heightToHideFrom = 1000;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		if (winScroll > heightToHideFrom) {
			isVisible && setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listenToScroll);
		return () => window.removeEventListener('scroll', listenToScroll);
	}, []);

	if (loading) {
		return;
	}
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box>
					<div>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
							ref={titleRef}
						>
							{data.author}
						</Typography>
						<IconButton>
							<CloseIcon onClick={handleClose} />
						</IconButton>
					</div>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{data.content}
					</Typography>
					{isVisible && (
						<Button
							id="scroll-button"
							onClick={() => {
								titleRef.current.scrollIntoView();
							}}
						>
							Scroll to top
						</Button>
					)}
				</Box>
			</Modal>
		</>
	);
};
export default ModalComponent;
