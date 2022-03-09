const Annotations = require('../models/AnnotationData');

module.exports = {
  async update(req, res){
    const { id } = await req.params;
    const { notes } = req.body;

    const annotation = await Annotations.findOne({_id : id})

    if (notes){
      annotation.notes = notes
      await annotation.save()

      return res.json(annotation)
    }

    return res.json(annotation)

  }
}