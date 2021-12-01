let publicaciones = [
  
]

export const viewpubli = (req,res)=>{
    res.status(200).render('publicacion',{publicaciones :publicaciones })
    
}


export const create = async (req,res)=>{
  let nuevaPublicacion = req.body
  nuevaPublicacion.id = Math.floor(Math.random()*1000000000)
  console.log(nuevaPublicacion)
  nuevaPublicacion.foto = nuevaPublicacion.id + ".png" 
  publicaciones.push(nuevaPublicacion) 

  res.status(200).redirect('/instagram')
 }


  
 