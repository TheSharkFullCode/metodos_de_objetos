// Ejercicio 1
// Crea un objeto llamado citizen1 y dale las propiedades name, lastname y age. Elige tú los valores.
let citizen1= {
    name: "oscar",
    lasname: "rodriguez",
    age:30
}


// Ejercicio 2
// Una vez creado, añádele la propiedad city, con el valor que tú quieras, y cambia el valor de la propiedad age. Comprueba que los cambios han surtido efecto.
citizen1.city="Madrid";
citizen1.age = 32;
// console.log(citizen1);

// Ejercicio 3
// Crea una función checkCitizenship que acepte como parámetro un objeto, compruebe la edad del ciudadano y, si ésta es mayor de 18, añada la propiedad canVote: true; de lo contrario, debe añadir canVote: false. Usála con el objeto citizen1.

function checkCitizenship(AcepObjet){
    if(AcepObjet.age >= 18){

        AcepObjet.canVote=true;
    //  console.log(AcepObjet);
    }else{
        AcepObjet.canVote=false;
    }
    return AcepObjet;

}
checkCitizenship(citizen1)
console.log(citizen1);



// Ejercicio 4
// Crea una función llamada createCitizen que acepte 3 strings: nombre, apellido y edad. Si los parámetros son válidos, debe retornar un nuevo objeto del tipo:
// {
// 	name: <<nombre>>,
// 	lastname: <<apellido>>,
// 	age: <<age>>
// }
function createCitizen(nombre,apellido,edad){
       let myObjet = {
        name:nombre,
        lastname: apellido,
        age: edad,
    }
    return myObjet
}
createCitizen("oscar","rod",32);
console.log(createCitizen("oscar","rod",32));


// Ejercicio 5
// Crea una variable citizen2 y asígnale como valor el resultado de la función anterior con los parámetros que desees.

let citizen2 = createCitizen("danilo","rodriguez",34);
console.log(citizen2);


// Ejercicio 6
// Crea una función checkVoting que acepte como parámetro un objeto, compruebe si el objeto en cuestión tiene la propiedad canVote y retorne  el resultado.

// let myObjet2 = createCitizen("danilo","rodiguez",35)
// function checkVoting (myObjets){
//     console.log(myObjets);
//     // myObjets.canVote= true;
//     return myObjets;
// }
// checkVoting(myObjet2);

function checkVoting (objeto){
    if(Object.hasOwn(objeto,"canVote" )){
        return objeto;
    }else{
        return 'El objeto no tiene la propieda'
    }
}

console.log(checkVoting(citizen2));


 
// Ejercicio 7
// Modifica la función checkVoting para que, si el resultado es negativo (si el objeto no tiene la propiedad canVote), se llame a la función checkCitizenship. Úsala con citizen2 y comprueba que funciona.


function checkVoting2 (objeto){
    if(Object.hasOwn(objeto,"canVote" )){
        return objeto;
    }else{
        return checkCitizenship(objeto)
    }
}

console.log(checkVoting2(citizen2));

// Ejercicio 8
// Dado el objeto de objetos que tienes aquí:
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


  function usersLogged (objeto){    
    let count = 0;
    for (let i in objeto ){
      if(objeto[i].isLoggedIn){
        count++
      }
    }
    return count
  }
  usersLogged(users)
  console.log(usersLogged(users));
//   let myObjetOfUser = users;
//   console.log(myObjetOfUser);

//   function usersLogged (Alex,Asab,Brook,Daniel,John,Paul){
//     if(Object.hasOwn(users, "isLoggedIn: true")){
//         return users;
        
//     }else{
//         return "El usuario no esta logueado"
//     }
// }
// usersLogged(myObjetOfUser)
// console.log(usersLogged(users.John));
//   console.log(usersLogged(users.Asab));
// Objeto de objetos
// Crea una función usersLogged que devuelva el número de usuarios que están logados (usuarios que tienen la propiedad isLoggedIn: true).
// Crea una función que imprima por consola los usuarios que tienen más de 50 puntos.

// function usersLogged(user,Asab,Brook,Daniel,John,Thomas, Paul){

function userPoint(objeto){
  let count = 0
    for ( let i in objeto){
      if(objeto[i].points >= 40){
        count++
      }
    }
    return count
}
userPoint(users)
console.log(userPoint(users));
// Crea una función que muestre por consola los usuarios que sabenReact.

function userReact(objeto){
  let skillsReact =[];
  for (let i in objeto){
    if(objeto[i].skills.includes('React')){
      skillsReact.push(i)
    }
  }
  return skillsReact;
}
console.log(userReact(users));



// Ejercicio 9
// Imagina que obtienes de la base de datos un array de objetos con los usuarios que están registrados en tu web (tienes el array al final del ejercicio). Crea los siguientes métodos:

// Una función llamada signUp que sirva para registrar a un usuario nuevo. Le pedirá name, email y password y creará un objeto con sus datos y un estado de logado (que por defecto será false).

//  Si el email ya está registrado en la lista de usuarios, devolverá un mensaje informando de que el usuario ya está registrado. Si no, introducirá al usuario en la lista, e informará de que se ha completado el registro.
//--------------------------------------------------------------------


// Crea la función signIn que acepte un email y una contraseña, compruebe si son correctos, y si lo son, cambie el estado de logado del usuario a true.
// Crea la función logOut que acepte un email y cambie el estado de logado del usuario a false.

// Crea la función deleteAccount que reciba un email, busque al usuario en cuestión, y lo elimine del array de usuarios.


const dataBase = [
    {
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        isLoggedIn: false
    },
    {
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        isLoggedIn: true
    },
    {
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        isLoggedIn: true
    },
    {
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        isLoggedIn: false
    },
    {
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        isLoggedIn: false
    }
];

function signUp(name, email, password){
  for (let i of dataBase ){
    if(i.email === email){
      alert("user alredy register");
    }else{
      return null
    }
  }
}
signUp(users);
console.log(signUp(users));




// const objectos = {
//     a: 1,
//     b: 2,
//     c: 30
// }

// for ( const prop in objectos){
//     console.log(`${prop} = ${objectos[prop]}`);
// }

