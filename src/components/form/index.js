import React from 'react'

const Form = () => {
    return (
        <form>
            <header>
                <h4>Completar formulario</h4>

            </header>
            <label>
                Nombre:
                <input type="text" aria-required="true" />
            </label>
        </form>
    );
}

export default Form;