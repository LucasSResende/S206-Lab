package prova2.prova;

import com.intuit.karate.junit5.Karate;

class ProvaRunner {
    
    @Karate.Test
    Karate testProva() {
        return Karate.run("prova").relativeTo(getClass());
    }    

}