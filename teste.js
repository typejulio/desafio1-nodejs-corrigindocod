function a({title, name}) {
    const sd = {
        title: 'Sei lá',
        name: "Que ce quiser tbm"
    }  
    const UpdatedSd = {
        ...sd,
        title: title ?? sd.title,
        name: name ?? sd.name
    }
    console.log({UpdatedSd})
  }
  
  
  a({title: "PA"})