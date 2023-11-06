import * as React from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';

export default function BottomAppBar() {
	const [count, setCounter] = React.useState<number>(0);
	const { i18n } = useTranslation();
	const lngs = {
		en: { nativeName: 'English' },
		es: { nativeName: 'Spanish' },
		fr: { nativeName: 'French' },
		ua: { nativeName: 'Ukrainian' },
	};
	return (
		<React.Fragment>
			<AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
				<div>
					{Object.keys(lngs).map((lng) => (
						<button
							key={lng}
							style={{
								fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
							}}
							type="submit"
							onClick={() => {
								i18n.changeLanguage(lng);
								setCounter(count + 1);
							}}
						>
							{lngs[lng].nativeName}
						</button>
					))}
				</div>
			</AppBar>
		</React.Fragment>
	);
}
