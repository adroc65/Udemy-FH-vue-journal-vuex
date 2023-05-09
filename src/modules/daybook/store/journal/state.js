// Estructura basica de los "STATE"
// ---------------------------------
// dentro de las exportación se agregan los objetos reactivos.

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //1398762345
            date: new Date().toDateString(), // sat 23, julio
            text: 'Es tan corto el amor y tan largo el olvido. Amo tus pies porque anduvieron sobre la tierra y sobre el viento y sobre el agua, hasta que me encontraron. Me gustas cuando callas porque estás como ausente y me oyes desde lejos, y mi voz no te toca. Parece que los ojos se te hubieran volado y parece que un beso te cerrara la boca',
            picture: null, //https://
        },
        {
            id: new Date().getTime() + 100, //1398762345
            date: new Date().toDateString(), // sat 23, julio
            text: 'De noche sueño que tú y yo somos dos plantas que se elevaron juntas, con raíces enredadas, y que tú conoces la tierra y la lluvia como mi boca porque de tierra y de lluvia estamos hechos. ¿Sufre más aquél que espera siempre que aquél que nunca esperó a nadie?. Así te espero como casa sola. Y volverás a verme y habitarme. De otro modo me duelen las ventanas',
            picture: null, //https://
        },
        {
            id: new Date().getTime() + 200, //1398762345
            date: new Date().toDateString(), // sat 23, julio
            text: 'Era mi destino amar y decir adiós. Por las noches, amada, amarra tu corazón al mío, y que ellos en sus sueños derroten la oscuridad. Y desde entonces soy porque tú eres, y desde entonces eres, soy y somos, y por amor seré, serás, seremos. Ella -la que me amaba- se murió en primavera…y se llevó la primavera al cielo',
            picture: null, //https://
        },

    ],
})