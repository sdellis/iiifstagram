
const ManifestoReactMixins = {

  hello: function(){
    console.log( "hello!" );
  },

  title: function(){
    console.log( this.getLabel() );
  },

  mainSequence: function(){
    // mainSequence is the one without an id (not ideal since it could have an id)
    const s = this.getSequences()
    const main_sequence = s.filter((seq) => seq.id !== 'undefined')
    return main_sequence[0]
  },

  getCanvasMainThumb: function(canvas){
    const images = canvas.getImages()
    const services = images[0].getResource().getServices()
    return services[0].id + '/full/400,/0/default.jpg'
  },

  getCanvasCode: function(canvas_id){
    const arr = canvas_id.split("/")
    return arr.slice(-1)[0]
  },

  posts: function(){
    const s = this.mainSequence()
    const canvases = s.getCanvases()
    return canvases.map(canvas => ({
      code: this.getCanvasCode(canvas.id),
      caption: canvas.getLabel(),
      likes: 0,
      id: canvas.id,
      display_src: this.getCanvasMainThumb(canvas)
    }));
  }

}

export default ManifestoReactMixins;
