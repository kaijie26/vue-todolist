// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

var app = new Vue (
    {
        el: '#root',
        data: {
            todos: [
                {
                    todo: 'Fare i compiti',
                    done: false,
                },
                {
                    todo: 'Fare la spesa',
                    done: true,
                },
                {
                    todo: 'Fare il bucato',
                    done: false,
                }
            ],

            userNewInput: '',  

            

        },

        methods: {
            // Funzione al click della croce rimuove la todo 
            removeTodo(index){
                this.todos.splice(index, 1);

            },

            // Funzione al click del bottone 'Aggiungi' crea una nuova todo
              // Crea una nuova todo solo se la input che inserisce l'utente non sia vuota 
            addNewTodo(){
                if(this.userNewInput.length > 0 ) {
                    const userNewObject = {
                        todo: this.userNewInput,
                        done: false,
                    };
    
    
                    this.todos.push(userNewObject);
                    this.userNewInput = '';
                    
                };

            },
            
            // Funzione al clcik che rimuove o riassegna la linea sbarrata
            listDone(singletodo){
                if(singletodo.done === false) {
                    singletodo.done = true;

                }else{
                    singletodo.done = false;

                }
                   
            }
            
        },

    } 
)