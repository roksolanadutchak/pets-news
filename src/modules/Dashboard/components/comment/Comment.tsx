import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './Comment.module.scss';
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Comment = () => {
	const [files, setFiles] = useState([]);
	const onDrop = useCallback((acceptedFiles) => {
		acceptedFiles.forEach((file) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
			const reader = new FileReader();

			reader.onabort = () => console.log('file reading was aborted');
			reader.onerror = () => console.log('file reading has failed');
			reader.onload = () => {
				const binaryStr = reader.result;
				console.log(binaryStr);
			};
			reader.readAsArrayBuffer(file);
		});
	}, []);
	const handleUpload = (event) => {
		event.preventDefault();
		const formData = new FormData();
		console.log(files[0]);
		formData.append('file', files[0]);
		axios
			.post('/comment/upload', formData)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	const fileList = files.map((file) => (
		<li key={file.name}>
			<img src={file.preview} alt={file.name} className={styles.image} />
			<span>{file.name}</span>
		</li>
	));
	return (
		<form onSubmit={handleUpload}>
			<Box className={styles.dropzoneContainer}>
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					{isDragActive ? (
						<p>Drop the files here ...</p>
					) : (
						<p>Drag and drop some files here, or click to select files</p>
					)}
					<ul className={styles.imageList}>{fileList}</ul>
				</div>
			</Box>
			<Button type="submit">Submit</Button>
		</form>
	);
};

export default Comment;
