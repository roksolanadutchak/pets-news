import { useFormik } from 'formik';
import * as yup from 'yup';
import { LoginData } from '../../shared/interfaces/login-data';
import styles from './Login.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const validationSchema = yup.object({
	email: yup.string().required('Email is required').email(),
	password: yup
		.string()
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
});
const Login = () => {
	const initialValues: LoginData = { email: '', password: '' };
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div className={styles.loginPageWrapper}>
			<div className={styles.formWrapper}>
				<h1>Login</h1>
				<form onSubmit={formik.handleSubmit} className={styles.formContainer}>
					<TextField
						fullWidth
						id="email"
						name="email"
						label="Email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<TextField
						fullWidth
						id="password"
						name="password"
						label="Password"
						type="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>
					<Button variant="contained" fullWidth type="submit">
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};
export default Login;
