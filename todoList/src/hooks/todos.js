import { useEffect, useState } from 'react'
import { api } from '../api.js';

export function useTodos(){
     const [todos, setTodos] = useState([]);
      const [filters, setFilters] = useState({});
    
      async function fetchTodos() {
        try {
          const data = await api.todos.getAll(filters);
          setTodos(data);
        } catch (error) {
          console.log('Error fetching todos:', error);
    
        }
      };
      useEffect(() => {
        fetchTodos();
      }, [filters]);
    
      async function handleCreate(newTodo) {
        try {
          await api.todos.create(newTodo);
          await fetchTodos();
        } catch (error) {
          console.log('Error creating todo:', error);
    
        }
    
      };
    
      async function handleUpdate(id, updatedTodo) {
        try {
          await api.todos.update(id, updatedTodo);
          await fetchTodos();
        } catch (error) {
          console.log('Error updating todo:', error);
        }
    
      };
    
      async function handleDelete(id) {
        try {
          await api.todos.delete(id);
          await fetchTodos();
        } catch (error) {
          console.log('Error deleting todo:', error);
        }
    
      };
      return{
        data: todos,
        fetch: fetchTodos,
        create:handleCreate,
        update: handleUpdate,
        delete: handleDelete,
        filters: setFilters,
      }
    
}