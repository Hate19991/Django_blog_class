/*product slider, api caller(img,iframe,json), 
 work on image slider bugs , style video player properly , fix touchables , message& snackbar , opt(loader splash and app run)
make launch page
 : launch if done*/
 //touchable
 let touchables = document.querySelectorAll(".touchable")
 for(let i = 0 ; i < touchables.length; i++){
  let span = document.createElement("span")
  span.style.opacity = "0.6"
  let size = 0
  span.style.width = "10px"
  span.style.height = "10px"
  span.style.float = "left"
  span.classList.add("bg-r")  
  span.style.borderRadius = "5px"
  span.style.position = "absolute"
 console.log(span)
  // document.body.appendChild(span)

  document.addEventListener("click",function func(e){
   
    let posx = e.clientX
    let posy = e.clientY
   touchables[i].appendChild(span)
    span.style.left = `${posx}px`
    span.style.top = `${posy}px`
    span.style.backgroundColor ="blue"
    span.style.transform = "scale(3)"
    span.style.transition = "transform 3s"

  
    setTimeout(()=>{

    size = undefined
    document.removeEventListener("click",func)
    }
      ,1000)
  })}
 
 //theme selector
 function Activate_theme(){
let theme = document.body.getAttribute("data-vd-themed")
let links = document.querySelectorAll("link")
console.log(theme)

for(let i = 0 ; i < links.length ; i++){
  let pixelLink = links[0].getAttribute("href")
  if(pixelLink == "pixelart.css"){
    if(theme == "true" || theme == "True"){
      links[i].removeAttribute("href")
    links[i].setAttribute("href","./darkVoid.css")
    console.log('done')

  }
  }

else{
  console.log("...")
  return
}
}
 }
Activate_theme()

 //backhandler
 function backhandler(){
document.addEventListener("keyup",(e)=>{
if(e.key == "b"){
history.back()
let b = 0
console.log(typeof(b))
console.log(history.back())
}
})
 }

//server cookies
class Get_values{
  constructor(client_id , cookietime , expiration){
      this.client_id = client_id;
      this.cookietime = cookietime;
      this.expiration = expiration;
  }
} 
class Create_cookies extends Get_values{
  constructor(client_id , cookietime , expiration){
      super(client_id , cookietime , expiration)
  }//demo cookie
  Write_cookies(){
      document.cookie = `${this.client_id} cookie was created at ${this.cookietime} and will expire at ${this.expiration}`
      console.log(`${this.client_id} cookie was created at ${this.cookietime} and will expire at ${this.expiration}`)

  }
}
// use this to initialize in your code
// const My_cookie = new Create_cookies("John doe" , "19:00" , "5:00")
// My_cookie.Write_cookies()


//video player
let videoplayer = document.querySelectorAll(".videoplayer")
let video = document.querySelectorAll("video")

if(videoplayer != null){
let first_click = true
for(let i = 0 ; i < videoplayer.length ; i++){
  let skipLength = document.createElement("button")
  let previous = document.createElement("button")
  let play = document.createElement("button")
  let pause = document.createElement("button")
  let next_vid = document.createElement("button")
  let last_vid = document.createElement("button")
  let speed = document.createElement("button")
  let speed_0X = document.createElement("button")
  let speed_1X = document.createElement("button")
  let speed_2X = document.createElement("button")
  let speed_container = document.createElement("div")
  let fullscreen = document.createElement("button")
  let vidrange = document.createElement("input")
  let download_btn = document.createElement("a")
  let breaker = document.createElement("br")
  let vid_length = video[i].duration
  vidrange.setAttribute("type", "range")
  vidrange.setAttribute("min" , "0")
  vidrange.setAttribute("max" , vid_length)
  skipLength.innerHTML = ">>"
  previous.innerHTML = "<<"
  last_vid.innerHTML = "|<"
  next_vid.innerHTML = "|>"
  pause.innerHTML = "||"
  fullscreen.innerHTML = "~~"
  download_btn.innerHTML = "download"
  play.innerHTML = "i>"
  speed.innerHTML = "playback speed"
  speed_0X.innerHTML = "0.5x"
  speed_1X.innerHTML = "1x"
  speed_2X.innerHTML = "2x"
  speed_container.appendChild(speed_0X)
  speed_container.appendChild(speed_1X)
  speed_container.appendChild(speed_2X)
  speed_container.style.display = "none"
  next_vid.onclick = ()=>{
    let p = i + 1
    if(p != video.length){
      video[i].pause()
      video[p].play()
      console.log(video.length)
    }
    else{
      video[0].play()      
    }
  }
  last_vid.onclick = ()=>{
    let p = i - 1
    if(p != video.length){
      video[i].pause()
      video[p].play()
      console.log(video.length)
    }
    else{
      video[0].play()      
    }
  }
  vidrange.onchange = ()=>{
      video[i].currentTime = vidrange.value
      console.log(vidrange.value)
  }
  speed.onclick = ()=>{
  speed_container.style.display = "flex"
    
  }
  speed_0X.onclick = ()=>{
    setInterval(()=>{
      let speed = video[i].currentTime  - 10
      video[i].currentTime = speed
      }
      , 2000)

  }
  speed_1X.onclick= ()=>{
    setInterval(()=>{
      let speed = video[i].currentTime 
      video[i].currentTime = speed
      }
      , 1000)
  }
  speed_2X.onclick = ()=>{
    setInterval(()=>{
      let speed = video[i].currentTime * 1.5
      video[i].currentTime = speed
      }
      , 1000)
  }

  skipLength.onclick = ()=>{
      let plus = video[i].currentTime + 10
      video[i].currentTime  = plus
  }
  previous.onclick = ()=>{
      let minus = video[i].currentTime - 10
      video[i].currentTime  = minus
  }
  if(first_click == true){
    play.onclick = ()=>{
        video[i].play()
        first_click = false
    
    }
    pause.style.display = "none"

    video[i].addEventListener("play",()=>{
      play.style.display= "none"
      pause.style.display = 'block'
      
    })
    video[i].addEventListener("dblclick",()=>{
      video[i].requestPictureInPicture()
    })
  let video_src = video[i].getAttribute("src")
    fullscreen.addEventListener("click",()=>{
        window.location.href = `.${video_src}`
      
    })
  download_btn.setAttribute("href",video_src)
  download_btn.setAttribute("download", "video")
  videoplayer[i].appendChild(vidrange)
  videoplayer[i].appendChild(speed_container)
  videoplayer[i].appendChild(breaker)
  videoplayer[i].appendChild(skipLength)
  videoplayer[i].appendChild(download_btn)
  videoplayer[i].appendChild(next_vid)
  videoplayer[i].appendChild(last_vid)
  videoplayer[i].appendChild(previous)
  videoplayer[i].appendChild(play)
  videoplayer[i].appendChild(pause)
  videoplayer[i].appendChild(speed)
  videoplayer[i].appendChild(fullscreen)
  speed.classList.add("video-controls")
  play.classList.add("video-player")
  pause.classList.add("video-player")
  play.classList.add("highlight")
  pause.classList.add("highlight")
  previous.classList.add("video-controls")
  skipLength.classList.add("video-controls")
  vidrange.classList.add("range")
  console.log(video[i].duration)
  console.log(typeof(video[i].duration.value))
  console.log(vidrange)
}}
}

function open(){
  let button = document.querySelectorAll("button")
  for(let i = 0 ; i < button.length ; i++){
  let att = button[i].getAttribute("data-vd-target")
  if(att != undefined || att != null){
  let target = document.querySelectorAll(`.${att}`)
  let targetAtt = button[i].getAttribute("data-vd-target-func")
  button[i].addEventListener("click",
    function opened(){
    if (target[i] == null || target[i] == undefined){
      console.log("no element found")
      return
    }
    else{
      console.log(" ")
      if(targetAtt[i] == null || targetAtt[i] == undefined){
      target[i].classList.toggle('bg-d')
      console.log("....")
    }
      else{
        target[i].classList.toggle(targetAtt)
      }
    }}
  
    )
   }
}
}
open()
//menu button
document.addEventListener("DOMContentLoaded", btn())
function btn(){
let menuButton = document.querySelector(".menu-button") 
if (menuButton != null || menuButton != undefined){
  let bar1 = document.createElement("div")
  let bar2 = document.createElement("div")
  let bar3 = document.createElement("div")
  bar1.classList.add("bar1")
  bar2.classList.add("bar2")
  bar3.classList.add("bar3")
  menuButton.appendChild(bar1)
  menuButton.appendChild(bar2)
  menuButton.appendChild(bar3)
  menuButton.onclick = function openmenu(){
    menuButton.classList.toggle("change")
    menuButton.addEventListener("click",()=>{
      menuButton.classList.toggle("menu-button")
    })
  }
   }
 }

//snackbar/toast
let toast = document.createElement("div")
let snackbar = document.querySelectorAll(".snackbar")
for(let i= 0 ; i < snackbar.length ;i++){
document.addEventListener("DOMContentLoaded",()=>{
if (snackbar[i] != null && snackbar[i] != undefined){
toast.classList.add("toast")
toast.appendChild(snackbar[i])
}})}
 //sound effects
 document.addEventListener("DOMContentLoaded",()=>{
  let timer = document.getElementsByClassName("timer")
  for(let i = 0 ; i < timer.length ; i++){
  if(timer.length > 0){
    let hoursHolder = document.createElement("p")
    let minutesHolder = document.createElement("p")
    timer[i].appendChild(hoursHolder)
    timer[i].appendChild(minutesHolder)
    setInterval(
      function Update(){
        let period;

        if(new Date().getHours() > 12){
          period = "pm"
         }
         if(new Date().getHours() < 12){
          period = "am"
         }
        hoursHolder.innerHTML = new Date().getHours() + ":"
        minutesHolder.innerHTML = new Date().getMinutes() + period
      
        if(new Date().getHours() < 10){
         hoursHolder.innerHTML =  "0" + new Date().getHours() + ":"
        }
        
        if(new Date().getMinutes() < 10){
         minutesHolder.innerHTML =  "0" + new Date().getMinutes()
        }
   
     }
      , 1000)
   }}
 })

 function record_user (audiofeed , videofeed){

 
 navigator.mediaDevices.getUserMedia({video: videofeed, audio : audiofeed})
 .then(stream =>{
  let p = document.querySelectorAll("video")
  for(let i = 0 ; i < p.length ; i++){
  if (p[i].getAttribute("data-vd-record") == "true"){
  p[i].srcObject = stream
}
 
 }
 let a = document.querySelectorAll("audio")
 for(let i = 0 ; i < a.length ; i++){
 if (a[i].getAttribute("data-vd-record") == "true"){
 a[i].srcObject = stream
}

}
}

  )
  .catch(err=>{
    console.log(err + "error encountered")
  })
}


 //get user coordinates
 function getLocation(){
  try{
  if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
  } else{
    console.error("ENCOUNTERED ERROR: while getting coordinates")
  }}
  catch(e){
    console.error("ERROR" + e)
  }
}
function showPosition(position){
console.log("latitude: " + position.coords.latitude + "<br> longitude" + position.coords.longitude)
}

//copy to clipboard
let content //html content you wish to copy
let info  // input that serves the position to copy because you cant copy innerhtml content
//info can either be an input or textarea
if (info !=  null && content != null){
        let screen_size = screen.width
        console.log(screen_size)
        info
        function Copy(){
            info.value = content
            info.select();
            info.setSelectionRange(0, 1000)
            navigator.clipboard.writeText(info.value)
            console.log("text successfully copied "+ "'"+info.value+"'")

        }
} 
  //notification sender

  let notificationText;
  let title;
  let iconPath;
function notify(){
 Notification.requestPermission()
 .then(Permission => {
  if(notificationText != null && Permission == "granted"){
  let notification = new Notification(title,{
    icon : iconPath,
    body : notificationText,
  })
  if(notificationText == null && title == null && iconpath == null){
    console.warn("NO VALUES DETECTED")
  }
  }
  else{
    console.error("EITHER VALUES ARE MISSING OR PERMISSION WAS DENIED")
  }
 })
}
// notify()


//image slider
const slider = document.querySelector(".slider")
const imgslider = document.querySelectorAll(".imgslider");
for (let i = 0; i < imgslider.length; i++) {
  function playSlides() {
    let timer = -1;
    let fade ;
    let level = document.createElement("input")
    level.setAttribute("type" , "checkbox")
    let levels = document.cloneNode(level)
    let startCount = setInterval(() => {
      timer++;
      fade = timer -1
      console.log(timer);
      imgslider[fade].style.display = "none"
      imgslider[timer].style.display = "block"
      imgslider[timer].style.transition = "margin 3s"
      if (timer >= i) {
        timer = 0;
        clearInterval(startCount);  
      
      }
    }, 3000);
let flex = document.createElement("div")
let next = document.createElement("div")
let previous = document.createElement("div")
next.innerHTML = "Next"
previous.innerHTML = "Previous"
flex.appendChild(previous)
flex.appendChild(next)
previous.setAttribute("class" , "sliderButton")
next.setAttribute("class" , "sliderButton")
previous.addEventListener("click",()=>{timer--})
next.addEventListener("click",()=>{timer++})
flex.style.display = "flex"
slider.appendChild(flex)
  }
  
}

//password generator



         document.addEventListener("DOMContentLoaded",addGrad)
        function addGrad(){
          let button = document.querySelectorAll(".gradient")
          for(let i = 0 ; i <button.length ; i++){
          let color1 = button[i].getAttribute("data-vd-grad1")
          let color2 = button[i].getAttribute("data-vd-grad2")
          if(color1 != null && color2 != null  || 
            color1 =="" && color2 == "" ||
            color1 == undefined && color2 == undefined){
          button[i].style.background = `linear-gradient(45deg, ${color1} , ${color2})`
          button[i].style.transition= `background 3s`
        }
        else{
          color1 = "black"
          color2 = "black"
        }
         }
        }
//loader section
let pl = document.createElement("p")
pl.innerHTML = `<div class="loader">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="34px" height="40px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
  <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.8s" repeatCount="indefinite" />
    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.8s" repeatCount="indefinite" />
    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.8s" repeatCount="indefinite" />
  </rect>
  <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.8s" repeatCount="indefinite" />
    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.8s" repeatCount="indefinite" />
    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.8s" repeatCount="indefinite" />
  </rect>
  <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.8s" repeatCount="indefinite" />
    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.8s" repeatCount="indefinite" />
    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.8s" repeatCount="indefinite" />
  </rect>

</svg> 
</div>`
let onlineStatus = navigator.onLine
//implementation into code
document.addEventListener("DOMContentLoaded", ()=>{
  if(imgslider.length > 2){
    playSlides()
  }
})
