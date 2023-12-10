// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            benvenuto: "benvenuti a tutti!!"
        }
    }

}).mount('#title')