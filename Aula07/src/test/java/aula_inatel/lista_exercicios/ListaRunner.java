package aula_inatel.lista_exercicios;

import com.intuit.karate.junit5.Karate;

class ListaRunner {
    
    @Karate.Test
    Karate testLista() {
        return Karate.run("lista").relativeTo(getClass());
    }    

}