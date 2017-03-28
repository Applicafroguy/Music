import React from 'react';
import ReactDOM from 'react-dom';

// import style
import css from './app.scss';

// var back =  require('./back.jpg'); import MuiThemeProvider from
// 'material-ui/styles/MuiThemeProvider'; import RaisedButton from
// 'material-ui/RaisedButton'; import AppBar from 'material-ui/AppBar'; import
// FlatButton from 'material-ui/FlatButton'; import FontIcon from
// 'material-ui/FontIcon'; import {Card, CardActions, CardHeader, CardText} from
// 'material-ui/Card'; import { AutoRotatingCarousel, Slide } from
// 'material-auto-rotating-carousel' import { green400, green600, blue400,
// blue600, red400, red600 } from 'material-ui/styles/colors'

import {
    Button,
    NavItem,
    Embed,
    Badge,
    Space,
    ButtonCircle,
    Banner,
    Heading,
    Toolbar,
    Container,
    Base,
    CardImage,
    Text,
    Card
} from 'rebass';

var CLAudioPlayer = require('react-cl-audio-player');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var songs = [
    {
        url: 'http://tegos.kz/new/mp3_full/Redfoo_-_New_Thang.mp3',
        cover: 'http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg',
        artist: {
            name: 'Redfoo',
            song: 'New Thang'
        }
    }, {
        url: 'http://a.tumblr.com/tumblr_lpoc6cHNDP1r0jthjo1.mp3',
        cover: 'http://www.thailandballoonfestival.com/tibf2013/images/HugoSlider1.jpg',
        artist: {
            name: 'Hugo',
            song: '99 Problems'
        }
    }, {
        url: 'http://claymore.france.free.fr/momo/summer love.mp3',
        cover: 'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.j' +
                'pg',
        artist: {
            name: 'Justin Timberlake',
            song: 'Summer Love'
        }
    }, {
        url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
        cover: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
        artist: {
            name: 'Daft Punk',
            song: 'Get Lucky'
        }
    }, {
        url: 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
        artist: {
            name: 'Michael Buble',
            song: 'Feeling Good'
        }
    }, {
        url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
        cover: 'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9h' +
                'cmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1o' +
                'aWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
        artist: {
            name: 'The Weekend',
            song: 'Can\'t Fell My Face'
        }
    }, {
        url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
        cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
        artist: {
            name: 'Metallica',
            song: 'Fuel'
        }
    }
];
//var logo =  require('./loud.png'); var url = require("./logo.png");
const App = () => (
    <div>
        <header>
            <Toolbar>
                <NavItem is="a">
                    LOUD™
                </NavItem>
                <Space auto x={1}/>
                <NavItem is="a">
                    Jazz
                </NavItem>
                <NavItem is="a">
                    HipHop
                </NavItem>
                <NavItem is="a">
                    Login
                </NavItem>
            </Toolbar>
        </header>
        <Banner align="center" backgroundImage={require('./back.jpg')}>
            <Heading level={2} size={0}>
                Loud
                <p className="P">Join the movement and share your Music with the world</p>
                <p>or become a Fan and help Artist to create Music that will change your world.</p>
                <Button >Create Account</Button> <Button >Top Charts</Button>
            </Heading>
            <div className="image-container"></div>
        </Banner>
        <Container>
            {/*Trending Music*/}


            {/*Top 20 Downloads*/}
        </Container>
        <footer>
            LOUD™ © 2017 APPLICAFRO
        </footer>
    </div>

);

ReactDOM.render(
    <App/>, document.getElementById('root'));