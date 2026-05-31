import { Route, Routes } from 'react-router-dom';
import type { ReactElement } from 'react';

import { AdsPage, AdDetailPage, EditAdPage } from '../pages';

export const AppRoutes = () => (
    <Routes>
        <Route path="/ads" element={(<AdsPage />) as ReactElement} />
        <Route path="/ads/:id" element={(<AdDetailPage />) as ReactElement} />
        <Route path="/ads/:id/edit" element={(<EditAdPage />) as ReactElement} />
    </Routes>
);
