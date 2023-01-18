import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

export const FormStep1 = () => {
    const navigate = useNavigate()
    const{state, dispatch} = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () =>{
        if(state.name !== '') {
            return navigate('/step2')
        } else {
            alert('Preencha os dados')
        }
        
    }

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <C.FormStep1>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome:</p>

                <hr/>

                <label>
                    Seu nome 
                    <input 
                        type='text'
                        autoFocus
                        value={state.name}
                        onChange={handleChangeName}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.FormStep1>
        </Theme>
    )
}