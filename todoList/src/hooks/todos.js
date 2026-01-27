import { useEffect, useState } from 'react'
import { api } from '../api.js';


export function useTodos(){
     const [todos, setTodos] = useState([]);
      const [filters, setFilters] = useState({});
      const [errorMessage, setErrorMessage]= useState(null);
      const [isLoading, setIsLoading]= useState(false);
    
      async function fetchTodos() {
        setIsLoading(true);
        try {
          const data = await api.todos.getAll(filters);
          setTodos(data);
        } catch (error) {
          const message = error?.message || String(error) || 'Error fetching todos';
          setErrorMessage(`Error fetching todos: ${message}`);

        }finally{
          setIsLoading(false);
        }
      };
      useEffect(() => {
        fetchTodos();
      }, [filters]);
    
      async function handleCreate(newTodo) {
        setIsLoading(true);
        try {
          await api.todos.create(newTodo);
          await fetchTodos();
        } catch (error) {
          const message = error?.message || String(error) || 'Error creating todo';
          setErrorMessage(`Error creating todo: ${message}`);

        }finally{
          setIsLoading(false);
        }

      };
    
      async function handleUpdate(id, updatedTodo) {
         setIsLoading(true);
        try {
          await api.todos.update(id, updatedTodo);
          await fetchTodos();
        } catch (error) {
          const message = error?.message || String(error) || 'Error updating todo';
          setErrorMessage(`Error updating todo: ${message}`);
        }finally{
          setIsLoading(false);
        }

      };
    
      async function handleDelete(id) {
         setIsLoading(true);
        try {
         
          await api.todos.delete(id);
          await fetchTodos();
        } catch (error) {
          const message = error?.message || String(error) || 'Error deleting todo';
          setErrorMessage(`Error deleting todo: ${message}`);
        }finally{
          setIsLoading(false);
        }

      };
      return{
        data: todos,
        fetch: fetchTodos,
        create:handleCreate,
        update: handleUpdate,
        delete: handleDelete,
        filters: setFilters,
        errors:{
          message: errorMessage,
          clear:()=> setErrorMessage(null)
        },
        isLoading,
      }
    
}