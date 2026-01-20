import * as Yup from 'yup'
import {PRIORITIES } from '../constants/priorities';

export function getTodoSchema(){
    return Yup.object().shape({
        name: Yup.string().required('Name is required').min(3,'Name must be at least 3 characters long').max(50,
            'Name must be at most 50 characters long'
        ),
        description: Yup.string().max(200, 'Description must be at most 200 characters long'),
        deadline: Yup.string().nullable().transform((value) => value === '' ? null : value).matches(/\d{4}-\d{2}-\d{2}/, 'Invalid date format'),
        priority: Yup.string().required('Priority is required').oneOf(Object.keys(PRIORITIES),'Invalid priority selected')

    })

}