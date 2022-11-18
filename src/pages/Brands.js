import { CHeader } from '@coreui/react';
import BrandsList from '../components/BrandsList';
import Card from '../components/Card';
import Off from '../components/Off';
// import models from 'http://localhost:3000/models';


export default function Brands() {
    return (
        <>
            <CHeader></CHeader>
            <Off></Off>
            <BrandsList />
        </>

    );
};