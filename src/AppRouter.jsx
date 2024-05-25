import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { Header } from './components/header/Header';
import { SearchPage } from './pages/SearchPage';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { CartPage } from './pages/CartPage';
import { PurchasePage } from './pages/PurchasePage';
import { Charging } from './components/miscellaneos/Charging';

export const AppRouter = () => {
	return (
		
		<Routes>
			<Route path='/' element={<HomePage/>}></Route>
			<Route path='product/:id' element={<ProductPage />} />
			<Route path='search/:query' element={<SearchPage/>}></Route>
			<Route path='register' element={<Register/>}></Route>
			<Route path='session' element={<Login/>}></Route>
			<Route path='cart' element={<CartPage/>}></Route>
			<Route path='purchase' element={<PurchasePage/>}></Route>
			<Route path='charging' element={<Charging/>}></Route>
		</Routes>
		
	);
};