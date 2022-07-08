const movies_data = [
    {
        id: 0,
        image: "src/img/catch-me.jpg",
        title: "Catch Me If You Can",
        rating: 8.1,
        year: 2002,
        synopsis: "Un adolescente estafador (Leonardo DiCaprio) se hace pasar exitosamente por un piloto de una aerolínea, un cirujano y un abogado."
    },
    {
        id: 1,
        image: "src/img/wall-street.jpg",
        title: "The Wolf of Wall Street",
        rating: 8.2,
        year: 2013,
        synopsis: "La historia del corredor de bolsa neoyorquino Jordan Belfort, quien, con poco más de veinte años, fue apodado 'el lobo de Wall Street' por su enorme éxito y fortuna como fundador de la agencia bursátil Stratton Oakmont."
    },
    {
        id: 2,
        image: "src/img/revenant.jpg",
        title: "The Revenant",
        rating: 8,
        year: 2015,
        synopsis: "Hugh Glass, un trampero y explorador de finales del siglo XIX resulta herido de muerte por el ataque de un oso. Sus compañeros deciden dejarle para proseguir con la expedición. Glass deberá enfrentarse a un territorio hostil para poder vengarse de quienes lo abandonaron a su suerte, especialmente de la traición llevada a cabo por quien consideraba su fiel confidente."
    },
    {
        id: 3,
        image: "src/img/departed.jpg",
        title: "The Departed",
        rating: 8.5,
        year: 2006,
        synopsis: "Billy Costigan (Leonardo DiCaprio), policía del Sur de Boston, trabaja de forma encubierta para infiltrarse en la organización de la pandilla del jefe Frank Costello (Jack Nicholson). Como Billy se gana la confianza del gángster, un criminal de carrera llamado Colin Sullivan (Matt Damon) se infiltra en la policía y reporta sus actividades a los jefes de su sindicato. Cuando ambas organizaciones descubren que tienen a un enemigo en sus filas, Billy y Colin deben descubrir sus identidades."
    },
    {
        id: 4,
        image: "src/img/titanic.jpg",
        title: "Titanic",
        rating: 7.9,
        year: 1997,
        synopsis: "Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido. A bordo del buque conoce a Rose, una chica de clase alta que viaja con su madre y su prometido Cal, un millonario engreído a quien solo interesa el prestigio de la familia de su prometida. Jack y Rose se enamoran a pesar de las trabas que ponen la madre de ella y Cal en su relación. Mientras, el lujoso transatlántico se acerca a un inmenso iceberg."
    },
    {
        id: 5,
        image: "src/img/hollywood.jpg",
        title: "Once Upon a Time... in Hollywood",
        rating: 7.6,
        year: 2019,
        synopsis: "A finales de los 60, Hollywood empieza a cambiar y el actor Rick Dalton trata de adaptarse a los nuevos tiempos. Junto a su doble, ambos experimentan problemas para modificar sus hábitos, debido a lo enraizados que están. Al mismo tiempo, nace una relación entre Rick y la actriz Sharon Tate, que fue víctima de la familia Manson en la matanza de 1969."
    },
    {
        id: 6,
        image: "src/img/django.jpg",
        title: "Django Unchained",
        rating: 8.4,
        year: 2012,
        synopsis: "Un antiguo esclavo une sus fuerzas con un cazador de recompensas alemán que lo libera y ayuda a cazar a los criminales más buscados del Sur, todo ello con la esperanza de encontrar a su esposa perdida hace mucho tiempo."
    },
    {
        id: 7,
        image: "src/img/gatsby.jpg",
        title: "The Great Gatsby",
        rating: 7.2,
        year: 2013,
        synopsis: "Nick Carraway (Tobey Maguire), nativo del Medio Oeste, llega a Nueva York en 1922 en busca del sueño americano. Nick, un aspirante a escritor, se muda al lado del millonario Jay Gatsby (Leonardo DiCaprio) y al otro lado de la bahía de su prima Daisy (Carey Mulligan) y su esposo mujeriego, Tom (Joel Edgerton). Nick se involucra en un mundo cautivador de riqueza y, mientras observa sus ilusiones y engaños, escribe una historia de amor imposible, sueños y tragedia."
    },
    {
        id: 8,
        image: "src/img/island.jpg",
        title: "Shutter Island",
        rating: 8.2,
        year: 2010,
        synopsis: "Verano de 1954. Los agentes judiciales Teddy Daniels y Chuck Aule son enviados a una remota isla del puerto de Boston para investigar la desaparición de una peligrosa asesina recluida en el hospital psiquiátrico Ashecliffe, un centro penitenciario para criminales perturbados dirigido por el siniestro doctor John Cawley. Pronto descubrirán que el centro guarda muchos secretos y que la isla esconde algo más peligroso que los pacientes."
    },
    {
        id: 9,
        image: "src/img/diamante.jpg",
        title: "Blood Diamond",
        rating: 8,
        year: 2006,
        synopsis: "Mientras se desarrolla la guerra civil en Sierra Leona en los años noventa, dos hombres, un mercenario sudafricano blanco y un pescador, se unen para recuperar una gema extraña, de valor incalculable, que podría revertir el rumbo de sus vidas. Con la ayuda de una periodista estadounidense, los hombres se embarcan en un peligroso viaje a través de un territorio rebelde para lograr su objetivo."
    },
    {
        id: 10,
        image: "src/img/dont-look-up.jpg",
        title: "Don't Look Up",
        rating: 7.2,
        year: 2021,
        synopsis: "Dos astrónomos mediocres descubren que, en pocos meses, un meteorito destruirá el planeta Tierra. A partir de ese momento, intentan advertir a la humanidad del peligro que se avecina a través de los medios de comunicación."
    },
    {
        id: 11,
        image: "src/img/aviator.jpg",
        title: "The Aviator",
        rating: 7.5,
        year: 2004,
        synopsis: "Biografía del polifacético Howard Hughes, un hombre que con el poco dinero que heredó de su padre se trasladó a Hollywood, donde amasó una gran fortuna. Pero Hughes, además de productor, desempeñó un importante papel por sus innovaciones en aviación." 
    }
]