const Annotations = require('../models/AnnotationData');

module.exports = {
  async read(req, res){
    const priority = await req.query;

    const priorityNotes = await Annotations.find(priority)
    return res.json(priorityNotes);

    // if(priorityNotes){
    //   return res.json(priorityNotes);
    // }

    // return res.json('No priority notes')
  },

  async update(req, res){
    const { id } = await req.params;

    const annotation = await Annotations.findOne({_id : id})

    if (annotation.priority){
      annotation.priority = false
    } else {
      annotation.priority = true
    }

    await annotation.save();

    return res.json(annotation)
  }
}