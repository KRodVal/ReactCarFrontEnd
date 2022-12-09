import './BrandForm.css';
import React from 'react';
import BrandDataService from '../../services/BrandService';

const BrandForm = () => {

    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const doCreate = (event) => {
        event.preventDefault();

        const params = {
            brand_name: event.target.name.value,
            country: event.target.country.value,
            logo: event.target.logo.files[0]
        }

        BrandDataService.create(params)
            .then(() => {
                console.log("yes")
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <div className='forms'>
            <h1>New brand</h1>
            <form className='formlogin' onSubmit={doCreate} method="POST">
                <div>
                    <label>Name</label>
                    <input name="name" type="text" placeholder="Brand" autoFocus />
                </div>
                <div>
                    <label>Country of Origin</label>
                    <input name="country" type="text" placeholder="Country" />
                </div>
                <div>
                    <label>Logo</label>
                    <input name="logo" type="file" accept='image/png, image/jpeg' />
                </div>
                <div id='buttons'>
                    <input type="submit" value="Create" />
                    <input type="reset" value="Clear" />
                </div>
            </form>
        </div>
    );
}

export default BrandForm;