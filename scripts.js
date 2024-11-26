document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('survival-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que el formulario se envíe

        // Obtiene el nombre del usuario
        var nombre = document.getElementById('nombre').value;

        // Define las probabilidades de cada destino
        var probabilidadSobrevivir = 0.0001; // 0.01%
        var probabilidadCaos = 0.2;
        var probabilidadTiránidos = 0.15;
        var probabilidadWaaaagh = 0.15;
        var probabilidadEldars = 0.1;
        var probabilidadCommorragh = 0.1;
        var probabilidadNecrones = 0.1;
        var probabilidadCaballerosGrises = 0.1;
        var probabilidadHereje = 0.1;

        // Genera un número aleatorio entre 0 y 1
        var random = Math.random();

        // Compara el número aleatorio con las probabilidades para determinar el destino
        if (random < probabilidadSobrevivir) {
            alert("¡" + nombre + ", felicidades! ¡Sobrevivirías en Warhammer 40,000!");
        } else if (random < probabilidadSobrevivir + probabilidadCaos) {
            alert("Lo siento, " + nombre + ", te han consumido los dioses del caos.");
        } else if (random < probabilidadSobrevivir + probabilidadCaos + probabilidadTiránidos) {
            alert("Lo siento, " + nombre + ", te ha devorado un enjambre tiránido.");
        } else if (random < probabilidadSobrevivir + probabilidadCaos + probabilidadTiránidos + probabilidadWaaaagh) {
            alert("Lo siento, " + nombre + ", has caído bajo el asedio de un Waaaagh orko.");
        } else if (random < probabilidadSobrevivir + probabilidadCaos + probabilidadTiránidos + probabilidadWaaaagh + probabilidadEldars) {
            alert("Lo siento, " + nombre + ", te han asesinado los Eldar.");
        } else if (random < probabilidadSobrevivir + probabilidadCaos + probabilidadTiránidos + probabilidadWaaaagh + probabilidadEldars + probabilidadCommorragh) {
            alert("Lo siento, " + nombre + ", te han encarcelado en Commorragh y los drukhari te torturarán por la eternidad.");
        } else if (random < probabilidadSobrevivir + probabilidadCaos + probabilidadTiránidos + probabilidadWaaaagh + probabilidadEldars + probabilidadCommorragh + probabilidadNecrones) {
            alert("Lo siento, " + nombre + ", has muerto contra los necrones.");
        } else if (random < probabilidadSobrevivir + probabilidadCaos + probabilidadTiránidos + probabilidadWaaaagh + probabilidadEldars + probabilidadCommorragh + probabilidadNecrones + probabilidadCaballerosGrises) {
            alert("Lo siento, " + nombre + ", te han asesinado luego de ser salvado por los Caballeros grises.");
        } else {
            alert("Lo siento, " + nombre + ", has muerto por hereje.");
        }
    });
});
