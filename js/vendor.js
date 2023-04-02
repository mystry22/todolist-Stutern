let myTodo = [];


const addTodo =()=>{
let newTodo = document.getElementById('todo').value;
if(newTodo){
    myTodo.push(newTodo);
    localStorage.setItem('list',myTodo);
    console.log(localStorage.getItem('list'));
}else{
    alert('Input Field cannot be empty');
}

}

const removeTodo =()=>{
let newTodo = document.getElementById('todo').value;
let lists = localStorage.getItem('lists');
if(myTodo.includes(lists)){
    let getIndex = lists.indexOf(newTodo);
    myTodo.slice(getIndex);
    localStorage.setItem('list',myTodo);
}else{
    alert('Cannot find item in list of todo\'s');
}
}