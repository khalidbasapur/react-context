import React, { Component } from 'react';
import ThemeContextProvider from '../../contexts/ThemeContext';
import NavBar from './NavBar';
import BookList from './BookList';
import ThemeToggle from '../ThemeToggle';

class StaticTypeContext extends Component {
	render() {
		return (
			<div className="App">
				<ThemeContextProvider>
					<NavBar />
					<BookList />
					<ThemeToggle />
				</ThemeContextProvider>
			</div>
		);
	}
}

export default StaticTypeContext;
