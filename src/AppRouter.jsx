import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { Header } from './components/header/Header';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage/>}></Route>
			<Route path='product/:id' element={<ProductPage />} />
		</Routes>
	);
};