const hamIc = document.getElementById('hamburger');
const navBar = document.querySelector('nav');
const headerNav = document.querySelector('header');
// Function om menu te expanden
function hamburgerMenu() {
  const backgroundSVG = document.getElementById("redBack");
  const textsb = document.querySelectorAll('.b');
  // gsap animatie van het menu
  TweenLite.to("#TheShape", .3, { attr: { points: '0 0 375 0 375 266.819804 0 412.768049' }, ease: Linear.easeNone });
  textsb.forEach(text => {
    text.classList.toggle('active-nav')
  });
  navBar.innerHTML = `
    <button id="hamburgerOff">
        <svg width="32px" height="24px" viewBox="0 0 32 24" version="1.1" xmlns="http://www.w3.org/2000/svg"      xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
              <path d="M28,8.57142857 L4,8.57142857 C1.791,8.57142857 0,10.1057143 0,12 C0,13.8942857 1.791,15.4285714 4,     15.4285714 L28,15.4285714 C30.209,15.4285714 32,13.8942857 32,12 C32,10.1057143 30.209,8.57142857 28,8.57142857 L28,    8.57142857 Z M28,17.1428571 L4,17.1428571 C1.791,17.1428571 0,18.6771429 0,20.5714286 C0,22.4657143 1.791,24 4,24     L28,24 C30.209,24 32,22.4657143 32,20.5714286 C32,18.6771429 30.209,17.1428571 28,17.1428571 L28,17.1428571 Z M4,    6.85714286 L28,6.85714286 C30.209,6.85714286 32,5.32285714 32,3.42857143 C32,1.53428571 30.209,0 28,0 L4,0 C1.791,0      0,1.53428571 0,3.42857143 C0,5.32285714 1.791,6.85714286 4,6.85714286 L4,6.85714286 Z" id="path-1"></path>
              <filter x="-3.1%" y="-4.2%" width="106.2%" height="108.3%" filterUnits="objectBoundingBox" id="filter-2">
                  <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                  <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                  <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"       result="shadowInnerInner1"></feComposite>
                  <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix"      in="shadowInnerInner1"></feColorMatrix>
              </filter>
          </defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="GlobalGiants" transform="translate(-10.000000, -704.000000)">
                  <g id="hamburger" transform="translate(10.000000, 704.000000)">
                      <g id="Fill-38">
                          <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                          <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                      </g>
                  </g>
              </g>
          </g>
        </svg>
      </button >
    `;
  headerNav.classList.toggle('toggled');
  const hamIcO = document.getElementById('hamburgerOff');
  hamIcO.addEventListener('click', hamburgerMenuOff);
}

function hamburgerMenuOff() {
  const backgroundSVG = document.getElementById("redBack");
  const textsb = document.querySelectorAll('.b');
  // gsap animatie van het menu
  TweenLite.to("#TheShape", .3, { attr: { points: '0 0 375 0 375 92.2141075 0 245.882492' }, ease: Linear.easeNone });
  textsb.forEach(text => {
    text.classList.toggle('active-nav')
  });
  navBar.innerHTML = `<button id="hamburger">
        <svg width="32px" height="24px" viewBox="0 0 32 24" version="1.1" xmlns="http://www.w3.org/2000/svg"      xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
              <path d="M28,8.57142857 L4,8.57142857 C1.791,8.57142857 0,10.1057143 0,12 C0,13.8942857 1.791,15.4285714 4,     15.4285714 L28,15.4285714 C30.209,15.4285714 32,13.8942857 32,12 C32,10.1057143 30.209,8.57142857 28,8.57142857 L28,    8.57142857 Z M28,17.1428571 L4,17.1428571 C1.791,17.1428571 0,18.6771429 0,20.5714286 C0,22.4657143 1.791,24 4,24     L28,24 C30.209,24 32,22.4657143 32,20.5714286 C32,18.6771429 30.209,17.1428571 28,17.1428571 L28,17.1428571 Z M4,    6.85714286 L28,6.85714286 C30.209,6.85714286 32,5.32285714 32,3.42857143 C32,1.53428571 30.209,0 28,0 L4,0 C1.791,0      0,1.53428571 0,3.42857143 C0,5.32285714 1.791,6.85714286 4,6.85714286 L4,6.85714286 Z" id="path-1"></path>
              <filter x="-3.1%" y="-4.2%" width="106.2%" height="108.3%" filterUnits="objectBoundingBox" id="filter-2">
                  <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                  <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                  <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"       result="shadowInnerInner1"></feComposite>
                  <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix"      in="shadowInnerInner1"></feColorMatrix>
              </filter>
          </defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="GlobalGiants" transform="translate(-10.000000, -704.000000)">
                  <g id="hamburger" transform="translate(10.000000, 704.000000)">
                      <g id="Fill-38">
                          <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                          <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                      </g>
                  </g>
              </g>
          </g>
        </svg>
      </button >
    `;
  headerNav.classList.toggle('toggled');
  const hamIc2 = document.getElementById('hamburger');
  hamIc2.addEventListener('click', hamburgerMenu);
}


hamIc.addEventListener('click', hamburgerMenu);


function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
// No head at bottom one
let lastSec = document.getElementById('sec-5');
const footerEl = document.querySelector('footer');

function hideBottom() {
  const distanceTop = lastSec.offsetTop - lastSec.clientHeight / 2;
  const isLastSec = window.scrollY > distanceTop;
  console.log(isLastSec);
  console.log(distanceTop);
  if (isLastSec) {
    footerEl.classList.add('hidden');
  } else {
    footerEl.classList.remove('hidden');

  }
}

document.addEventListener('scroll', debounce(hideBottom));