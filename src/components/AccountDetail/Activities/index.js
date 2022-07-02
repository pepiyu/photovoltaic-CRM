import React, { useState, useEffect, useContext } from 'react'
import ActivityService from '../../../services/ServiceActivity'
import ActivityTypes from '../../../services/ServiceActivityTypes'
import Activity from '../Activity'
import { Row } from '../styles'
import AddIcon from '@mui/icons-material/Add';
import { dateFormatter } from '../../../utils/date'
import CreateNewForm from '../../UI/CreateNewForm'
import AppContext from '../../../contexts/App'
const ActivitiesComponent = ({ accountId }) => {
    //const { user } = useContext(AppContext)
    const [activities, setActivities] = useState([])
    const [activityTypes, setActivityTypes] = useState([])
    const userLS = JSON.parse(localStorage.getItem('user')).sub

    useEffect(() => {   



    ActivityService.getActivity()
    .then((elements) => {
        const filteredById = elements.filter((el) => { return el.account_id === accountId})
        console.log(filteredById)
        setActivities(filteredById)
    })
    .catch((err) => {
        console.error(err)
    })

    

    ActivityTypes.getActivity()
    .then((activityTypes) => {
        setActivityTypes(activityTypes)
    })
    .catch((err) => {
        console.error(err)
    })

    }, [])


    const handleOnSubmit = (data) => {
        let addId = {...data, account_id: accountId, user_id: userLS}
        ActivityService.create(addId).then(() => {
            let withNew = [...activities];
            withNew.push(addId)
            setActivities(withNew)
        })
    }


    const TextFieldEls = [
        {label: 'Comentario', name: 'comment', required: true, type: 'textarea'},
        {label: 'Fecha vencimiento', name: 'due_date', required: true, type: 'date'},
        
    ]
    const InputFileEls = [
        
    ]
    const SelectFieldEls = [
        {label: 'Tipo actividad', name: 'activity_type_id', required: true, options: activityTypes.map((activityType) => {return {value: activityType.id, label: activityType.activity_description}})},
    
    ]



    return (

        <>
            <Row>
                <h2> Actividades </h2>

                <CreateNewForm 
                boton={<AddIcon/>}
                titulo='Crear actividad'
                TextFieldEls={TextFieldEls}
                InputFileEls={InputFileEls}
                SelectFieldEls ={SelectFieldEls}
                onSubmit={handleOnSubmit}
                />

            </Row>

            {
                activities.map((activity) => 
                
                (
                    <Activity
                        key={activity.id}
                        dueDate={dateFormatter(activity.due_date)}
                        comment={activity.comment}
                        createdAt={dateFormatter(activity.createdAt)}
                        updatedAt={dateFormatter(activity.updatedAt)}
                    
                    />

                )
                )

            }
        </>


    )
}

export default ActivitiesComponent