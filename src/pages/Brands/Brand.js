import './Brand.css';
import { CHeader } from '@coreui/react';
import Off from '../../components/OffCanvas/Off';
import coco from '../../assets/images/coconut.png';
import BrandDataService from '../../services/BrandService';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function OneBrand() {

    const logged = localStorage.getItem('role');
    let { id } = useParams();
    const [brand, setBrand] = useState({});

    useEffect(() => {
        BrandDataService.get(id)
            .then((response) => {
                setBrand(response.data)
            }).catch()
    }, []);

    const doEdit = (event) => {
        event.preventDefault();

        const params = {
            brand_name: event.target.name.value,
            country: event.target.country.value
        }

        BrandDataService.update(id, params)
            .then(() => {
                console.log("a funsionao")
            }).catch(e => {
                console.log("no a funsionao")
            })

    }

    return (

        <>
            {logged ? (
                <>
                    <CHeader className='headerxd'></CHeader>
                    <Off></Off>

                    {brand.id ? (

                        <div className='forms'>
                            <form className='formlogin' onSubmit={doEdit} method="PATCH">
                                <div>
                                    <h1>{brand.brand_name}</h1>
                                </div>

                                <div>
                                    <img src={brand.logo} alt="coco" />
                                </div>
                                <div>
                                    <label>Name</label>
                                    <input name="name" type="text" placeholder={brand.brand_name} autoFocus />
                                </div>
                                <div>
                                    <label>Country of Origin</label>
                                    <input name="country" type="text" placeholder={brand.country} />
                                </div>
                                <div id='button'>
                                    <input type="submit" value="Change" />
                                </div>
                            </form>
                        </div>
                    ) :
                        <div className='forms'>
                            <form className='formlogin'>
                                <div>
                                    <h1>Te ah ekivocao manito</h1>
                                </div>

                                <div>
                                    <img src={coco} alt="coco" />
                                </div>
                                <div>
                                    <label>Name</label>
                                    <input name="name" type="text" placeholder="Ehta basio" autoFocus />
                                </div>
                                <div>
                                    <label>Country of Origin</label>
                                    <input name="country" type="text" placeholder="Ehto tanvien" />
                                </div>
                                <div id='buttons'>
                                    <input value="No baia a pulsa" />
                                </div>
                            </form>
                        </div>
                    }
                </>
            ) :
                window.location.replace('/login')
            }
        </>

    );
};