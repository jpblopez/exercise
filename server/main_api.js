const express = require('express');
const app = express();

app.use(express.json());
let todos = []

app.get('/api/get' ,(req, res) =>{
    res.send(todos);
})

app.post('/api/post' , (req, res) => {
    let todo = { id: todos.length + 1,
                 title : req.body.title, 
                 description : req.body.description, 
                 status : req.body.status}
    todos.push(todo);
    res.send(todo);
})

app.delete('/api/delete/:id' , (req, res) =>{
    const todo = todos.find(c => c.id === parseInt(req.params.id));
    if(!todo){
        res.status(404).send('Todo doesnt exist');
    }

    const index = todos.indexOf(todo);
    todos.splice(index,1);
    res.send(todo);
})

app.patch('/api/edit/:id' , (req, res)=>{
    const todo = todos.find(c => c.id === parseInt(req.params.id));
    
    if(!todo){
    res.status(404).send('Todo doesnt exist');
    }
    
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.status = req.body.status;
    res.send(todo);
})

app.listen(3000, () => console.log('Listening on port 3000...'));
