const { createContext } = require("react");



const UserContext=createContext({
    
    Name:[],
    list:[],
    amount:[]
});


export default UserContext;