
const posters = [
    {
      image: 'https://images.unsplash.com/photo-1687170570291-25fa0b2ac336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80',
      title: 'No Excuses',
      quote: "'What comes around goes around like a hula hoop'",
    },
    {
      image: "https://images.unsplash.com/photo-1687226013074-5d59ffeb2625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
      title: 'Apotheosis',
      quote: "'Reach for the stars aim for the moon'",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1686975618041-8f4971436c47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        title: 'Freedom',
        quote: 'What doesnt kill you makes you stronger',
    },
     
    
  ];
   const randomButton=document.getElementById("randomize")
   console.log(randomButton)
    randomButton.onclick = generateRandomPoster;


   

  let imgRef = document.getElementById("poster-image")
  let imgTitle=document.getElementById("poster-title")
  let imgQuote=document.getElementById("poster-quote")
  console.log('imgRef', imgRef)

  
  function generateRandomPoster() {
    let random=(Math.floor(Math.random()*posters.length));
   
    imgRef.setAttribute('src', posters[random].image)
    imgTitle.innerHTML=posters[random].title;
    imgQuote.innerHTML=posters[random].quote;
    
    
  }
  
 

 let form=document.getElementById('poster-form')



  form.addEventListener('submit',function(event){
    event.preventDefault();
    let quote=document.getElementById('form-quote').value;
    let title = document.getElementById('form-title').value;
    
    console.log(quote);
    console.log(title);
    updatePoster(title,quote)
  })
  
    
  
   
  
  
  // Function to update the poster content in the DOM
  function updatePoster( title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    imgTitle.innerHTML=title
    imgQuote.innerHTML=quote;
    imgRef.setAttribute("src",'https://images.unsplash.com/photo-1614915760393-96de312e2bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW91JTIwd2VsY29tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')
    
  }
  