
import { createStore } from 'vuex'

// Se importan los STORE de los diferentes módulos.
import journalModule from "@/modules/daybook/store/journal";

const store = createStore({
    modules: {
        journal: journalModule,
    }
    
})

export default store