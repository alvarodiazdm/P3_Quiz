
const{log,biglog,errorlog,colorize} = require("./out");
const model = require("./model");

/**
 * Muestra la ayuda.
 */
const helpCmd = () => {
    log("Comandos:");
    log(" h | help - Muestra esta ayuda.");
    log(" list - Listar los quizzes existentes.");
    log(" show <id> - Muestra la pregunta y la respuesta del quiz indicado.");
    log(" add - Añadir un nuevo quiz interactivamente.");
    log(" delete <id> - Borrar el quiz indicado.");
    log(" edit <id> - Editar el quiz indicado.");
    log(" test <id> - Probar el quiz indicado.");
    log(" p | play - Jugar a preguntar aleatoriamente por los quizzes.");
    log(" credits - Créditos.");
    log(" q | quit - Salir del programa.");
    rl.prompt();
};

/**
 *Lista todos los quizzes existentes en el modelo.
 */
const listCmd = () => {
    log('Listar todos los quizzes existentes');
    rl.prompt();
};

/**
 * Salir del programa.
 */
const quitCmd = () => {
    rl.close();
};

/**
 * Añade un nuevo quiz interactivamente.
 */
const addCmd = () => {
    log('Añadir un nuevo quiz.');
    rl.prompt();
};

/**
 * Muestra la pregunta y la respuesta del quiz indicado.
 */
const showCmd = id => {
    log('Mostrar el quiz indicado');
    rl.prompt();
};

/**
 * Prueba el quiz indicado.
 */
const testCmd = id => {
    log('Probar el quiz indicado');
    rl.prompt();
};

/**
 * Jugar a preguntar aleatoriamente por los quizzes.
 */
const playCmd = () => {
    log('Jugar');
    rl.prompt();
};

/**
 * Borra el quiz indicado.
 */
const deleteCmd = id => {
    log('Borrar el quiz indicado');
    rl.prompt();
};

/**
 * Edita el quiz indicado.
 */
const editCmd = id => {
    log('Editar el quiz indicado');
    rl.prompt();
};

/**
 * Creditos.
 */
const creditsCmd = () => {
    log('Autores de la practica:');
    log('Alvaro Diaz del Mazo');
    log('Alonso Espasandin Hernan');
    rl.prompt();
};

exports = module.exports = {
    helpCmd,
    addCmd,
    showCmd,
    playCmd,
    editCmd,
    deleteCmd,
    creditsCmd,
    quitCmd,
    listCmd,
    testCmd
};