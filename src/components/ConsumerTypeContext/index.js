import React, { Component } from 'react';
import ThemeContextProvider from '../../contexts/ThemeContext';
import NavBar from './NavBar';
import BookList from './BookList';
import ThemeToggle from '../ThemeToggle';

class ConsumerTypeContext extends Component {
	render() {
		return (
			<div className="App">
				<ThemeContextProvider>
					<div>
						<NavBar />
						<BookList />
						<ThemeToggle />
					</div>
				</ThemeContextProvider>
			</div>
		);
	}
}

export default ConsumerTypeContext;
