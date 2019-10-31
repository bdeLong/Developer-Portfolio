(this["webpackJsonpben-delong-portfolio"]=this["webpackJsonpben-delong-portfolio"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"items":[{"title":"BeerMe","description":"BeerMe is a full stack, mobile first application that helps recommend Chicago beers based on your current mood/situation.","link":"https://hopstuff.herokuapp.com","github":"https://github.com/bdeLong/BeerMe","img":"beerme.png"},{"title":"Hello World","description":"Hello World is a full stack application with the goal of creating a a different kind of experience for anyone traveling the world. (Hosted on Heroku, so it may take a bit to load.)","link":"https://final-project-3.herokuapp.com/","github":"https://github.com/los-programadores/dreamteam","img":"helloworld.png"},{"title":"Poll Pal","description":"This is an application created to make reading and understanding your ballot as easy as possible come election time.","link":"https://bdelong.github.io/Poll-Pal/","github":"https://github.com/bdeLong/Poll-Pal","img":"pollpal.png"},{"title":"Siri Ripoff","description":"This is a terminal based Node app.  I created a personal assistant called Liri (limited Siri) which can help you find concert dates for an artist, search Spotify for a song, and search for movie information in IMDB.","github":"https://github.com/bdeLong/liri-node-app","img":"liri.png"},{"title":"Fifty Shades of Grey React Game","description":"This is a memory/guessing click game made with React. Click the colors without clicking one that has been clicked before.","link":"https://bdelong.github.io/50-Shades-of-Clicked/","github":"https://github.com/bdeLong/50-Shades-of-Clicked","img":"50shades.png"},{"title":"Crystal Collector","description":"This is a simple math based Javascript game utlizing jQuery, themed to Adult Swim\'s show Rick and Morty. If you like adding numbers together this will scratch your itch. ","link":"https://bdelong.github.io/crystal-collector/","github":"https://github.com/bdeLong/crystal-collector","img":"crystal.png"},{"title":"Bad Amazon","description":"Another terminal based Node app that mimics Amazon. Utilizing MySQL, the application lets you can search for items, add them to your cart, and checkout, and updates inventory.  Look out Jeff Bezos!","github":"https://github.com/bdeLong/Bamazon","img":"bamazon.png"},{"title":"WWE Hangman Game","description":"This is a single page, Vanilla Javascript hangman game.  Themed with my favorite wrestlers of all time.","link":"https://bdelong.github.io/Word-Guess-Game/#","github":"https://github.com/bdeLong/Word-Guess-Game","img":"wrestling.png"},{"title":"The Office Trivia Game","description":"Classic timed jQuery trivia game themed to NBC\'s \'The Office\'.","link":"https://bdelong.github.io/TriviaGame/","github":"https://github.com/bdeLong/TriviaGame","img":"theoffice.png"},{"title":"Catch a Ride!","description":"Catch a Ride is a train schedule application that incorporates Firebase to host arrival and departure data.","link":"https://github.com/bdeLong/Train_Timer","github":"https://bdelong.github.io/Train_Timer/","img":"catcharide.png"}]}')},26:function(e,t,n){e.exports=n(42)},31:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),l=(n(31),n(1)),c=n(2),s=n(4),u=n(3),m=n(5),d=n(24),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleScroll",value:function(e){console.log("sup");var t=setInterval((function(){window.scrollY>=window.innerHeight?clearInterval(t):(window.scroll({top:window.scrollY+(window.innerHeight+64-window.scrollY)/24,left:0}),window.addEventListener("touchstart",(function e(n){clearInterval(t),window.removeEventListener("touchstart",e)})))}),25)}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"landing"},r.a.createElement("h1",{className:"name"},"Benjamin deLong"),r.a.createElement("h2",{className:"title"},r.a.createElement(d.a,{interval:2e3,mask:!0,children:["Web Developer","Analyst","Outdoorsman","Softball Player","Netflix Binger","SciFi & Fantasy Fan","Metal Head","Beer Drinker","Continuous Learner","Video Gamer","Book Worm"]})," ","| Chicago, IL"),r.a.createElement("img",{className:"landing-img",src:"./images/beer2.png",alt:"Cheers!"}),r.a.createElement("div",{className:"email"},r.a.createElement("a",{href:"mailto:bendelong45@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"social-link"},"bendelong45@gmail.com")),r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:"https://github.com/bdelong",target:"_blank",rel:"noopener noreferrer",className:"social-link"},"GitHub"),r.a.createElement("span",null,"|"),r.a.createElement("a",{href:"https://www.linkedin.com/in/benjaminmdelong/",target:"_blank",rel:"noopener noreferrer",className:"social-link"},"LinkedIn"),r.a.createElement("span",null,"|"),r.a.createElement("a",{href:"https://instagram.com/frost_beard",target:"_blank",rel:"noopener noreferrer",className:"social-link"},"Instagram")),r.a.createElement("img",{className:"scroll-down",src:"./images/scroll2.png",alt:"scroll",onClick:function(t){return e.handleScroll(t)}}))}}]),t}(a.Component),p=n(22),g=n(16),b=n(23),f=n(44),v=n(17),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.img,n=e.selected;return r.a.createElement("div",{className:"project-item-container"+(n?" selected":""),onClick:this.props.select},r.a.createElement("div",{className:"project-item",style:{backgroundImage:"url('./images/".concat(t,"')")}}))}}]),t}(a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.link,n=e.github,i=e.img,o=e.title,l=e.description,c=e.category;return r.a.createElement("div",{className:"project-shown "+c},r.a.createElement("div",{className:"container",style:{backgroundImage:"url('./images/".concat(i,"')")}}),r.a.createElement("div",{className:"project-details"},r.a.createElement("div",null,r.a.createElement("h3",{className:"title"},r.a.createElement("span",null,o)),r.a.createElement("p",{className:"description"},l)),r.a.createElement("div",null,t?r.a.createElement(a.Fragment,null,r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"website"),r.a.createElement("span",null,"|")):null,n?r.a.createElement(a.Fragment,null,r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},"github")):null)))}}]),t}(a.Component);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).interval=null,n.state={selected:0,pending:0,changeSelect:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"categorizeProjects",value:function(e){var t={},n=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;t.hasOwnProperty(l.category)?t[l.category]=[].concat(Object(b.a)(t[l.category]),[l]):t=j({},t,Object(g.a)({},l.category,[l]))}}catch(c){a=!0,r=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return t}},{key:"renderProjects",value:function(e){return e.map((function(e,t){return r.a.createElement(y,Object.assign({key:e.title.replace(/\W/g,"")},e))}))}},{key:"renderCategories",value:function(e){var t=this;return Object.entries(e).map((function(e){var n=Object(p.a)(e,2),a=n[0],i=n[1];return r.a.createElement("section",{key:a,className:"category "+a},r.a.createElement("h3",null,a.replace(/-/g," ")),r.a.createElement("div",{className:"projects-list "+a},t.renderProjects(i)))}))}},{key:"handleMove",value:function(e){var t=this,n=this.refs.listElem,a=n.scrollWidth,r=n.clientWidth,i=r/2,o=a-r,l=r<768?50:80;clearInterval(this.interval),this.interval=setInterval((function(){(e&&n.scrollLeft>=o||!e&&n.scrollLeft<=0)&&clearInterval(t.interval),n.scrollLeft+=e?i/l:-i/l}))}},{key:"handleMoveStop",value:function(){clearInterval(this.interval)}},{key:"handleSelect",value:function(e){var t=this.state.selected;this.setState({pending:e,changeSelect:t===e})}},{key:"handleExited",value:function(){var e=this.state.pending;this.setState({selected:e,changeSelect:!0})}},{key:"render",value:function(){var e=this,t=this.state,n=t.pending,a=t.changeSelect,i=v.items.map((function(t,a){return r.a.createElement(y,Object.assign({key:t.title.replace(/\W/g,"")},t,{select:function(t){return e.handleSelect(a)},selected:n===a}))})),o=v.items[this.state.selected];return r.a.createElement("section",{className:"projects"},r.a.createElement("h1",null,"Projects"),r.a.createElement(f.a,{in:a,classNames:"project",timeout:200,onExited:function(){return e.handleExited()}},r.a.createElement(k,o)),r.a.createElement("div",{className:"projects-container"},r.a.createElement("button",{onMouseDown:function(t){return e.handleMove(!1)},onMouseUp:function(t){return e.handleMoveStop()},onTouchStart:function(t){return e.handleMove(!1)},onTouchEnd:function(t){return e.handleMoveStop()}},r.a.createElement("img",{src:"./images/arrow-left.png",alt:"<"})),r.a.createElement("div",{className:"projects-list",ref:"listElem"},i),r.a.createElement("button",{onMouseDown:function(t){return e.handleMove(!0)},onMouseUp:function(t){return e.handleMoveStop()},onTouchStart:function(t){return e.handleMove(!0)},onTouchEnd:function(t){return e.handleMoveStop()}},r.a.createElement("img",{src:"./images/arrow-right.png",alt:">"}))))}}]),t}(a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"about"},r.a.createElement("h1",null,"About me"),r.a.createElement("p",null,"I love creative problem solving, building ambitious websites and applications, and cold beer. I also enjoy being around like minded people, learning, innovating, and pushing the boundaries of my ever expanding comfort zone."),r.a.createElement("p",null,"My experiences are wide-ranging and have opened my mind and broadened my creativity. I hold a Bachelor of Science degree from the University of Wisconsin-Madison, as well as a Full-Stack Wed Development certificate from Northwestern University."),r.a.createElement("p",null,"My projects include web applications with dynamic web content, live content update, and server side rendering all utilizing the MERN stack."))}}]),t}(a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"skills"},r.a.createElement("pre",null,"let skillsChecklist = {\n\nfrontEnd: ['Javascript','ES6','React','HTML 5',\n'CSS 3','JQuery','Bootstrap 4'],\n\nbackEnd: ['Node.js','MongoDB','Express','MySQL'],\n\ntools: ['Github','Heroku','Git', 'Some Photoshop']\n\n}"))}}]),t}(a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"top-border"}),r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(w,null),r.a.createElement(S,null),r.a.createElement("footer",null,"\xa9 2019 Ben deLong. All rights reserved."))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.dd645316.chunk.js.map