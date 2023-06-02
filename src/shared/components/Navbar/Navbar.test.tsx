import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders learn react link', () => {
	render(<Navbar />);
	const title = screen.getByText(/PAWESOME NEWS/i);
	expect(title).toBeInTheDocument();
});
