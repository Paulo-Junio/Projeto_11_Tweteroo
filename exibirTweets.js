function exibirTweets(tweets,usuarios){
    const ultimosDezTweets =[];
    const tamanhoDoArrayDeTweets = tweets.length;
    let inicioParaLeitura = 0;

    if (tamanhoDoArrayDeTweets > 10){
        inicioParaLeitura = tamanhoDoArrayDeTweets - 10;
    } 
 
    for (let i = inicioParaLeitura; i < tamanhoDoArrayDeTweets; i++){
        const usuarioTweet= tweets[i].username;
        const tweet = tweets[i].tweet;

        const buscaAvatar = usuarios.find(usuario => usuario.username === usuarioTweet);

        if (buscaAvatar){
            const post = {...buscaAvatar, tweet}
            ultimosDezTweets.push(post)
        }
    }

    return ultimosDezTweets
};

export default exibirTweets;
