import { FC, useState, useRef } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import useCardApi from '../../../../shared/hooks/useCardApi';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import styles from './article.module.scss';

const Article: FC<{ open: boolean; handleClose: () => void }> = ({
	open,
	handleClose,
}) => {
	const [isVisible, setIsVisible] = useState(true);
	const { loading, data } = useCardApi(1);
	const titleRef = useRef(null);

	const listenToScroll = () => {
		const heightToHideFrom = titleRef.current
			? titleRef.current.getBoundingClientRect().height
			: 35;
		const winScroll = titleRef.current
			? titleRef.current.getBoundingClientRect().y
			: 15;
		if (winScroll > heightToHideFrom) {
			isVisible && setIsVisible(false);
		} else {
			setIsVisible(true);
		}
		console.log(`height to hide ${heightToHideFrom}`);
		console.log(`winScroll ${winScroll}`);
	};
	console.log();

	if (loading) {
		return null;
	}
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				onScroll={listenToScroll}
			>
				<Box>
					<div className={styles.header}>
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
							className={styles.scrollButton}
						>
							Scroll to top
						</Button>
					)}
				</Box>
			</Modal>
		</>
	);
};
export default Article;
