var oldquotes = [
    'Creativity is knowing how to hide your sources. ― C.E.M. Joad',
    'We have to continually be jumping off cliffs and developing our wings on the way down. - Kurt Vonnegut',
    'Don\'t be satisfied with stories, how things have gone with others. Unfold your own myth. - Rumi',
    'Great minds discuss ideas. Average minds discuss events. Small minds discuss people. - Henry Thomas Buckle'
]

//Note: if you use DOUBLE quotes "" then you don't have to escape single quotes

var quotes = [
    'We have to continually be jumping off cliffs and developing our wings on the way down.― Kurt Vonnegut, If This Isn\'t Nice, What Is?Advice for the Young',
    'Don\'t be satisfied with stories, how things have gone with others. Unfold your own myth.― Rumi, The Essential Rumi',
    'Great minds discuss ideas. Average minds discuss events. Small minds discuss people.― Henry Thomas Buckle',
    'Others have seen what is and asked why. I have seen what could be and asked why not. ― Pablo Picasso, Pablo PicassoMetamorphoses of the Human Form Graphic Works, -',
    'Imagination is everything. It is the preview of life\'s coming attractions.― Albert Einstein',
    'Creativity takes courage. ― Henri Matisse',
    'Learn the rules like a pro, so you can break them like an artist.― Pablo Picasso',
    'I never made one of my discoveries through the process of rational thinking― Albert Einstein',
    'Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination. Devour old films, new films, music, books, paintings, photographs, poems, dreams, random conversations, architecture, bridges, street signs, trees, clouds, bodies of water, light and shadows. Select only things to steal from that speak directly to your soul. If you do this, your work (and theft) will be authentic. Authenticity is invaluable; originality is non-existent. And don’t bother concealing your thievery - celebrate it if you feel like it. In any case, always remember what Jean-Luc Godard saidIt’s not where you take things from - it’s where you take them to.\[MovieMaker Magazine # - Winter, January ,  ]― Jim Jarmusch',
    'The worst enemy to creativity is self-doubt.― Sylvia Plath, The Unabridged Journals of Sylvia Plath',
    'Around here, however, we don\'t look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we\'re curious...and curiosity keeps leading us down new paths.― Walt Disney Company',
    'To be creative means to be in love with life. You can be creative only if you love life enough that you want to enhance its beauty, you want to bring a little more music to it, a little more poetry to it, a little more dance to it.― Osho',
    'An idea that is not dangerous is unworthy of being called an idea at all.― Oscar Wilde',
    'There are painters who transform the sun to a yellow spot, but there are others who with the help of their art and their intelligence, transform a yellow spot into sun― Pablo Picasso',
    'Doors are for people with no imagination.― Derek Landy, Skulduggery Pleasant',
    'When you make music or write or create, it\'s really your job to have mind-blowing, irresponsible, condomless sex with whatever idea it is you\'re writing about at the time. ― Lady Gaga',
    'The painter has the Universe in his mind and hands.― Leonardo da Vinci',
    'One must still have chaos in oneself to be able to give birth to a dancing star.― Friedrich Nietzsche',
    'You can never solve a problem on the level on which it was created.― Albert Einstein',
    'The chief enemy of creativity is good sense.― Pablo Picasso',
    'There is a vitality, a life force, an energy, a quickening that is translated through you into action, and because there is only one of you in all time, this expression is unique. And if you block it, it will never exist through any other medium and will be lost.― Martha Graham',
    'Vulnerability is the birthplace of innovation, creativity and change.― Brene Brown',
    'You have to be burning with an idea, or a problem, or a wrong that you want to right. If you\'re not passionate enough from the start, you\'ll never stick it out.― Steve Jobs',
    'The truly creative mind in any field is no more than thisA human creature born abnormally, inhumanly sensitive. To him... a touch is a blow, a sound is a noise, a misfortune is a tragedy, a joy is an ecstasy, a friend is a lover, a lover is a god, and failure is death. Add to this cruelly delicate organism the overpowering necessity to create, create, create -- so thatwithout the creating of music or poetry or books or buildings or something of meaning, his very breath is cut off from him. He must create, must pour out creation. By some strange, unknown, inward urgency he is not really alive unless he is creating.― Pearl S. Buck',
    'A rock pile ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral.― Antoine de Saint-Exupery, The Little Prince',
    'If you\'re not prepared to be wrong, you\'ll never come up with anything original.― Ken Robinson, The ElementHow Finding Your Passion Changes Everything',
    'A tragedy is a tragedy, and at the bottom, all tragedies are stupid. Give me a choice and I\'ll take A Midsummer Night\'s Dream over Hamlet every time. Any fool with steady hands and a working set of lungs can build up a house of cards and then blow it down, but it takes a genius to make people laugh.― Stephen King',
    'Rejection is an opportunity for your selection.― Bernard Branson',




]

var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}