
// functions for disc information

document.getElementById('img1').addEventListener('click', function() {
    document.getElementById('albumInfo').innerHTML = 
    '<h1>O que é o Lorem Ipsum?</h1><br/>' +
    '<h2>Porque é que o usamos?</h2>' +
    '<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore aut harum ipsam eveniet tempore beatae consequatur id alias dignissimos iusto nostrum repellendus expedita, rem saepe repudiandae, dicta error ab! </h5><br/>' +
    '<h2>De onde é que ele vem?</h2>' +
    '<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore aut harum ipsam eveniet tempore beatae consequatur id alias dignissimos iusto nostrum repellendus expedita, rem saepe repudiandae, dicta error ab!</h5><br/>' +
    '<h2>Onde posso arranjar algum?</h2>' +
    '<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore aut harum ipsam eveniet tempore beatae consequatur id alias dignissimos iusto nostrum repellendus expedita, rem saepe repudiandae, dicta error ab!</h5>';
});


document.getElementById('img2').addEventListener('click', function() {
    document.getElementById('albumInfo').innerHTML = 
    '<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">' +
        '<h1>O que é o Lorem Ipsum?</h1><br/>' +
        '<h2>Porque é que o usamos?</h2>' +
        '<h5 style="text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore aut harum ipsam eveniet tempore beatae consequatur id alias dignissimos iusto nostrum repellendus expedita, rem saepe repudiandae, dicta error ab! </h5><br/>' +
    '</div>';
});



document.getElementById('img3').addEventListener('click', function() {
    document.getElementById('albumInfo').innerHTML = 
    '<h1 class="animated">O que é o Lorem Ipsum?</h1><br/>' +
    '<h2>Porque é que o usamos?</h2>' +
    '<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore aut harum ipsam eveniet tempore beatae consequatur id alias dignissimos iusto nostrum repellendus expedita, rem saepe repudiandae, dicta error ab! </h5><br/>' +
    '<h2 class="animated">De onde é que ele vem?</h2>' +
    '<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore aut harum ipsam eveniet tempore beatae consequatur id alias dignissimos iusto nostrum repellendus expedita, rem saepe repudiandae, dicta error ab!</h5><br/>' +
    '<h2>Onde posso arranjar algum?</h2>' +
    '<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore aut harum ipsam eveniet tempore beatae consequatur id alias dignissimos iusto nostrum repellendus expedita, rem saepe repudiandae, dicta error ab!</h5>';
});



document.getElementById('img4').addEventListener('click', function() {
    document.getElementById('albumInfo').innerHTML = 
    '<img src="images/1.jpeg" alt="picOne" width="250" height="250">' +
    '<img src="images/2.jpeg" alt="picTwo" width="250" height="250">' +
    '<img src="images/3.jpeg" alt="picThree" width="250" height="250">' +
    '<img src="images/4.jpeg" alt="picFour" width="250" height="250">';
});






// functions to follow button link

document.getElementById('musicButton').addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/user/53bvzoreoljjpoudmxwncgecx';
});

document.getElementById('freeButton').addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/intl-pt';
});

document.getElementById('premiumButton').addEventListener('click', function() {
    window.location.href = 'https://www.spotify.com/br-pt/premium/';
});