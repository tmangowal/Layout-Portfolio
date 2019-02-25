var count = 0

function imgIntro() {
    document.getElementById('jumbotron').innerHTML =
        `<h1 id="big-text-intro" class="big-text-opacity-0">The story of how I got here</h1>`
    setTimeout(function testing2() {
        document.getElementById('big-text-intro').style.opacity = '1'
    }, 1)
    count = 1
}
imgAbout = () => {
    document.getElementById('jumbotron').innerHTML =
        `<h1 id="big-text-about" class="big-text-opacity-0">Find out more about me here!</h1>`
    setTimeout(function () {
        document.getElementById('big-text-about').style.opacity = '1'
    }, 1)
    count = 1
}
imgPort = () => {
    document.getElementById('jumbotron').innerHTML =
        `<h1 id="big-text-port" class="big-text-opacity-0">Check out my portfolio!</h1>`
    setTimeout(function () {
        document.getElementById('big-text-port').style.opacity = '1'
    }, 1)
    count = 1
}
imgContact = () => {
    document.getElementById('jumbotron').innerHTML =
        `<h1 id="big-text-contact" class="big-text-opacity-0">My contact details</h1>`
    setTimeout(function () {
        document.getElementById('big-text-contact').style.opacity = '1'
    }, 1)
    count = 1
}
defaultMain = () => {
    if (count != 0) {
        document.getElementById('jumbotron').innerHTML =
            `<h1 id="h1Main" style="text-align: center;
            font-size: 74px;
            font-family: serif !important; opacity:0; transition: 0.5s;">I'm a web developer working in BSD</h1>`
        setTimeout(function () {
            document.getElementById('h1Main').style.opacity = '1'
        }, 1)
        count = 0
    }
}
revealIntro = () => {
    document.getElementById('content').innerHTML = `<div id="intro" class="intro">
    <div class="container">
        <div class="row p-5">
            <div class="col-md-6 text-md-right col-12 text-center">
                <h1 class="text-muted">My story</h1>
            </div>
            <div class="col-md-6 text-md-left col-12 text-center">
                <p>I was 18 at that time, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
                    deserunt magnam similique numquam atque, dolore repellendus, maxime ipsa ea ab. Eaque quibusdam
                    unde magnam facere quae voluptatibus necessitatibus assumenda? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Possimus nesciunt fugiat saepe inventore, nihil omnis quod
                    consequatur, commodi est temporibus reiciendis cupiditate. Fugiat aliquid maxime veniam et
                    sequi consequuntur suscipit!</p>
            </div>
        </div>
    </div>
</div>`
setTimeout(function () {
    document.getElementById('intro').style.opacity = '1'
}, 1)
    
}
revealAbout = () =>{
    document.getElementById('content').innerHTML = `<div class="about" id="about">
    <div class="container">
        <div class="row p-5">
            <div class="col-sm-4 text-center pb-5">
                <h3>Personal Info</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis quas rerum minima doloribus
                aperiam, placeat modi magni assumenda, vero sequi unde explicabo dolore neque necessitatibus rem
                fuga. Quae, enim.
            </div>
            <div class="col-sm-4 text-center pb-5">
                <h3>Specialties</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis quas rerum minima doloribus
                aperiam, placeat modi magni assumenda, vero sequi unde explicabo dolore neque necessitatibus rem
                fuga. Quae, enim.
            </div>
            <div class="col-sm-4 pb-5">
                <h3 class=" text-center">Working Experience</h3>
                <ul>
                    <li>3 Years in hello</li>
                    <li>Achieved blala</li>
                </ul>
            </div>
        </div>
    </div>
</div>`
setTimeout(function () {
    document.getElementById('about').style.opacity = '1'
}, 1)
}
revealPortfolio = () => {
    document.getElementById('content').innerHTML = `<div class="portfolio text-center" id="portfolio">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pb-3">
                <h2>My Portfolio</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <img class="img-fluid" src="photo1.jpg" alt="">
            </div>
            <div class="col-md-4">
                <img class="img-fluid" src="photo2.jpg" alt="">
            </div>
            <div class="col-md-4">
                <img class="img-fluid" src="photo3.jpg" alt="">
            </div>
        </div>
    </div>
</div>`   
setTimeout(function () {
    document.getElementById('portfolio').style.opacity = '1'
}, 1)
}
revealContact = () =>{
    document.getElementById('content').innerHTML = `<div class="contact" id="contact">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-12 text-center">
                <h1 style="font-family:serif;">I live to code</h1>
            </div>
            <div class="col-md-6 big-text-line">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem numquam doloribus, non
                    dignissimos in at, reiciendis praesentium et alias ullam doloremque sed, blanditiis eius
                    voluptate nam. Ratione, voluptate voluptatibus. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Illum odit dolorem sunt dolores quo officia, porro quaerat iusto impedit iste
                    facere inventore velit reprehenderit quia facilis, dolor tempore natus alias.</p>
                <br>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolor vel deserunt iste modi,
                    veniam laborum dignissimos sed harum non incidunt maxime tempore, consectetur eligendi nam
                    temporibus reprehenderit obcaecati nobis.</p>
            </div>
        </div>
        <div class="small-space">

        </div>
        <div class="row">
            <div class="col-md-6 col-12 text-md-center text-center">
                <h1 style="font-family:serif;">Say Hi!</h1>
            </div>
            <div class="col-md-6 big-text-line text-md-left text-center">
                <strong><a href="mailto:tmangowal@gmail.com?Subject:Hello">tmangowal@gmail.com</a></strong>
                <br>
                <br>
                <br>
                <strong>Find me on social media:</strong>
                <br>
                <a onclick="alert('gak punya facebook hehe')" href="#contact"><img class="icon" src="facebook-logo-button.png" alt=""></a>
                <a href="https://www.instagram.com/theoteyo/"><img class="icon" src="instagram-logo.png" alt=""></a>
                <a onclick="alert('gak punya twitter hehe')" href="#contact"><img class="icon" src="twitter-logo-button.png" alt=""></a>
            </div>
        </div>
    </div>
</div>`
setTimeout(function () {
    document.getElementById('contact').style.opacity = '1'
}, 1)
}
revealAll = () =>{
    document.getElementById('content').innerHTML = `<div id="intro" class="intro">
    <div class="container">
        <div class="row p-5">
            <div class="col-md-6 text-md-right col-12 text-center">
                <h1 class="text-muted">My story</h1>
            </div>
            <div class="col-md-6 text-md-left col-12 text-center">
                <p>I was 18 at that time, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
                    deserunt magnam similique numquam atque, dolore repellendus, maxime ipsa ea ab. Eaque quibusdam
                    unde magnam facere quae voluptatibus necessitatibus assumenda? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Possimus nesciunt fugiat saepe inventore, nihil omnis quod
                    consequatur, commodi est temporibus reiciendis cupiditate. Fugiat aliquid maxime veniam et
                    sequi consequuntur suscipit!</p>
            </div>
        </div>
    </div>
</div>
<div class="about" id="about">
    <div class="container">
        <div class="row p-5">
            <div class="col-sm-4 text-center pb-5">
                <h3>Personal Info</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis quas rerum minima doloribus
                aperiam, placeat modi magni assumenda, vero sequi unde explicabo dolore neque necessitatibus rem
                fuga. Quae, enim.
            </div>
            <div class="col-sm-4 text-center pb-5">
                <h3>Specialties</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis quas rerum minima doloribus
                aperiam, placeat modi magni assumenda, vero sequi unde explicabo dolore neque necessitatibus rem
                fuga. Quae, enim.
            </div>
            <div class="col-sm-4 pb-5">
                <h3 class=" text-center">Working Experience</h3>
                <ul>
                    <li>3 Years in hello</li>
                    <li>Achieved blala</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="portfolio text-center" id="portfolio">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pb-3">
                <h2>My Portfolio</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <img class="img-fluid" src="photo1.jpg" alt="">
            </div>
            <div class="col-md-4">
                <img class="img-fluid" src="photo2.jpg" alt="">
            </div>
            <div class="col-md-4">
                <img class="img-fluid" src="photo3.jpg" alt="">
            </div>
        </div>
    </div>
</div>
<div class="contact" id="contact">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-12 text-center">
                <h1 style="font-family:serif;">I live to code</h1>
            </div>
            <div class="col-md-6 big-text-line">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem numquam doloribus, non
                    dignissimos in at, reiciendis praesentium et alias ullam doloremque sed, blanditiis eius
                    voluptate nam. Ratione, voluptate voluptatibus. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Illum odit dolorem sunt dolores quo officia, porro quaerat iusto impedit iste
                    facere inventore velit reprehenderit quia facilis, dolor tempore natus alias.</p>
                <br>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolor vel deserunt iste modi,
                    veniam laborum dignissimos sed harum non incidunt maxime tempore, consectetur eligendi nam
                    temporibus reprehenderit obcaecati nobis.</p>
            </div>
        </div>
        <div class="small-space">

        </div>
        <div class="row">
            <div class="col-md-6 col-12 text-md-center text-center">
                <h1 style="font-family:serif;">Say Hi!</h1>
            </div>
            <div class="col-md-6 big-text-line text-md-left text-center">
                <strong><a href="mailto:tmangowal@gmail.com?Subject:Hello">tmangowal@gmail.com</a></strong>
                <br>
                <br>
                <br>
                <strong>Find me on social media:</strong>
                <br>
                <a onclick="alert('gak punya facebook hehe')" href="#contact"><img class="icon" src="facebook-logo-button.png"
                        alt=""></a>
                <a href="https://www.instagram.com/theoteyo/"><img class="icon" src="instagram-logo.png" alt=""></a>
                <a onclick="alert('gak punya twitter hehe')" href="#contact"><img class="icon" src="twitter-logo-button.png"
                        alt=""></a>
            </div>
        </div>
    </div>
</div>`
setTimeout(function () {
    document.getElementById('intro').style.opacity = '1'
    document.getElementById('about').style.opacity = '1'
    document.getElementById('portfolio').style.opacity = '1'    
    document.getElementById('contact').style.opacity = '1'
}, 1)
}