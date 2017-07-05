import { Component } from '@angular/core';
import { ArtistItemComponent } from './component.artist-item';

export class Artist {
  name: string;
  genre: string;
  image: string;
}

@Component({
  selector: 'app',
  templateUrl: './partials/app.html',
  styleUrls: [ './css/app.css' ]
})

export class AppComponent {
  artists = ARTISTS;
  currentArtist: Artist;

  showArtist(item) {
    this.currentArtist = item;
  }

  onSearchChange() {
    this.currentArtist = '';
  }
}


const ARTISTS: Artist[] = [
  {
    name: 'Hozier',
    genre: 'Indie Rock',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Cherry_Wine_%28Hozier_song%29.jpg',
    bio: "A unique and intelligent singer, songwriter, and multi-instrumentalist who cites James Joyce's Portrait of an Artist as a Young Man, Leonard Cohen, John Lee Hooker, and community choral singing among his influences, Hozier (his stage and performing name) was born Andrew Hozier-Byrne on March 17, 1990 (which just so happened to be St. Patrick's Day) in Bray, County Wicklow, Ireland. The son of a local blues musician, he literally grew up with the blues being played all around him. He joined his first band when he was 15, gravitating toward R&B, soul, gospel, and, of course, blues. Hozier started studying for a degree in music at Trinity College Dublin, where he was involved with the Trinity Orchestra, but dropped out in his first year to record demos for Universal Music. From 2009 to 2012, he sang with Anúna, an Irish choral group, and toured internationally. He released a solo EP, Take Me to Church, in 2013, and when a video for the powerful title track, which directly addresses gay discrimination in Russia, went viral on YouTube and Reddit, Hozier found himself with an international audience. A second EP, From Eden, appeared in the spring of 2014 and in September of that year, Columbia released his eponymous debut album. It reached the Top Ten of the charts in no less than 11 countries, and was quickly certified gold in Canada and Great Britain. ~ Steve Leggett, Rovi",
    spotifyURL: 'https://open.spotify.com/artist/2FXC3k01G6Gw61bmprjgqS'
  },
  {
    name: 'Ed Sheeran',
    genre: 'Pop Music',
    image: 'https://vignette3.wikia.nocookie.net/fifthharmony/images/5/57/Ed%2BSheeran%2BPNG%2B2nd%2Bversion.png/revision/latest?cb=20130320210650',
    bio: "Flame-haired singer/songwriter, beatboxer, and guitarist Ed Sheeran's eclectic blend of acoustic pop, folk, and hip-hop has been championed by everyone from the underground grime scene to American Oscar winners. Born in Halifax, West Yorkshire, England in 1991, Sheeran released his first EP, The Orange Room, while still at school, and his first two albums -- his self-titled debut and Want Some -- by the age of 16. After moving to London to gain more live experience, his performance of the self-penned 'You Need Me, I Don't Need You' on YouTube channel SB.tv gained half-a-million viewers and attracted the attention of actor/R&B star Jamie Foxx, who invited him to appear on his Los Angeles Sirius radio show.",
    spotifyURL: 'https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V'
  },
  {
    name: 'Michael Jackson',
    genre: 'Pop',
    bio: "Michael Jackson wasn't merely the biggest pop star of his era, shaping the sound and style of the '70s and '80s; he was one of the defining stars of the 20th century, a musician who changed the contours of American culture. A preternaturally gifted singer and dancer, Jackson first rose to stardom in 1969 as the 11-year-old frontman for his family's band, the Jackson 5. As remarkable a run as the Jackson 5 had -- at the dawn of the '70s, each of their first four singles went to number one and they stayed near the top of the charts for the next five years -- it all served as a preamble to Jackson's solo career. Off the Wall, the dazzling 1979 album co-produced by Quincy Jones, announced Jackson as a mature talent, and the singles 'Don't Stop 'til You Get Enough' and 'Rock with You' turned it into a blockbuster. Despite its success, Jackson believed Off the Wall was pigeonholed as an R&B record. Determined to break through this glass ceiling, he reunited with Jones to create Thriller, the 1982 album that shattered every music record on the books. Thriller was designed to appeal to every audience and its diversity was evident by its guests: he enlisted Eddie Van Halen to play guitar on the hard rock of 'Beat It' while inviting Paul McCartney to duet on the chipper soft pop tune 'The Girl Is Mine.' Jackson also expanded the horizons of soul and dance music, producing pioneering masterpieces like 'Billie Jean.' This single provided Thriller with its 1983 breakthrough, thanks in part to its groundbreaking music video, which became the first clip from a black artist to enter steady rotation on the fledgling MTV. Jackson's smashing of the network's racial barriers was only one aspect of Thriller's unprecedented crossover. Seven of its nine songs were Top 10 hits, it earned eight Grammy awards, and topped the Billboard charts for 37 weeks, matching its American success internationally to become the biggest-selling album of all time, earning 32 platinum certifications in the US and moving over 100 million albums worldwide. Such a phenomenal triumph pushed Jackson into the stratosphere and Bad -- the eagerly-anticipated 1987 sequel to Thriller, co-produced once again with Quincy Jones -- kept him there, generating five number one singles on the Billboard charts and selling 30 million copies internationally, two thirds of which were outside of the US. Jackson parted ways with Jones for 1991's Dangerous, another global blockbuster. HIStory, a 1995 double-disc set that paired a disc of hits with a new album, produced a couple of international number one singles. Invincible, his 2001 album, turned out to be his last. Health problems culminated in his untimely death in the summer of 2009, but at that point Jackson's legend was safe: he stood alongside Louis Armstrong, Frank Sinatra, Hank Williams, Elvis Presley, Miles Davis, and Bob Dylan as one of the musicians that created the sound of America in the 20th century.",
    image: 'https://s-media-cache-ak0.pinimg.com/originals/1e/46/d8/1e46d87fbd064523a2f1ac7a203a687f.jpg',
    spotifyURL: 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm'
  },
  {
    name: 'The Wonder Years',
    genre: 'Pop Punk',
    bio: "Taking its name from the TV show The Wonder Years, the Philadelphia punk pop band was formed by guitarists Matt Brasch and Casey Cavaliere, vocalist Dan 'Soupy' Campbell, bassist Josh Martin, drummer Mike Kennedy, and keyboardist Mikey Kelly. The sextet got its start in 2005 when previous combo the Premier split up. Regrouping under the new name, the band began playing shows and released two split singles that year (with Bangarang! and Emergency and I). In late 2007, the Wonder Years self-released an album, the emphatically titled Get Stoked on It!, and quickly caught the eye of California label No Sleep, which signed the band. Their first record for the label was the EP Won't Be Pathetic Forever, which came out in June of 2008. Following a split single with All or Nothing, Kelly left the band. After a year spent recording its second album, the group released The Upsides in January of 2010. The record made a dent in the lower regions of the Billboard charts, and also gained the Wonder Years a deal with the larger indie Hopeless, which reissued the album in September with four bonus tracks. In the time between releases, drummer Kennedy quit the band and was replaced by Nick Steinborn. Kennedy soon returned to the fold and Steinborn bounced over to play keys and guitar. With the lineup solidified, the Wonder Years got to work on their next album with producer Steve Evetts. In 2011, they released their third album, Suburbia I've Given You All and Now I'm Nothing, followed by the arrival of a B-sides compilation, Sleeping on Trash, as well as their fourth full-length album, The Greatest Generation, in 2013. The following year, lead singer Campbell released his first album with his solo project Aaron West and the Roaring Twenties, We Don't Have Each Other, with Campbell adopting the persona of Aaron West in his songs. After Campbell returned from a tour with the Roaring Twenties, he began working on songs for the next Wonder Years project, but suffered a powerful case of writer's block that triggered a severe bout with depression. Campbell eventually channeled the emotions stirred up by his struggles into the group's fifth studio album, 2015's No Closer to Heaven, a concept piece about coming to terms with the death of a loved one. ~ Tim Sendra, Rovi",
    image: 'https://images-na.ssl-images-amazon.com/images/I/A1I7mQVKC3L._SX385_.jpg',
    spotifyURL: 'https://open.spotify.com/artist/0nq64XZMWV1s7XHXIkdH7K'
  },
  {
    name: 'The Revivalists',
    genre: 'Soul Music',
    bio: "A group of roots rock iconoclasts who call New Orleans home, the Revivalists formed in 2007 and wound up gaining traction in the early years of the next decade, with their second album, City of Sound, appearing on the Billboard charts upon its re-release from Wind-Up Records in the spring of 2014. Vocalist David Shaw, guitarist Zack Feinberg, pedal steel player Ed Williams, bassist George Gekas, drummer Andrew Campanelli, saxophonist Rob Ingraham, and keyboardist/trumpeter Michael Girardot became known for their amalgam of rock, R&B, soul, country, and funk in New Orleans in the closing days of the 2000s, releasing an eponymous EP in 2008. Two years later, the full-length Vital Signs appeared and they began getting good reviews for their opening sets for the Rebirth Brass Band along with their constant touring and festival appearances. A second album produced by Ben Ellman called City of Sound appeared independently in 2012. In 2013, they signed with Wind-Up Records and set out to record their third album. In the meantime, Wind-Up reissued City of Sound in the spring of 2014 and it wound up hitting the lower reaches of the Billboard 200. Recorded straight to tape, Men Amongst Mountains, the band's third studio long player, arrived in July 2015.~ Stephen Thomas Erlewine",
    image: "http://goseelivemusic.co/wp-content/uploads/2016/09/635830231446573213-The-Revivalists-Photo-Credit-Travis-Shinn-09.jpg",
    spotifyURL: "https://open.spotify.com/artist/5kuJibJcwOC53s3OkoGMRA"
  },
  {
    name: 'Sammy Davis Jr',
    genre: 'Big Band',
    bio: "Recognized throughout much of his career as 'the world's greatest living entertainer,' Sammy Davis, Jr. was a remarkably popular and versatile performer equally adept at acting, singing, dancing, and impersonations -- in short, a variety artist in the classic tradition. A member of the famed Rat Pack, he was among the very first African-American talents to find favor with audiences on both sides of the color barrier, and remains a perennial icon of cool. Born in Harlem on December 8, 1925, Davis made his stage debut at the age of three performing with Holiday in Dixieland, a black vaudeville troupe featuring his father and helmed by his de facto uncle, Will Mastin; dubbed 'Silent Sam, the Dancing Midget,' he proved phenomenally popular with audiences and the act was soon renamed Will Mastin's Gang Featuring Little Sammy. At the age of seven, Davis made his film debut in the legendary musical short Rufus Jones for President, and later received tap-dancing lessons courtesy of the great Bill 'Bojangles' Robinson. In 1941, the Mastin Gang opened for Tommy Dorsey at Detroit's Michigan Theater; there Davis first met Dorsey vocalist Frank Sinatra -- the beginning of a lifelong friendship.",
    image: "http://dl9fvu4r30qs1.cloudfront.net/5d/52/d4cb97a947f9b139186335e6d63a/sammy-davis-jr.jpg",
    spotifyURL: "https://open.spotify.com/artist/1NAWG3AngjBXyKbmPaz92D"
  },
  {
    name: 'X Ambassadors',
    genre: 'Indie Rock',
    image: 'http://msmecho.com/wp-content/uploads/2015/09/x-ambassadors-wrmf.jpg',
    bio: "Ithaca, New York-based X Ambassadors make passionate, dark, electronic-based pop centered around the throaty, soulful vocals of Sam Harris. Formed in 2009, X Ambassadors also feature Harris' keyboardist brother Casey Harris, childhood friend/guitarist Noah Feldshuh, and drummer Adam Levin. Originally going by the name Ambassadors, they released a self-titled EP in 2009. To the bandmembers' surprise, their song 'Litoist' garnered online buzz and was eventually put into rotation on Virginia's 96X radio station. Another song, 'Unconsolable,' also drew listeners, and the attention helped score the group a management deal and recording contract. In 2013, the newly minted X Ambassadors released their sophomore EP, Love Songs Drug Songs, on Interscope. They then joined Imagine Dragons and Jimmy Eat World on tour. The following year, the band received wider exposure when 'The Jungle,' a collaboration with Jamie N Commons, was featured in a commercial for Dr. Dre's electronics/headphones company Beats. On the heels of this success, X Ambassadors released their third EP, The Reason. In 2015 they released their debut full-length, VHS, which featured production from Alex da Kid and included the hit singles 'Renegades' and 'Unsteady.' The album reached number seven on the Billboard 200 and was re-released as a special edition in 2016 with five additional songs, including an appearance by Tom Morello. That same year, they featured on the Knocks track 'Comfortable' and on the double-platinum 'Sucker for Pain,' the all-star collaborative effort for the Suicide Squad soundtrack that found the band alongside Lil Wayne, Wiz Khalifa, Imagine Dragons, Logic, and Ty Dolla $ign. In 2017 the quartet released the charity single 'Hoping,' with proceeds going to the American Civil Liberties Union. ~ Matt Collar, Rovi",
    spotifyURL: 'https://open.spotify.com/artist/3NPpFNZtSTHheNBaWC82rB'
  },
  {
    name: 'Lukas Graham',
    genre: 'Funk',
    image: 'http://www.lukasgraham.com/sites/g/files/g2000005361/f/styles/935x901/public/201511/12145423_705214212912272_1908595387_n.jpg?itok=OJ-auyeh',
    bio: "From the free-living enclave of Christiania in Copenhagen, Lukas Graham Forchhammer and his boys -- Mark 'Lovestick' Falgren on drums, Morten Ristorp on keys, and Magnus 'Magnum' Larsson on bass -- have crafted a combination of funky pop and R&B stylings, which made them popular in their home country of Denmark. With his soulful delivery and honest lyrics, Graham recounted tales of family strife, poor decisions, and the celebration of life, all inextricably entwined with his years spent in Christiania. The young Graham's musical influences ranged from classical -- gained during his childhood experiences with the Copenhagen Boys' Choir -- to the Beatles and the Stones, as well as the Prodigy and Dr. Dre, whose Chronic 2001 was one of the most influential albums for Graham. Despite a less-privileged childhood, his parents were strong role models and much of that love was reflected in heartfelt songs like 'Mama Said' and 'Moving Alone.' In early 2012, he released his first album, a self-titled effort that included 'Drunk in the Morning,' which went on to become a hit throughout Europe. Once they received more international exposure, they were signed to Warner Bros. in 2013. A second self-titled album -- nicknamed the 'Blue Album' -- was released in late 2015 and featured the international hit '7 Years.' It went on to sit atop the Danish charts for an impressive 18 weeks and peaked at number two on the Billboard Hot 100. ~ Neil Z. Yeung, Rovi",
    spotifyURL: 'https://open.spotify.com/artist/25u4wHJWxCA9vO0CzxAbK7'
  },
  {
    name: 'Sublime With Rome',
    genre: 'Reggae',
    image: 'https://pbs.twimg.com/profile_images/839558156925558784/jQFgP5k0.jpg',
    bio: "After frontman Bradley Nowell's death brought an end to the group Sublime, surviving members Eric Wilson (bass) and Bud Gaugh (drums) formed the Long Beach Dub All-Stars before returning to the Sublime catalog in 2009 with a revised lineup named Sublime with Rome. The 'Rome' is Rome Ramirez, a singer/guitarist with whom band first played some gigs in 2009 as Sublime. They became Sublime with Rome a year later, the result of a legal hang-up with Nowell's estate, and launched a cross-country tour of America. In 2011, Fueled by Ramen released the group's first album, Yours Truly. Gaugh left the band in 2015 and was replaced by Devo and Vandals drummer Josh Freese, who appeared on that year's album Sirens. ~ David Jeffries, Rovi",
    spotifyURL: "https://open.spotify.com/artist/3XXrhkZKSGd3CUJQFnx5tQ"
  },
  {
    name: "Iration",
    genre: 'Reggae',
    image: 'http://images.sk-static.com/images/media/profile_images/artists/84879/huge_avatar',
    bio: "Although all members originally hail from Hawaii, the reggae-rock group Iration launched their career in Isla Vista, California, a college town near Santa Barbara. With their laid-back sound and pop melodies, the band was an instant hit on the California college circuit. In 2006, their growing fan base got a chance to bring a little Iration back to the dorm when the band released its New Roots EP. The next year saw them release their debut album, No Time for Rest, which featured a guest shot from reggae legend Mikey Dread. A tour with Pepper followed in 2008 along with the EP Sample This. Touring kept the band busy until 2010 when the album Time Bomb arrived. They revisited the EP format a year later with Fresh Grounds, while their 2015 release Hotting Up topped Billboard's Reggae Albums chart. ~ David Jeffries, Rovi",
    spotifyURL: 'https://open.spotify.com/artist/0q9lPhJHW5R9J7RXIJRbTk'
  }
]
