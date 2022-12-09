import ModelDataService from '../../services/ModelService';

const ModelForm = () => {


    return (
        <div className='forms'>
            <h1>New model</h1>
            <form className='formlogin' method="POST">
                <div>
                    <label>Name</label>
                    <input name="name" type="text" placeholder="Model" autoFocus />
                </div>
                <div>
                    <label>Brand</label>
                    <input list="brands" name="Brands"/>

                    <datalist id="brands">
                        <option value="Nissan" />
                        <option value="Opel" />
                        <option value="Peugeot" />
                        <option value="Lada" />
                        <option value="Si" />
                    </datalist>
                </div>
                <div>
                    <label>Generation</label>
                    <input name="gen" type="text" />
                </div>
                <div>
                    <label>Launch date</label>
                    <input name="date" type="date" accept='image/png, image/jpeg' />
                </div>
                <div id='buttons'>
                    <input type="submit" value="Create" />
                    <input type="reset" value="Clear" />
                </div>
            </form>
        </div>
    );

}

export default ModelForm;