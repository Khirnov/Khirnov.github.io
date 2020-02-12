window.onload = function()
{
  let nav = document.querySelectorAll('h1')[0];
  if(nav){
    let
     active = nav.innerText,
     menu = document.getElementById('top-menu'),
     links = menu.getElementsByTagName('a');
    for(let i=0; i<links.length; i++)
    {
      if(active === links[i].text){
        links[i].classList.add('active');
        break;
      }
    }
  }
}
