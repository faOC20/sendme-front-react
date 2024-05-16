import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { Header } from './components/header/Header';
import { SearchPage } from './pages/SearchPage';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

export const AppRouter = () => {
	return (
		
		<Routes>
			<Route path='/' element={<HomePage/>}></Route>
			<Route path='product/:id' element={<ProductPage />} />
			<Route path='search/:query' element={<SearchPage/>}></Route>
			<Route path='register' element={<Register/>}></Route>
			<Route path='session' element={<Login/>}></Route>
		</Routes>
		
	);
};